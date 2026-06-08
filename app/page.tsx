import type { Metadata } from 'next';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import ServiceCard from '@/components/ServiceCard';
import FaqAccordion from '@/components/FaqAccordion';
import ParticleSphereClient from '@/components/ParticleSphereClient';

export const metadata: Metadata = {
  title: 'RB TechSphere — Powering Businesses with Smart IT Solutions',
  description: "RB TechSphere delivers custom software, web apps, mobile app development, SEO, UI/UX design, and Odoo ERP solutions. Ahmedabad's leading IT startup partner.",
};

const services = [
  { icon: <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.53c-.26-.81-1-1.4-1.9-1.4h-1v-3c0-.55-.45-1-1-1h-6v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.4z"/></svg>, title: 'Website Development', description: 'Modern corporate and marketing websites with high page speed, fluid interactivity, and search engine optimization.', href: '/services/custom-website-development', delay: '' },
  { icon: <svg viewBox="0 0 24 24"><path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/></svg>, title: 'Web App Development', description: 'Secure dashboard platforms, portals, and cloud SaaS architectures engineered using modern frontend/backend frameworks.', href: '/services/web-application-development', delay: 'delay-1' },
  { icon: <svg viewBox="0 0 24 24"><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/></svg>, title: 'Mobile App Development', description: 'Native Android & iOS applications developed with smooth offline capabilities, custom APIs, and fast UI loading.', href: '/services/mobile-app-development', delay: 'delay-2' },
  { icon: <svg viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5A6.5 6.5 0 0 0 9.5 3 6.5 6.5 0 0 0 3 9.5 6.5 6.5 0 0 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zm.5-7.5l2.5 2.5-3.5 3.5-2-2-2.5 2.5-.7-.7 3.2-3.2 2 2 2.8-2.8z"/></svg>, title: 'SEO & Digital Marketing', description: 'Data-driven marketing and technical search engine optimization roadmaps that scale traffic, keyword rankings, and leads.', href: '/services/seo-digital-marketing', delay: '' },
  { icon: <svg viewBox="0 0 24 24"><path d="M12 22C6.49 22 2 17.51 2 12S6.49 2 12 2s10 4.04 10 9c0 3.31-2.69 6-6 6h-1.77c-.28 0-.5.22-.5.5 0 .12.05.23.13.33.41.47.64 1.06.64 1.67 0 1.38-1.12 2.5-2.5 2.5zm0-18c-4.41 0-8 3.59-8 8s3.59 8 8 8c.28 0 .5-.22.5-.5 0-.16-.08-.28-.14-.35-.41-.46-.63-1.05-.63-1.65 0-1.38 1.12-2.5 2.5-2.5H16c2.21 0 4-1.79 4-4 0-3.86-3.59-7-8-7z"/></svg>, title: 'UI/UX Design Service', description: 'Sleek user flows, premium responsive layouts, wireframes, and design prototypes styled with custom micro-animations.', href: '/services/ui-ux-design', delay: 'delay-1' },
  { icon: <svg viewBox="0 0 24 24"><path d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/></svg>, title: 'Odoo ERP Solutions', description: 'Implementation and localization of Odoo modules (CRM, Sales, Accounting, Inventory) customized for business automation.', href: '/services/odoo-erp-solutions', delay: 'delay-2' },
];

const valueProps = [
  { icon: <svg style={{width:42,height:42,fill:'currentColor'}} viewBox="0 0 24 24"><path d="M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z"/></svg>, title: 'Agile Sprints', desc: 'Working code delivered in weekly iterations.' },
  { icon: <svg style={{width:42,height:42,fill:'currentColor'}} viewBox="0 0 24 24"><path d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm-1.25 15l-4.5-4.5 1.41-1.41 3.09 3.09 7.09-7.09 1.41 1.41-8.5 8.5z"/></svg>, title: 'Transparent Pricing', desc: 'Fixed estimates and clear milestone billing.' },
  { icon: <svg style={{width:42,height:42,fill:'currentColor'}} viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>, title: 'Direct Access', desc: 'Direct collaboration with your developers.' },
  { icon: <svg style={{width:42,height:42,fill:'currentColor'}} viewBox="0 0 24 24"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>, title: 'Modern Tech Stacks', desc: 'Scalable and clean standard infrastructures.' },
];

const testimonials = [
  { stars: '★★★★★', quote: '"RB TechSphere migrated our cloud infrastructure to AWS. We realized a 40% reduction in hosting bills and gained continuous integration pipeline delivery."', initials: 'AK', name: 'Arvind Kapoor', role: 'CTO, FinEdge Technologies' },
  { stars: '★★★★★', quote: '"The custom ERP solution built by the team consolidated our inventory, sales orders, and accounting departments. Exceptional attention to detail throughout the roadmap."', initials: 'PS', name: 'Priya Sharma', role: 'Head of IT, MedCore Solutions' },
  { stars: '★★★★★', quote: '"The custom dashboard application they developed scales perfectly to handle 10x our concurrent users load. Their engineers communicate seamlessly during weekly sprint updates."', initials: 'RM', name: 'Rahul Mehta', role: 'Founder, RetailNexus' },
];

export default function HomePage() {
  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "LocalBusiness",
        "name": "RB TechSphere", "image": "https://rbtechsphere.com/logo.png",
        "@id": "https://rbtechsphere.com/#organization", "url": "https://rbtechsphere.com/",
        "telephone": "+917990782351", "priceRange": "$$",
        "address": { "@type": "PostalAddress", "streetAddress": "A-304, Times Square 2, Sindhu Bhavan Road, (SBR)", "addressLocality": "Ahmedabad", "addressRegion": "Gujarat", "postalCode": "380059", "addressCountry": "IN" },
        "geo": { "@type": "GeoCoordinates", "latitude": 23.0416, "longitude": 72.5075 },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], "opens": "09:00", "closes": "19:00" },
        "sameAs": ["https://www.facebook.com/share/1EAEBGsma8/?mibextid=wwXIfr","https://www.instagram.com/rbtechsphere?igsh=bWgxY3JjZmY2eWdv","https://www.linkedin.com/in/rbtechsphere"]
      })}} />

      {/* HERO */}
      <section className="section hero-section" style={{ paddingTop: '7.5rem', background: 'var(--bg-gradient-hero)' }}>
        <div className="bg-grid" />
        <div className="glow-blob glow-blob-primary" />
        <div className="glow-blob glow-blob-cyan" />
        <div className="container grid-2">
          <Reveal>
            <h1 style={{ fontSize: 'clamp(2.5rem,5vw,4rem)', marginBottom: '1.5rem', fontWeight: 800 }}>
              Powering Your Business With <span>Smart</span> IT Solutions
            </h1>
            <p style={{ fontSize: '1.15rem', marginBottom: '2.5rem', maxWidth: 540 }}>
              From custom website development to scalable cloud infrastructures, mobile apps, and ERP solutions — RB TechSphere designs next-gen technology to accelerate your growth.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/services" className="btn btn-primary">Explore Services</Link>
              <Link href="/contact" className="btn btn-secondary">Talk to an Expert</Link>
            </div>
          </Reveal>
          <Reveal direction="right" className="flex-center">
            <ParticleSphereClient />
          </Reveal>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section className="section" style={{ padding: '4rem 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', background: 'linear-gradient(90deg, rgba(var(--primary-rgb), 0.03) 0%, rgba(var(--secondary-rgb), 0.03) 100%)' }}>
        <div className="container grid-4" style={{ textAlign: 'center' }}>
          {valueProps.map((vp, i) => (
            <Reveal key={i} delay={i > 0 ? `delay-${i}` : ''}>
              <div style={{ fontSize: '2.2rem', color: 'var(--primary)', marginBottom: '0.75rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{vp.icon}</div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--text-main)', fontFamily: 'var(--font-heading)' }}>{vp.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.45 }}>{vp.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="section" style={{ background: 'var(--bg-gradient-1)' }}>
        <div className="container">
          <Reveal><div className="section-header"><h2 className="section-title">Comprehensive IT <span>Solutions</span></h2><p className="section-desc">We combine technological expertise and strategic thinking to build custom applications that solve real-world problems.</p></div></Reveal>
          <div className="grid-3">
            {services.map((s, i) => <ServiceCard key={i} icon={s.icon} title={s.title} description={s.description} href={s.href} delay={s.delay} />)}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section" style={{ background: 'var(--bg-gradient-2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container grid-2">
          <Reveal>
            <h2 className="section-title">Built for Scalability, Styled for <span>Impact</span></h2>
            <p className="section-desc" style={{ marginBottom: '2.5rem' }}>RB TechSphere fuses advanced software engineering with premium UI aesthetics to deliver B2B and consumer applications that achieve high retention and conversion.</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[['ISO 27001 Certified Security','Your data is protected with enterprise-grade encryption, zero-trust setups, and safe hosting compliance.'],['24/7 Monitoring & DevOps','Automated backup architectures and dedicated technical engineers checking cloud servers 24 hours a day.'],['Agile Development Milestones','Regular demo sprints, complete code repository ownership, and transparent staging link deployment cycles.']].map(([title, desc], i) => (
                <li key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: 24, height: 24, borderRadius: '50%', background: 'rgba(0,108,241,0.05)', border: '1px solid var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', flexShrink: 0, marginTop: 3, fontWeight: 'bold' }}>✓</div>
                  <div><h4 style={{ marginBottom: '0.2rem' }}>{title}</h4><p style={{ fontSize: 15 }}>{desc}</p></div>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal direction="right" className="flex-center">
            <div style={{ width: '100%', maxWidth: 480, background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '2.5rem', position: 'relative', overflow: 'hidden', boxShadow: '0 10px 30px rgba(15,23,42,0.02)' }}>
              <h3 style={{ marginBottom: '1.5rem', fontSize: '1.4rem' }}>Infrastructure Compliance</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                {[{label:'SSL & Data Encryption',value:'AES-256 Grade Active',badge:'Secure',color:'#10B981',border:'var(--primary)'},{label:'DevOps Deployments',value:'100% CI/CD Pipelines',badge:'Active',color:'#10B981',border:'var(--accent-cyan)'},{label:'Server Global Uptime',value:'99.98% Status Live',badge:'Optimal',color:'var(--primary)',border:'#F59E0B'}].map((item,i)=>(
                  <div key={i} style={{ background: 'var(--bg-dark)', padding: '1rem', borderRadius: 'var(--radius-md)', borderLeft: `3px solid ${item.border}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: `1px solid var(--border-light)`, borderLeftColor: item.border }}>
                    <div><span style={{ fontSize: 13, color: 'var(--text-dark)', display: 'block' }}>{item.label}</span><span style={{ fontSize: 15, fontWeight: 600 }}>{item.value}</span></div>
                    <span style={{ background: `rgba(${item.color === '#10B981' ? '16,185,129' : '0,86,210'},0.1)`, color: item.color, padding: '4px 10px', borderRadius: 'var(--radius-full)', fontSize: 12, fontWeight: 600 }}>{item.badge}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section" style={{ background: 'var(--bg-gradient-1)' }}>
        <div className="container">
          <Reveal><div className="section-header" style={{ margin: '0 auto 4rem', textAlign: 'center' }}><h2 className="section-title">Endorsed by Tech <span>Leaders</span></h2><p className="section-desc">See how we help startups and enterprises automate systems and scale operations.</p></div></Reveal>
          <div className="grid-3">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={i > 0 ? `delay-${i}` : ''}>
                <div className="tilt-card" style={{ padding: '2.5rem 2rem', height: '100%' }}>
                  <div className="card-content">
                    <div style={{ color: '#F59E0B', fontSize: 18, marginBottom: '1rem' }}>{t.stars}</div>
                    <p style={{ fontStyle: 'italic', marginBottom: '2rem', fontSize: 15, lineHeight: 1.7 }}>{t.quote}</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'linear-gradient(135deg, var(--primary) 0%, var(--accent-cyan) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: '#fff', fontSize: 14 }}>{t.initials}</div>
                      <div><h4 style={{ fontSize: 14, fontWeight: 700 }}>{t.name}</h4><p style={{ fontSize: 12, color: 'var(--text-dark)' }}>{t.role}</p></div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: 'var(--bg-gradient-2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <Reveal><div className="section-header" style={{ margin: '0 auto 4rem', textAlign: 'center' }}><h2 className="section-title">Frequently Asked <span>Questions</span></h2><p className="section-desc">Common questions business owners ask when initiating projects with our IT agency.</p></div></Reveal>
          <FaqAccordion />
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ padding: '6rem 0', background: 'var(--bg-gradient-1)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: 800, position: 'relative', zIndex: 2 }}>
          <h2 style={{ fontSize: 'clamp(2rem,4vw,2.8rem)', fontWeight: 800, marginBottom: '1.2rem' }}>Ready to Automate Your Business <span>Operations</span>?</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '2.5rem', color: 'var(--text-muted)' }}>Schedule a free 30-minute system architecture session with our engineering consultants to plan your digital path.</p>
          <Link href="/contact" className="btn btn-primary">Book Free Consultation</Link>
        </div>
      </section>
    </>
  );
}
