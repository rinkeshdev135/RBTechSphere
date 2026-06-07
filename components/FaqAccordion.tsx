'use client';
import { useState } from 'react';

const faqs = [
  { q: 'What is the typical timeline to build a custom website?', a: 'For standard business websites (approx. 5 pages), our timeline spans 2 to 3 weeks including wireframe review, responsive UI layout alignment, and final loading audits. Custom SaaS portals or enterprise web applications require 4 to 8 weeks depending on database requirements.' },
  { q: 'Do we get full source code ownership?', a: 'Yes. Upon completion of milestone payments, 100% of the repository ownership and intellectual property rights for the source code are transferred to your organization via secure GitHub directories.' },
  { q: 'How does payment work for projects?', a: "We work with milestone-based payment schedules. Usually, it's structured as a 30% kickoff deposit, 40% after prototype and dashboard design approval, and 30% prior to final production domain deployment." },
  { q: 'Can you integrate Odoo ERP with our existing software?', a: 'Yes. We specialize in using the Odoo XML-RPC and REST API protocols to connect custom modules with your existing ecommerce sites, PostgreSQL databases, or CRM platforms.' },
];

export default function FaqAccordion() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="faq-list">
      {faqs.map((faq, i) => (
        <div key={i} className={`faq-item${active === i ? ' active' : ''}`}>
          <div className="faq-question" onClick={() => setActive(active === i ? null : i)}>
            <span>{faq.q}</span>
            <span className="faq-toggle-icon">+</span>
          </div>
          <div className="faq-answer">
            <p>{faq.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
