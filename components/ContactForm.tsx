'use client';
import { useState, useRef } from 'react';

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';

const isConfigured = 
  !!(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY && 
  SERVICE_ID !== 'your_service_id_here' && 
  TEMPLATE_ID !== 'your_template_id_here' && 
  PUBLIC_KEY !== 'your_public_key_here');

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus('sending');

    if (!isConfigured) {
      console.warn('EmailJS keys are not configured. Simulating form submission.');
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus('success');
      formRef.current.reset();
      setTimeout(() => setStatus('idle'), 6000);
      return;
    }

    try {
      const emailjs = (await import('@emailjs/browser')).default;
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      setStatus('success');
      formRef.current.reset();
      setTimeout(() => setStatus('idle'), 6000);
    } catch (err) {
      console.error('EmailJS send failed:', err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', padding: '1.75rem 2rem', borderRadius: 'var(--radius-lg)', position: 'relative', overflow: 'hidden', boxShadow: '0 10px 30px rgba(14,27,77,0.02)' }}>
      <h3 style={{ fontSize: '1.35rem', marginBottom: '1.25rem' }}>Send Us a Message</h3>

      {!isConfigured && (
        <div style={{ background: 'rgba(245,158,11,0.05)', border: '1px solid rgba(245,158,11,0.2)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', marginBottom: '1.25rem', color: '#D97706', fontSize: '13px', lineHeight: '1.5' }}>
          ⚠️ <strong>EmailJS not configured:</strong> Form submissions will be simulated. To receive actual emails, copy <code>.env.local.example</code> to <code>.env.local</code> and fill in your EmailJS credentials.
        </div>
      )}

      {status === 'success' && (
        <div style={{ background: 'rgba(16,185,129,0.05)', border: '1px solid rgba(16,185,129,0.2)', padding: '1.2rem', borderRadius: 'var(--radius-sm)', marginBottom: '1.25rem', color: '#15803D', fontWeight: 600, textAlign: 'center' }}>
          ✓ Thank you! We have received your inquiry and will respond within 24 hours.
        </div>
      )}
      {status === 'error' && (
        <div style={{ background: 'rgba(239,68,68,0.05)', border: '1px solid rgba(239,68,68,0.2)', padding: '1.2rem', borderRadius: 'var(--radius-sm)', marginBottom: '1.25rem', color: '#DC2626', fontWeight: 600, textAlign: 'center' }}>
          ✗ Something went wrong. Please try again or email us directly.
        </div>
      )}

      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="from_name">First Name *</label>
            <input type="text" id="from_name" name="from_name" placeholder="Enter your first name..." required />
          </div>
          <div className="form-group">
            <label htmlFor="last_name">Last Name</label>
            <input type="text" id="last_name" name="last_name" placeholder="Enter your last name..." />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="from_email">Email Address *</label>
            <input type="email" id="from_email" name="from_email" placeholder="name@company.com" required />
          </div>
          <div className="form-group">
            <label htmlFor="service">Service Interested In</label>
            <select id="service" name="service">
              <option value="">Select a service...</option>
              <option value="Website Development">Website Development</option>
              <option value="Web App Development">Web App Development</option>
              <option value="Mobile App Development">Mobile App Development</option>
              <option value="SEO & Marketing">SEO &amp; Digital Marketing</option>
              <option value="UI/UX Design">UI/UX Design Service</option>
              <option value="Odoo ERP Solutions">Odoo ERP Solutions</option>
              <option value="Other">Other / Consultation</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="message">Your Requirements *</label>
          <textarea id="message" name="message" rows={4} placeholder="Briefly describe your project details..." required />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          style={{ width: '100%', marginTop: '0.5rem' }}
          disabled={status === 'sending'}
        >
          {status === 'sending' ? 'Sending…' : 'Send Project Inquiry'}
        </button>
      </form>
    </div>
  );
}
