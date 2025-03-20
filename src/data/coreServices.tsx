import { ReactNode } from 'react';

export interface ServiceSection {
  title: string;
  items: string[];
}

export interface CoreService {
  title: string;
  description: string;
  icon: ReactNode;
  sections: ServiceSection[];
}

const coreServices: CoreService[] = [
  {
    title: "Technical Documentation",
    description: "Industry-leading documentation solutions leveraging modern standards and ISO-certified quality processes.",
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    sections: [
      {
        title: "Documentation Services",
        items: [
          "S1000D-compliant documentation",
          "Interactive Electronic Technical Manuals (IETMs)",
          "Military specification compliance",
          "Technical data packages"
        ]
      }
    ]
  },
  {
    title: "Custom Software Development",
    description: "Enterprise-grade software solutions tailored to your specific needs.",
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    sections: [
      {
        title: "Development Services",
        items: [
          "Full-stack web applications",
          "Mobile app development",
          "Legacy system modernization",
          "API development and integration",
          "Database design and optimization"
        ]
      }
    ]
  },
  {
    title: "Training Systems Integration",
    description: "Advanced training solutions for complex technical environments.",
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    sections: [
      {
        title: "Training Solutions",
        items: [
          "Interactive training simulations",
          "VR/AR training experiences",
          "Learning Management Systems (LMS)",
          "Performance tracking and analytics",
          "Competency-based assessments"
        ]
      }
    ]
  }
];

export default coreServices; 