import type { Metadata } from 'next';
import Link from 'next/link';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'About Us — RB TechSphere',
  description: "Learn about RB TechSphere's story, values, and leadership. Founded in 2026, we build scalable software and cloud solutions from Ahmedabad, India.",
  openGraph: { url: 'https://rbtechsphere.com/about' },
};

const values = [
  { num: '01', title: 'Absolute Transparency', desc: 'Fixed timelines, detailed code reviews, and visible staging URL deployment tracking.' },
  { num: '02', title: 'User Centric Engineering', desc: 'Every pixel, responsive transition, and API query is designed for user satisfaction.' },
  { num: '03', title: 'Agile & Responsive Delivery', desc: 'Rapid deployment sprints, daily communication channels, and secure GitHub source code transfers.' },
];

export default function AboutPage() {
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
              Engineered for <span>Scale</span>, Committed to Quality
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
              Founded in 2026 in Ahmedabad, RB TechSphere was created to bridge the gap between high-level technology consulting and affordable delivery cycles for growing global businesses.
            </p>
          </Reveal>
        </div>
      </section>

      {/* STORY & VALUES */}
      <section className="section" style={{ paddingTop: '2rem', background: 'var(--bg-gradient-1)' }}>
        <div className="container grid-2">
          <Reveal>
            <h2 style={{ marginBottom: '1.5rem', fontSize: '2.2rem', fontWeight: 800 }}>
              Ahmedabad&apos;s Premium Software <span>Engineers</span>
            </h2>
            <p style={{ marginBottom: '1.5rem', fontSize: '1.05rem' }}>
              We are a focused, high-performing team of certified cloud architects, web developers, security experts, and product engineers collaborating directly with you to bring your digital roadmap to life.
            </p>
            <p style={{ marginBottom: '2rem', fontSize: '1.05rem' }}>
              Whether building responsive business landing pages, complex SaaS portals, iOS/Android apps, or integrating custom Odoo ERP ecosystems, we maintain absolute transparency. We treat every client&apos;s roadmap with custom milestones and zero hidden fees.
            </p>
            <Link href="/contact" className="btn btn-primary">Start a Project</Link>
          </Reveal>

          <Reveal direction="right">
            <h3 style={{ marginBottom: '1.5rem', fontSize: '1.5rem', fontWeight: 700 }}>Our Core Values</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {values.map((v) => (
                <div key={v.num} className="tilt-card" style={{ padding: '1.5rem', borderRadius: 'var(--radius-md)' }}>
                  <div className="card-content" style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
                    <div style={{ color: 'var(--primary)', fontSize: 24, fontWeight: 800 }}>{v.num}</div>
                    <div>
                      <h4 style={{ marginBottom: '0.3rem', fontSize: '1.1rem' }}>{v.title}</h4>
                      <p style={{ fontSize: 14, lineHeight: 1.5 }}>{v.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ padding: '6rem 0', background: 'var(--bg-gradient-3)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: 800 }}>
          <h2 style={{ fontSize: 'clamp(2rem,4vw,2.8rem)', fontWeight: 800, marginBottom: '1.2rem' }}>
            Partner With Ahmedabad&apos;s <span>Top</span> IT Professionals
          </h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '2.5rem', color: 'var(--text-muted)' }}>
            Let us transform your IT infrastructure and engineer applications that scale automatically.
          </p>
          <Link href="/contact" className="btn btn-primary">Work with Us</Link>
        </div>
      </section>
    </>
  );
}
