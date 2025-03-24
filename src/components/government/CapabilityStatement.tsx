'use client';
import { useState } from 'react';
import html2pdf from 'html2pdf.js';

export default function CapabilityStatement() {
  const [isGenerating, setIsGenerating] = useState(false);

  const generatePDF = async () => {
    setIsGenerating(true);
    const element = document.getElementById('capability-statement');
    
    try {
      // Temporarily add PDF class for compatible colors
      element?.classList.add('pdf-mode');
      
      // Add email addresses before PDF generation
      const emailElements = document.querySelectorAll('.pdf-only-email');
      emailElements.forEach(el => {
        if (el instanceof HTMLElement) {
          el.style.display = 'inline';
        }
      });
      
      await html2pdf().set({
        margin: 0.75, // Uniform margin of 0.75 inches on all sides
        filename: 'MelkenTechWork-Capability-Statement.pdf',
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { 
          scale: 3, // Increased for better quality
          useCORS: true,
          backgroundColor: '#ffffff'
        },
        jsPDF: { 
          unit: 'in', 
          format: 'letter', 
          orientation: 'portrait'
        },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
      }).from(element).save();
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      // Remove PDF class and hide emails after generation
      element?.classList.remove('pdf-mode');
      const emailElements = document.querySelectorAll('.pdf-only-email');
      emailElements.forEach(el => {
        if (el instanceof HTMLElement) {
          el.style.display = 'none';
        }
      });
      setIsGenerating(false);
    }
  };

  return (
    <>
      <div className="flex justify-end mb-6 space-x-4">
        <button
          onClick={generatePDF}
          disabled={isGenerating}
          className="inline-flex items-center bg-[#ACC3A6] hover:bg-[#9BB495] text-gray-900 px-6 py-3 rounded-full font-semibold transition-all duration-300"
        >
          {isGenerating ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Generating PDF...
            </>
          ) : (
            <>
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Capability Statement
            </>
          )}
        </button>
        
        <a
          href="/pdf/MelkenSolutionsGSAContract.pdf"
          download
          className="inline-flex items-center bg-[#ACC3A6] hover:bg-[#9BB495] text-gray-900 px-6 py-3 rounded-full font-semibold transition-all duration-300"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Download GSA MAS Contract
        </a>
      </div>

      <section id="capability-statement" className="capability-statement bg-white text-gray-800">
        <div className="avoid-break">
          <h2 className="text-4xl font-bold text-center text-[#4B0082] mb-10">
            Melken TechWork Capability Statement
          </h2>

          {/* Company Overview and NAICS section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 avoid-break mb-10">
            <div>
              <h3 className="text-xl font-semibold mb-2">Company Overview</h3>
              <p><strong>Legal Name:</strong> Melken Solutions, LLC<br />
                <strong>DBA:</strong> Melken TechWork<br />
                <strong>Address:</strong> 689 Lagoon Drive, Oviedo, FL 32765<br />
                <strong>Phone:</strong> 407-977-5673<br />
                <strong>Email:</strong>{' '}
                <span className="pdf-only-email">info@melkentech.com</span>
                <span className="website-only">
                  <a href="/contact" className="text-[#4B0082] underline">Contact Us</a>
                </span><br />
                <strong>Website:</strong> <a href="https://www.melkentech.com" className="text-[#4B0082] underline">melkentech.com</a><br />
                <strong>CAGE:</strong> 56UY7<br />
                <strong>UEI:</strong> SU9DCC122AB6<br />
                <strong>GSA Schedule:</strong> GS-03F-027GA
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Core NAICS Codes</h3>
              <ul className="list-disc list-inside">
                <li><strong>518210</strong> – Data Processing, Hosting, and Related Services (Primary)</li>
                <li><strong>541511</strong> – Custom Computer Programming Services</li>
                <li><strong>541611</strong> – Admin & General Management Consulting</li>
                <li><strong>541614</strong> – Process, Physical Distribution & Logistics Consulting</li>
              </ul>
            </div>
          </div>

          {/* Core Capabilities section */}
          <div className="avoid-break mt-10">
            <h3 className="text-xl font-semibold mb-2">Core Capabilities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-[#4B0082] mb-2">Technical Documentation & IETMs</h4>
                <ul className="list-disc list-inside mb-4">
                  <li>S1000D-compliant technical publications</li>
                  <li>Interactive Electronic Technical Manuals (IETMs)</li>
                  <li>Military specification documentation</li>
                  <li>Technical data package development</li>
                  <li>XML-based documentation systems</li>
                  <li>Configuration management and version control</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-[#4B0082] mb-2">Software Development</h4>
                <ul className="list-disc list-inside mb-4">
                  <li>Full-stack web applications</li>
                  <li>Mobile app development (iOS/Android)</li>
                  <li>Legacy system modernization</li>
                  <li>API development and integration</li>
                  <li>Database design and optimization</li>
                  <li>Cloud-native solutions (AWS/Azure)</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-[#4B0082] mb-2">Training Systems Integration</h4>
                <ul className="list-disc list-inside mb-4">
                  <li>Simulation system development</li>
                  <li>LMS implementation and customization</li>
                  <li>VR/AR training solutions</li>
                  <li>Computer-based training modules</li>
                  <li>Training effectiveness evaluation</li>
                  <li>SCORM/xAPI compliance</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-[#4B0082] mb-2">Professional Services</h4>
                <ul className="list-disc list-inside mb-4">
                  <li>Project management (PMP certified)</li>
                  <li>Agile development methodologies</li>
                  <li>Quality assurance and testing</li>
                  <li>Cybersecurity compliance</li>
                  <li>System integration services</li>
                  <li>Technical consulting</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="avoid-break">
            <h3 className="text-xl font-semibold mb-2">Past Performance Highlights</h3>
            <ul className="list-disc list-inside">
              <li>U.S. Navy: Developed and maintained technical documentation system supporting fleet operations</li>
              <li>Department of Justice: Implemented secure document management and workflow solutions</li>
              <li>Cubic Defense: Delivered integrated training systems and documentation for military programs</li>
              <li>Multiple federal agencies: Provided software development and system modernization services</li>
            </ul>
          </div>

          <div className="avoid-break">
            <h3 className="text-xl font-semibold mb-2">Certifications & Compliance</h3>
            <ul className="list-disc list-inside">
              <li>ISO 9001:2015 certified quality management system</li>
              <li>CMMC Level 2 compliance readiness</li>
              <li>Agile and ITIL certified practitioners</li>
              <li>Secret Facility Clearance</li>
              <li>PMP certified project managers</li>
            </ul>
          </div>

          <div className="avoid-break">
            <h3 className="text-xl font-semibold mb-2">Differentiators</h3>
            <ul className="list-disc list-inside">
              <li>Veteran-Owned Small Business with proven federal contracting experience</li>
              <li>Full lifecycle support from requirements analysis to maintenance</li>
              <li>Rapid deployment capabilities for CONUS and OCONUS operations</li>
              <li>Integrated solutions combining documentation, software, and training</li>
              <li>Strong past performance with federal agencies and prime contractors</li>
              <li>Expertise in military and government system compliance</li>
            </ul>
          </div>

          <div className="mt-10">
            <h3 className="text-xl font-semibold mb-2">Contact</h3>
            <p><strong>Kendall D. Felder</strong><br />
              President, CEO & Founder<br />
              Email: <span className="pdf-only-email">kfelder@melkentech.com</span>
              <span className="website-only">
                <a href="/contact" className="text-[#4B0082] underline">Contact Us</a>
              </span><br />
              Phone: <span className="pdf-only-phone">407-502-0253</span>
              <span className="website-only-phone">407-977-5673</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
