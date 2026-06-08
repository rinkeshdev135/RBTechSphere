import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Reveal from '@/components/Reveal';

/* ── Shared card style ───────────────────────────────────────────────────── */
const cardStyle: React.CSSProperties = {
  width: '100%', maxWidth: 460,
  background: 'var(--bg-card)',
  border: '1px solid var(--border)',
  borderRadius: 'var(--radius-lg)',
  padding: '2rem',
  boxShadow: '0 10px 40px rgba(14,27,77,0.04)',
};

const rowStyle = (border?: boolean): React.CSSProperties => ({
  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  padding: '0.85rem 0',
  borderBottom: border ? '1px solid var(--border-light)' : 'none',
});

const pill = (color: string, bg: string): React.CSSProperties => ({
  background: bg, color, padding: '3px 12px',
  borderRadius: 99, fontSize: 12, fontWeight: 700,
});

/* ── Hero Visuals ─────────────────────────────────────────────────────────── */
const heroVisuals: Record<string, React.ReactNode> = {

  'custom-website-development': (
    <div style={cardStyle}>
      {/* Browser chrome */}
      <div style={{ background: 'var(--bg-dark)', borderRadius: 10, overflow: 'hidden', marginBottom: '1.5rem' }}>
        <div style={{ padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 6 }}>
          {['#FF5F57','#FEBC2E','#28C840'].map(c => <div key={c} style={{ width: 11, height: 11, borderRadius: '50%', background: c }} />)}
          <div style={{ flex: 1, marginLeft: 8, background: 'var(--border)', borderRadius: 6, height: 20, display: 'flex', alignItems: 'center', paddingLeft: 10 }}>
            <span style={{ fontSize: 11, color: 'var(--text-dark)' }}>rbtechsphere.com</span>
          </div>
        </div>
        <div style={{ height: 110, background: 'linear-gradient(135deg,rgba(0,86,210,0.06) 0%,rgba(0,210,255,0.04) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, padding: '0 1.5rem' }}>
          <div style={{ flex: 1, height: 12, background: 'rgba(0,86,210,0.12)', borderRadius: 6 }} />
          <div style={{ flex: 2, height: 12, background: 'rgba(0,86,210,0.08)', borderRadius: 6 }} />
        </div>
      </div>
      {/* Web Vitals */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
        <span style={{ fontWeight: 700, fontSize: 15 }}>Core Web Vitals</span>
        <span style={pill('#10B981','rgba(16,185,129,0.1)')}>Score 99+</span>
      </div>
      {[
        { label: 'First Contentful Paint', val: '0.4s', pct: '95%' },
        { label: 'Largest Contentful Paint', val: '0.8s', pct: '92%' },
        { label: 'Cumulative Layout Shift', val: '0.01', pct: '99%' },
      ].map((m, i) => (
        <div key={i} style={{ marginBottom: i < 2 ? '0.85rem' : 0 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginBottom: 5, color: 'var(--text-muted)' }}>
            <span>{m.label}</span>
            <span style={{ color: '#00D2FF', fontWeight: 700 }}>{m.val}</span>
          </div>
          <div style={{ height: 6, background: 'var(--bg-dark)', borderRadius: 3, overflow: 'hidden' }}>
            <div style={{ width: m.pct, height: '100%', background: 'linear-gradient(90deg,var(--primary),#00D2FF)', borderRadius: 3 }} />
          </div>
        </div>
      ))}
    </div>
  ),

  'web-application-development': (
    <div style={cardStyle}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <span style={{ fontWeight: 700, fontSize: 15 }}>Live Platform Dashboard</span>
        <span style={pill('#10B981','rgba(16,185,129,0.1)')}>● Live</span>
      </div>
      {/* Stats row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1.5rem' }}>
        {[
          { label: 'Active Users', val: '12,483', color: 'var(--primary)' },
          { label: 'API Response', val: '< 80ms', color: '#10B981' },
          { label: 'Daily Requests', val: '2.4M', color: 'var(--secondary)' },
          { label: 'Uptime SLA', val: '99.99%', color: '#F59E0B' },
        ].map((s, i) => (
          <div key={i} style={{ background: 'var(--bg-dark)', borderRadius: 'var(--radius-sm)', padding: '0.75rem 1rem' }}>
            <div style={{ fontSize: 12, color: 'var(--text-dark)', marginBottom: 4 }}>{s.label}</div>
            <div style={{ fontSize: 18, fontWeight: 800, color: s.color }}>{s.val}</div>
          </div>
        ))}
      </div>
      {/* Architecture layers */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {[
          { layer: 'Frontend (Next.js / React)', color: 'var(--primary)' },
          { layer: 'API Layer (Node.js / REST)', color: 'var(--accent-cyan)' },
          { layer: 'Database (PostgreSQL / Redis)', color: 'var(--secondary)' },
          { layer: 'Cloud Infra (AWS / Docker)', color: '#F59E0B' },
        ].map((l, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 12px', background: 'var(--bg-dark)', borderRadius: 8, borderLeft: `3px solid ${l.color}` }}>
            <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>{l.layer}</span>
            <span style={{ marginLeft: 'auto', fontSize: 11, color: '#10B981', fontWeight: 600 }}>✓</span>
          </div>
        ))}
      </div>
    </div>
  ),

  'mobile-app-development': (
    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
      {/* Phone mockup */}
      <div style={{ width: 200, background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 32, padding: '1.25rem', boxShadow: '0 20px 60px rgba(14,27,77,0.08)' }}>
        <div style={{ width: 50, height: 5, background: 'var(--border)', borderRadius: 3, margin: '0 auto 1.25rem' }} />
        <div style={{ background: 'linear-gradient(135deg,var(--primary),var(--accent-cyan))', borderRadius: 14, padding: '0.85rem', color: '#fff', marginBottom: '0.85rem' }}>
          <div style={{ fontSize: 11, opacity: 0.8, marginBottom: 4 }}>Today&apos;s Revenue</div>
          <div style={{ fontSize: 20, fontWeight: 800 }}>₹84,290</div>
        </div>
        {[{ k: 'Orders', v: '234' }, { k: 'Users', v: '1.2k' }, { k: 'Rating', v: '★ 4.9' }].map((r, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, padding: '6px 0', borderBottom: i < 2 ? '1px solid var(--border-light)' : 'none', color: 'var(--text-muted)' }}>
            <span>{r.k}</span><span style={{ fontWeight: 700, color: 'var(--text-main)' }}>{r.v}</span>
          </div>
        ))}
        <div style={{ marginTop: '1rem', background: 'linear-gradient(135deg,rgba(0,86,210,0.08),rgba(0,210,255,0.04))', borderRadius: 10, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontSize: 11, color: 'var(--primary)', fontWeight: 700 }}>Push Notification ●</span>
        </div>
      </div>
      {/* Side badges */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingTop: '1rem' }}>
        {[
          { label: 'Android', badge: 'Play Store Ready', color: '#10B981' },
          { label: 'iOS', badge: 'App Store Ready', color: 'var(--primary)' },
          { label: 'Offline', badge: 'Offline-First', color: 'var(--secondary)' },
          { label: 'Firebase', badge: 'Push & Analytics', color: '#F59E0B' },
        ].map((b, i) => (
          <div key={i} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 10, padding: '8px 14px', display: 'flex', alignItems: 'center', gap: 10, whiteSpace: 'nowrap' }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: b.color, flexShrink: 0 }} />
            <div>
              <div style={{ fontSize: 11, color: 'var(--text-dark)' }}>{b.label}</div>
              <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-main)' }}>{b.badge}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),

  'seo-digital-marketing': (
    <div style={cardStyle}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <span style={{ fontWeight: 700, fontSize: 15 }}>SEO Performance Report</span>
        <span style={pill('#10B981','rgba(16,185,129,0.1)')}>↑ Ranking</span>
      </div>
      {/* Traffic graph simulation */}
      <div style={{ background: 'var(--bg-dark)', borderRadius: 10, padding: '1rem', marginBottom: '1.25rem' }}>
        <div style={{ fontSize: 12, color: 'var(--text-dark)', marginBottom: '0.75rem' }}>Organic Traffic Growth</div>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, height: 60 }}>
          {[20, 30, 25, 42, 38, 55, 50, 68, 72, 85, 80, 100].map((h, i) => (
            <div key={i} style={{ flex: 1, height: `${h}%`, background: i >= 9 ? 'linear-gradient(180deg,var(--primary),var(--accent-cyan))' : 'rgba(0,86,210,0.15)', borderRadius: '4px 4px 0 0', transition: 'height 0.3s ease' }} />
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: 'var(--text-dark)', marginTop: 6 }}>
          <span>Jan</span><span>Jun</span><span>Dec</span>
        </div>
      </div>
      {/* Keyword rankings */}
      {[
        { kw: 'IT Company Ahmedabad', pos: '#1', color: '#10B981' },
        { kw: 'Web Development Gujarat', pos: '#2', color: '#10B981' },
        { kw: 'Odoo ERP India', pos: '#3', color: 'var(--primary)' },
        { kw: 'Mobile App Ahmedabad', pos: '#4', color: 'var(--accent-cyan)' },
      ].map((k, i) => (
        <div key={i} style={rowStyle(i < 3)}>
          <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>{k.kw}</span>
          <span style={{ fontWeight: 800, color: k.color, fontSize: 14 }}>{k.pos}</span>
        </div>
      ))}
      <div style={{ marginTop: '1rem', display: 'flex', gap: '0.75rem' }}>
        {[{ label: 'Domain Authority', val: 'DA 58' }, { label: 'Backlinks', val: '1.2k+' }].map((s, i) => (
          <div key={i} style={{ flex: 1, background: 'var(--bg-dark)', borderRadius: 8, padding: '0.6rem', textAlign: 'center' }}>
            <div style={{ fontSize: 11, color: 'var(--text-dark)' }}>{s.label}</div>
            <div style={{ fontWeight: 800, color: 'var(--primary)', fontSize: 15 }}>{s.val}</div>
          </div>
        ))}
      </div>
    </div>
  ),

  'ui-ux-design': (
    <div style={cardStyle}>
      <div style={{ fontWeight: 700, fontSize: 15, marginBottom: '1.25rem' }}>Design System Preview</div>
      {/* Color palette */}
      <div style={{ marginBottom: '1.25rem' }}>
        <div style={{ fontSize: 12, color: 'var(--text-dark)', marginBottom: 8 }}>Brand Palette</div>
        <div style={{ display: 'flex', gap: 8 }}>
          {[
            { c: '#0056D2', name: 'Primary' },
            { c: '#FF5421', name: 'Secondary' },
            { c: '#00D2FF', name: 'Accent' },
            { c: '#0E1B4D', name: 'Navy' },
          ].map((p, i) => (
            <div key={i} style={{ flex: 1, textAlign: 'center' }}>
              <div style={{ height: 40, background: p.c, borderRadius: 10, marginBottom: 4 }} />
              <span style={{ fontSize: 11, color: 'var(--text-dark)' }}>{p.name}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Typography */}
      <div style={{ background: 'var(--bg-dark)', borderRadius: 10, padding: '1rem', marginBottom: '1.25rem' }}>
        <div style={{ fontSize: 11, color: 'var(--text-dark)', marginBottom: 8 }}>Typography Scale</div>
        {[{ size: '2.5rem', weight: 800, label: 'Heading H1' }, { size: '1.25rem', weight: 600, label: 'Heading H3' }, { size: '0.95rem', weight: 400, label: 'Body Text' }].map((t, i) => (
          <div key={i} style={{ fontSize: t.size, fontWeight: t.weight, color: 'var(--text-main)', lineHeight: 1.2, marginBottom: i < 2 ? 4 : 0, fontFamily: 'var(--font-heading)' }}>{t.label}</div>
        ))}
      </div>
      {/* Deliverables */}
      {['Wireframes & User Flows', 'High-Fidelity Figma Prototype', 'Component Library', 'Dev Handoff Specs'].map((s, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '7px 0', borderBottom: i < 3 ? '1px solid var(--border-light)' : 'none' }}>
          <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'rgba(0,86,210,0.08)', border: '1px solid var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, color: 'var(--primary)', fontWeight: 700, flexShrink: 0 }}>✓</div>
          <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>{s}</span>
        </div>
      ))}
    </div>
  ),

  'odoo-erp-solutions': (
    <div style={cardStyle}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <span style={{ fontWeight: 700, fontSize: 15 }}>Odoo ERP — Module Overview</span>
        <span style={pill('#10B981','rgba(16,185,129,0.1)')}>Live</span>
      </div>
      {/* Module grid */}
      <div className="odoo-grid">
        {[
          { name: 'CRM', icon: '🤝', color: 'rgba(0,86,210,0.08)' },
          { name: 'Sales', icon: '📊', color: 'rgba(16,185,129,0.08)' },
          { name: 'Accounting', icon: '💰', color: 'rgba(255,84,33,0.08)' },
          { name: 'Inventory', icon: '📦', color: 'rgba(245,158,11,0.08)' },
          { name: 'HR & Payroll', icon: '👥', color: 'rgba(0,210,255,0.08)' },
          { name: 'Manufacturing', icon: '⚙️', color: 'rgba(139,92,246,0.08)' },
        ].map((m, i) => (
          <div key={i} style={{ background: m.color, border: '1px solid var(--border)', borderRadius: 10, padding: '0.75rem', display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 20 }}>{m.icon}</span>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-main)' }}>{m.name}</div>
              <div style={{ fontSize: 11, color: '#10B981', fontWeight: 600 }}>● Active</div>
            </div>
          </div>
        ))}
      </div>
      {/* Stats */}
      <div className="odoo-stats">
        {[{ label: 'Modules', val: '6+' }, { label: 'Users', val: 'Unlimited' }, { label: 'Version', val: 'v17' }].map((s, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 16, fontWeight: 800, color: 'var(--primary)' }}>{s.val}</div>
            <div style={{ fontSize: 11, color: 'var(--text-dark)' }}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  ),
};

