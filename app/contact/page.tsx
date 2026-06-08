import type { Metadata } from 'next';
import Reveal from '@/components/Reveal';
import ContactForm from '@/components/ContactForm';
import FaqAccordion from '@/components/FaqAccordion';

export const metadata: Metadata = {
  title: 'Contact Us — RB TechSphere',
  description: 'Get a quote for custom website development, SaaS web apps, mobile apps, SEO, or Odoo ERP solutions. Contact RB TechSphere in Ahmedabad today.',
  openGraph: { url: 'https://rbtechsphere.com/contact' },
};

const contactDetails = [
  { icon: <svg viewBox="0 0 24 24" style={{width:22,height:22,fill:'currentColor'}}><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>, label: 'Email Address', value: <a href="mailto:info@rbtechsphere.com" style={{fontSize:'15.5px',fontWeight:600,color:'var(--text-main)'}}>info@rbtechsphere.com</a> },
  { icon: <svg viewBox="0 0 24 24" style={{width:22,height:22,fill:'currentColor'}}><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>, label: 'Phone Line', value: <a href="tel:+917990782351" style={{fontSize:'15.5px',fontWeight:600,color:'var(--text-main)'}}>+91 7990782351</a> },
  { icon: <svg viewBox="0 0 24 24" style={{width:22,height:22,fill:'currentColor'}}><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>, label: 'Office Location', value: <span style={{fontSize:'15.5px',fontWeight:600,color:'var(--text-main)'}}>A-304, Times Square 2 Sindhu Bhavan Road, (SBR), Ahmedabad, Gujarat - 380059.</span> },
];

export default function ContactPage() {
  return (
    <>
      <div className="bg-grid" style={{ position: 'fixed' }} />
      <div className="glow-blob glow-blob-primary" style={{ position: 'fixed' }} />
      <div className="glow-blob glow-blob-cyan" style={{ position: 'fixed' }} />

      {/* HERO */}
      <section className="section hero-section" style={{ paddingTop: '7.5rem', paddingBottom: '5rem', background: 'var(--bg-gradient-hero)' }}>
        <div className="container">
          <Reveal style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
            <h1 style={{ fontSize: 'clamp(2.5rem,5vw,3.8rem)', marginBottom: '1.5rem', fontWeight: 800 }}>
              Let&apos;s Build Something <span>Great</span>
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
              Submit your requirements and an engineering lead will review your project roadmap and respond within 24 business hours.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="section" style={{ padding: '2rem 0 3.5rem 0', background: 'var(--bg-gradient-1)' }}>
        <div className="container grid-2">
          <Reveal>
            <h2 style={{ marginBottom: '1.25rem', fontSize: '2.2rem', fontWeight: 800 }}>Get in <span>Touch</span></h2>
            <p style={{ marginBottom: '2.5rem', fontSize: '1.05rem' }}>
              Whether building an initial MVP, auditing a server setup, or expanding your local digital marketing, we are ready to assist.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              {contactDetails.map((d, i) => (
                <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: 44, height: 44, background: 'rgba(0,86,210,0.05)', border: '1px solid rgba(0,86,210,0.15)', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', flexShrink: 0 }}>{d.icon}</div>
                  <div>
                    <span style={{ fontSize: '12.5px', color: 'var(--text-dark)', display: 'block', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 2 }}>{d.label}</span>
                    {d.value}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal direction="right">
            <ContactForm />
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: 'var(--bg-gradient-2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <Reveal><div className="section-header" style={{ margin: '0 auto 4rem', textAlign: 'center' }}><h2 className="section-title">Frequently Asked <span>Questions</span></h2><p className="section-desc">Common questions business owners ask when initiating projects with our Ahmedabad IT agency.</p></div></Reveal>
          <FaqAccordion />
        </div>
      </section>
    </>
  );
}
