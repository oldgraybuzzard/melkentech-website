import { NextResponse } from 'next/server';
import { Client } from 'node-mailjet';

const mailjet = new Client({
  apiKey: process.env.MAILJET_API_KEY!,
  apiSecret: process.env.MAILJET_API_SECRET!
});

export async function POST() {
  try {
    const senderEmail = process.env.MAILJET_SENDER_EMAIL;
    const senderName = process.env.MAILJET_SENDER_NAME;

    if (!senderEmail || !senderName) {
      return NextResponse.json(
        { error: 'Sender email and name are required' },
        { status: 400 }
      );
    }

    // First, check if sender exists
    const existingResponse = await mailjet
      .get('sender')
      .request();

    const existingSenders = (existingResponse.body as { Data: Array<{ Email: string; ID: number }> }).Data;
    const existingSender = existingSenders.find(s => s.Email === senderEmail);

    if (existingSender) {
      // If sender exists, try to validate it
      await mailjet
        .post(`sender/${existingSender.ID}/validate`)
        .request();

      return NextResponse.json({
        success: true,
        message: 'Existing sender validation initiated',
        sender: existingSender
      });
    }

    // If sender doesn't exist, create new one
    const response = await mailjet
      .post('sender')
      .request({
        Email: senderEmail,
        Name: senderName,
        EmailType: 'transactional',
        IsDefaultSender: true
      });

    const sender = response.body as { Data: Array<{ ID: number }> };
    
    if (sender.Data?.[0]?.ID) {
      const senderId = sender.Data[0].ID;
      
      await mailjet
        .post(`sender/${senderId}/validate`)
        .request();

      return NextResponse.json({
        success: true,
        message: 'New sender registered and validation initiated',
        sender: sender.Data[0]
      });
    }

    return NextResponse.json({ success: true, sender: sender.Data[0] });
  } catch (error) {
    console.error('Failed to register sender:', error);
    return NextResponse.json(
      { 
        error: 'Failed to register sender',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}