/* ── Service Data ─────────────────────────────────────────────────────────── */
const servicesData: Record<string, {
  title: string; subtitle: string; description: string; metaDesc: string;
  features: { title: string; desc: string }[];
  toolkit: string[]; ctaTitle: string; ctaDesc: string;
}> = {
  'custom-website-development': {
    title: 'Custom & Business', subtitle: 'Website Development',
    description: 'We build fully custom, high-speed, SEO-optimized business websites that capture customer interest and establish strong brand authority online.',
    metaDesc: 'Get high-performance custom business websites. We optimize load speed, responsive UI layouts, and Core Web Vitals from Ahmedabad, India.',
    features: [
      { title: 'Fluid Responsiveness', desc: 'We test every component across mobile, tablet, laptop, and 4K viewports to ensure pixel-perfect visual layouts.' },
      { title: 'SEO-Ready Foundation', desc: 'Sites built with semantic HTML5, custom meta tags, schema markup, and XML sitemaps for maximum organic crawling.' },
      { title: 'Premium Interactions', desc: 'Micro-animations, scroll-reveal effects, and cursor-follow glows that feel like Framer — without hurting performance.' },
    ],
    toolkit: ['HTML5 / CSS3 / ES6+', 'React & Next.js 14', 'Tailwind CSS', 'Framer Motion', 'Headless CMS / WordPress'],
    ctaTitle: 'Ready for a High-Performance Website?', ctaDesc: "Launch your business website with Ahmedabad's best dev team — SEO-optimized, blazing fast, and stunning.",
  },
  'web-application-development': {
    title: 'SaaS & Enterprise', subtitle: 'Web App Development',
    description: 'Secure, scalable web application platforms engineered with modern frontend and backend frameworks for businesses that need far more than a static website.',
    metaDesc: 'Build powerful SaaS platforms and enterprise web apps with RB TechSphere. Scalable, secure, and fast from Ahmedabad, India.',
    features: [
      { title: 'Secure Authentication', desc: 'JWT tokens, OAuth2, and role-based access controls implemented across all platform modules from day one.' },
      { title: 'Real-Time Capabilities', desc: 'WebSocket and Server-Sent Events for live dashboards, activity feeds, collaborative tools, and push notifications.' },
      { title: 'Cloud-Native Architecture', desc: 'Microservices, containerized deployments on AWS/GCP, auto-scaling infrastructure, and zero-downtime CI/CD pipelines.' },
    ],
    toolkit: ['Next.js / React', 'Node.js / Express', 'PostgreSQL / MongoDB', 'Redis / WebSockets', 'Docker / AWS / GCP'],
    ctaTitle: 'Ready to Build Your Web Application?', ctaDesc: 'Talk to our engineers and get a free technical architecture review for your SaaS idea.',
  },
  'mobile-app-development': {
    title: 'Native Android & iOS', subtitle: 'Mobile App Development',
    description: 'Feature-rich mobile applications for both Android and iOS — smooth offline capabilities, custom APIs, real-time data, and beautiful native UI.',
    metaDesc: 'Custom Android & iOS mobile app development from Ahmedabad. Native apps with beautiful UI and offline capabilities.',
    features: [
      { title: 'Cross-Platform Excellence', desc: 'React Native and Flutter apps that feel truly native on both iOS and Android, sharing one codebase for faster delivery.' },
      { title: 'Offline-First Design', desc: 'Local storage, background sync, and conflict resolution so your app works perfectly even without internet.' },
      { title: 'Push Notifications & Analytics', desc: 'Firebase integration for real-time push alerts, crash reporting, and granular user behaviour analytics.' },
    ],
    toolkit: ['React Native / Flutter', 'Firebase / Supabase', 'REST API / GraphQL', 'Redux / Zustand', 'App Store & Play Store'],
    ctaTitle: 'Ready to Launch Your Mobile App?', ctaDesc: 'Get a free mobile app feasibility study and cost estimation from our mobile engineers.',
  },
  'seo-digital-marketing': {
    title: 'Search Engine & Growth', subtitle: 'SEO & Digital Marketing',
    description: 'Data-driven SEO strategies and digital marketing campaigns that grow your organic traffic, drive keyword rankings to page 1, and convert visitors into leads.',
    metaDesc: 'Expert SEO and digital marketing services from Ahmedabad. Increase organic traffic, keyword rankings, and lead generation.',
    features: [
      { title: 'Technical SEO Audit', desc: 'Full crawl analysis, Core Web Vitals optimization, XML sitemap generation, and structured data implementation.' },
      { title: 'Content & Keyword Strategy', desc: 'Competitor gap analysis, keyword clustering, and content calendars engineered to rank and convert at every funnel stage.' },
      { title: 'Local SEO & Google Business', desc: 'Citation building, Google Business Profile optimization, and local pack ranking to dominate your city search results.' },
    ],
    toolkit: ['Google Search Console', 'Ahrefs / SEMrush', 'Google Analytics 4', 'Schema.org Markup', 'Google Ads / Meta Ads'],
    ctaTitle: 'Ready to Rank on Page 1?', ctaDesc: "Get a free SEO audit and a custom growth strategy from Ahmedabad's most data-driven marketing team.",
  },
  'ui-ux-design': {
    title: 'Premium Interface', subtitle: 'UI/UX Design Service',
    description: 'Sleek user flows, premium responsive layouts, wireframes, and interactive prototypes styled with micro-animations that convert visitors into loyal customers.',
    metaDesc: 'Professional UI/UX design services from Ahmedabad. Wireframes, prototypes, and premium responsive interface design.',
    features: [
      { title: 'User Research & Flows', desc: 'User persona creation, journey mapping, and usability heuristic evaluations to inform every pixel of the design.' },
      { title: 'High-Fidelity Prototypes', desc: 'Figma prototypes with interactive transitions, micro-animations, and complete developer handoff specifications.' },
      { title: 'Design System Creation', desc: 'Reusable component libraries, token-based design systems, and brand style guides for consistent product experience at scale.' },
    ],
    toolkit: ['Figma / Adobe XD', 'Principle / Framer', 'Lottie Animations', 'Tailwind CSS Design', 'Storybook Component Docs'],
    ctaTitle: 'Ready for a World-Class Design?', ctaDesc: 'Get a free UX audit and design consultation — we will show you exactly how to improve your product.',
  },
  'odoo-erp-solutions': {
    title: 'Business Automation with', subtitle: 'Odoo ERP Solutions',
    description: 'End-to-end implementation, customization, and localization of Odoo ERP — CRM, Sales, Accounting, Inventory, HR — tailored to your exact business workflows.',
    metaDesc: 'Expert Odoo ERP implementation and customization from Ahmedabad. CRM, Accounting, Inventory, and HR modules for your business.',
    features: [
      { title: 'Full Module Implementation', desc: 'Complete configuration of CRM, Sales, Accounting, Inventory, Manufacturing, HR, and custom Odoo modules end-to-end.' },
      { title: 'Data Migration', desc: 'Seamless migration from legacy systems, spreadsheets, or other ERPs with full data validation and rollback safety plans.' },
      { title: 'API & Third-Party Integration', desc: 'Connect Odoo with WooCommerce, Shopify, payment gateways, logistics APIs, and your custom tools via XML-RPC / REST.' },
    ],
    toolkit: ['Odoo 16 / 17 Community & Enterprise', 'Python / OWL Framework', 'PostgreSQL', 'XML-RPC / REST API', 'Docker Deployment'],
    ctaTitle: 'Ready to Automate Your Business?', ctaDesc: 'Get a free Odoo needs assessment and module recommendation from our certified Odoo consultants.',
  },
};

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData[slug];
  if (!service) return {};
  return {
    title: `${service.title} ${service.subtitle} — RB TechSphere`,
    description: service.metaDesc,
    openGraph: { url: `https://rbtechsphere.com/services/${slug}` },
  };
}

