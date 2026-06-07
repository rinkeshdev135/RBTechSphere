import type { Metadata } from 'next';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import ServiceCard from '@/components/ServiceCard';

export const metadata: Metadata = {
  title: 'Our Services — RB TechSphere',
  description: 'Explore RB TechSphere\'s full range of IT services including web development, mobile apps, SEO, UI/UX design, and Odoo ERP solutions.',
  openGraph: { url: 'https://rbtechsphere.com/services' },
};

const services = [
  { icon: <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.53c-.26-.81-1-1.4-1.9-1.4h-1v-3c0-.55-.45-1-1-1h-6v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.4z"/></svg>, title: 'Website Development', description: 'Modern corporate and marketing websites with high page speed, fluid interactivity, and search engine optimization.', href: '/services/custom-website-development', delay: '' },
  { icon: <svg viewBox="0 0 24 24"><path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/></svg>, title: 'Web App Development', description: 'Secure dashboard platforms, portals, and cloud SaaS architectures engineered using modern frontend/backend frameworks.', href: '/services/web-application-development', delay: 'delay-1' },
  { icon: <svg viewBox="0 0 24 24"><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/></svg>, title: 'Mobile App Development', description: 'Native Android & iOS applications with smooth offline capabilities, custom APIs, and fast UI loading.', href: '/services/mobile-app-development', delay: 'delay-2' },
  { icon: <svg viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5A6.5 6.5 0 0 0 9.5 3 6.5 6.5 0 0 0 3 9.5 6.5 6.5 0 0 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zm.5-7.5l2.5 2.5-3.5 3.5-2-2-2.5 2.5-.7-.7 3.2-3.2 2 2 2.8-2.8z"/></svg>, title: 'SEO & Digital Marketing', description: 'Data-driven marketing and SEO roadmaps that scale traffic, keyword rankings, and leads.', href: '/services/seo-digital-marketing', delay: '' },
  { icon: <svg viewBox="0 0 24 24"><path d="M12 22C6.49 22 2 17.51 2 12S6.49 2 12 2s10 4.04 10 9c0 3.31-2.69 6-6 6h-1.77c-.28 0-.5.22-.5.5 0 .12.05.23.13.33.41.47.64 1.06.64 1.67 0 1.38-1.12 2.5-2.5 2.5zm0-18c-4.41 0-8 3.59-8 8s3.59 8 8 8c.28 0 .5-.22.5-.5 0-.16-.08-.28-.14-.35-.41-.46-.63-1.05-.63-1.65 0-1.38 1.12-2.5 2.5-2.5H16c2.21 0 4-1.79 4-4 0-3.86-3.59-7-8-7z"/></svg>, title: 'UI/UX Design Service', description: 'Sleek user flows, responsive layouts, wireframes, and design prototypes with custom micro-animations.', href: '/services/ui-ux-design', delay: 'delay-1' },
  { icon: <svg viewBox="0 0 24 24"><path d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/></svg>, title: 'Odoo ERP Solutions', description: 'Implementation and localization of Odoo modules customized for complete business automation.', href: '/services/odoo-erp-solutions', delay: 'delay-2' },
];

export default function ServicesPage() {
  return (
    <>
      <div className="bg-grid" style={{ position: 'fixed' }} />
      <div className="glow-blob glow-blob-primary" style={{ position: 'fixed' }} />

      {/* HERO */}
      <section className="section hero-section" style={{ paddingTop: '7.5rem', paddingBottom: '2rem', background: 'linear-gradient(180deg, #EBF3FF 0%, #F3F6FA 100%)' }}>
        <div className="container">
          <Reveal style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
            <h1 style={{ fontSize: 'clamp(2.5rem,5vw,3.8rem)', marginBottom: '1.5rem', fontWeight: 800 }}>
              Comprehensive IT <span>Solutions</span>
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
              From idea to launch — we deliver end-to-end technology solutions tailored for your business growth.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="section" style={{ padding: '3rem 0 6rem 0', background: 'linear-gradient(180deg, #F3F6FA 0%, #E9EDF5 100%)' }}>
        <div className="container">
          <div className="grid-3">
            {services.map((s, i) => <ServiceCard key={i} icon={s.icon} title={s.title} description={s.description} href={s.href} delay={s.delay} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ padding: '6rem 0', background: 'linear-gradient(180deg, #E9EDF5 0%, #DFE5F2 100%)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: 800 }}>
          <h2 style={{ fontSize: 'clamp(2rem,4vw,2.8rem)', fontWeight: 800, marginBottom: '1.2rem' }}>Not Sure Where to <span>Start</span>?</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '2.5rem', color: 'var(--text-muted)' }}>Book a free consultation and let our engineers assess what your project needs.</p>
          <Link href="/contact" className="btn btn-primary">Get Free Consultation</Link>
        </div>
      </section>
    </>
  );
}