export function generateStaticParams() {
  return Object.keys(servicesData).map(slug => ({ slug }));
}

export default async function ServiceDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const service = servicesData[slug];
  if (!service) notFound();

  return (
    <>
      <div className="bg-grid" style={{ position: 'fixed' }} />
      <div className="glow-blob glow-blob-primary" style={{ position: 'fixed' }} />

      {/* HERO */}
      <section className="section hero-section" style={{ paddingTop: '7.5rem', paddingBottom: '4rem', background: 'var(--bg-gradient-hero)' }}>
        <div className="container grid-2">
          <Reveal>
            <h1 style={{ fontSize: 'clamp(2.3rem,5vw,3.5rem)', marginBottom: '1.5rem', fontWeight: 800 }}>
              {service.title} <span>{service.subtitle}</span>
            </h1>
            <p style={{ fontSize: '1.15rem', marginBottom: '2rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>{service.description}</p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn btn-primary">Request a Quote</Link>
              <Link href="/services" className="btn btn-secondary">← All Services</Link>
            </div>
          </Reveal>
          <Reveal direction="right" className="flex-center">
            {heroVisuals[slug]}
          </Reveal>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section" style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', background: 'var(--bg-gradient-1)' }}>
        <div className="container">
          <Reveal>
            <div className="section-header" style={{ margin: '0 auto 4rem', textAlign: 'center' }}>
              <h2 className="section-title">What We <span>Deliver</span></h2>
              <p className="section-desc">Our approach combines clean engineering, modern design principles, and business-focused thinking.</p>
            </div>
          </Reveal>
          <div className="grid-3">
            {service.features.map((f, i) => (
              <Reveal key={i} delay={i > 0 ? `delay-${i}` : ''}>
                <div className="tilt-card" style={{ height: '100%' }}>
                  <div className="card-content">
                    <div className="card-icon">
                      <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    </div>
                    <h3 className="card-title">{f.title}</h3>
                    <p className="card-desc" style={{ marginBottom: 0 }}>{f.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TOOLKIT */}
      <section className="section" style={{ background: 'var(--bg-gradient-1-rev)' }}>
        <div className="container" style={{ maxWidth: 800, textAlign: 'center' }}>
          <Reveal style={{ marginBottom: '3rem' }}>
            <h2 className="section-title" style={{ fontSize: '2.2rem' }}>Our <span>Toolkit</span></h2>
            <p className="section-desc">The modern frameworks and platforms we use to build and deliver your project.</p>
          </Reveal>
          <Reveal style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            {service.toolkit.map((t, i) => (
              <span key={i} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', padding: '10px 22px', borderRadius: 'var(--radius-sm)', fontWeight: 600, fontSize: 14 }}>{t}</span>
            ))}
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ padding: '5rem 0', background: 'var(--bg-gradient-1)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: 800 }}>
          <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.5rem)', fontWeight: 800, marginBottom: '1rem' }}>
            {service.ctaTitle}
          </h2>
          <p style={{ marginBottom: '2.5rem', color: 'var(--text-muted)', fontSize: '1.05rem' }}>{service.ctaDesc}</p>
          <Link href="/contact" className="btn btn-primary">Get Free Consultation</Link>
        </div>
      </section>
    </>
  );
}
