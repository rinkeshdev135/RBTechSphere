'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => { setMounted(true); }, []);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => { setMobileOpen(false); setServicesOpen(false); }, [pathname]);

  const subServices = [
    { href: '/services/custom-website-development',  label: 'Website Development',    icon: '🌐' },
    { href: '/services/web-application-development', label: 'Web App Development',     icon: '🖥️' },
    { href: '/services/mobile-app-development',       label: 'Mobile App Development',  icon: '📱' },
    { href: '/services/seo-digital-marketing',        label: 'SEO & Digital Marketing', icon: '📈' },
    { href: '/services/ui-ux-design',                 label: 'UI/UX Design Service',    icon: '🎨' },
    { href: '/services/odoo-erp-solutions',           label: 'Odoo ERP Solutions',       icon: '⚙️' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Dropdown CSS injected once */}
      <style>{`
        .nav-dropdown-parent { position: relative; }
        .nav-dropdown-parent > a { display: flex; align-items: center; gap: 4px; }
        .nav-dropdown {
          position: absolute; top: calc(100% + 16px); left: 50%;
          transform: translateX(-50%);
          min-width: 240px;
          background: var(--bg-glass);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          box-shadow: 0 20px 50px rgba(14,27,77,0.1);
          padding: 8px;
          opacity: 0;
          visibility: hidden;
          transform: translateX(-50%) translateY(-8px);
          transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s;
          z-index: 2000;
        }
        .nav-dropdown::before {
          content: '';
          position: absolute;
          top: -6px; left: 50%;
          transform: translateX(-50%);
          width: 12px; height: 12px;
          background: var(--bg-glass);
          border-top: 1px solid var(--border);
          border-left: 1px solid var(--border);
          transform: translateX(-50%) rotate(45deg);
          backdrop-filter: blur(20px);
        }
        .nav-dropdown-parent:hover .nav-dropdown {
          opacity: 1; visibility: visible;
          transform: translateX(-50%) translateY(0);
        }
        .nav-dropdown-item {
          display: flex; align-items: center; gap: 10px;
          padding: 10px 14px;
          border-radius: var(--radius-sm);
          font-size: 14px; font-weight: 600;
          color: var(--text-muted);
          transition: var(--transition-fast);
          white-space: nowrap;
        }
        .nav-dropdown-item:hover, .nav-dropdown-item.active {
          background: rgba(var(--primary-rgb), 0.06);
          color: var(--primary);
        }
        .nav-dropdown-icon { font-size: 16px; width: 22px; text-align: center; }
        /* Mobile accordion */
        .mobile-services-toggle {
          display: none; background: none; border: none;
          color: var(--text-muted); font-size: 14px;
          font-weight: 600; cursor: pointer;
          width: 100%; text-align: left; padding: 0;
        }
        .mobile-sub-menu {
          display: flex; flex-direction: column; gap: 4px;
          padding: 8px 0 4px 16px; border-left: 2px solid var(--border);
          margin-top: 8px;
        }
        .mobile-sub-menu a {
          font-size: 14px !important; color: var(--text-muted) !important;
          padding: 6px 0 !important;
        }
        .mobile-sub-menu a:hover { color: var(--primary) !important; }
        @media (max-width: 1024px) {
          .nav-dropdown { display: none !important; }
          .mobile-services-toggle { display: flex; align-items: center; justify-content: space-between; }
        }
      `}</style>

      <header className={scrolled ? 'scrolled' : ''}>
        <div className="container nav-container">
          <Link href="/" className="logo-wrapper">
            <Image src="/logo.png" alt="RB TechSphere Logo" width={56} height={56} className="logo-image" />
            <span className="logo-text">RB <span>TechSphere</span></span>
          </Link>

          <ul className={`nav-menu${mobileOpen ? ' mobile-active' : ''}`}>
            <li><Link href="/" className={isActive('/') ? 'active' : ''}>Home</Link></li>
            <li><Link href="/about" className={isActive('/about') ? 'active' : ''}>About</Link></li>

            {/* Services with dropdown */}
            <li className="nav-dropdown-parent">
              {/* Desktop link */}
              <Link href="/services" className={`${isActive('/services') ? 'active' : ''}`} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                Services
                <svg style={{ width: 14, height: 14, fill: 'currentColor', opacity: 0.6 }} viewBox="0 0 24 24">
                  <path d="M7 10l5 5 5-5z"/>
                </svg>
              </Link>

              {/* Desktop dropdown */}
              <div className="nav-dropdown">
                {subServices.map(s => (
                  <Link key={s.href} href={s.href} className={`nav-dropdown-item${pathname === s.href ? ' active' : ''}`}>
                    <span className="nav-dropdown-icon">{s.icon}</span>
                    <span>{s.label}</span>
                  </Link>
                ))}
              </div>
            </li>

            <li><Link href="/contact" className={isActive('/contact') ? 'active' : ''}>Contact</Link></li>

            {/* Mobile-only services accordion */}
            {mobileOpen && (
              <li style={{ paddingLeft: 0 }}>
                <button className="mobile-services-toggle" onClick={() => setServicesOpen(!servicesOpen)}>
                  <span style={{ color: 'var(--text-muted)', fontWeight: 600 }}>── All Services</span>
                  <span>{servicesOpen ? '▲' : '▼'}</span>
                </button>
                {servicesOpen && (
                  <div className="mobile-sub-menu">
                    {subServices.map(s => (
                      <Link key={s.href} href={s.href}>
                        {s.icon} {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            )}
          </ul>

          <div className="nav-right">
            {mounted && (
              <button
                id="theme-toggle"
                className="theme-toggle"
                aria-label="Toggle dark mode"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              >
                <svg className="sun-icon" viewBox="0 0 24 24">
                  <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.01c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/>
                </svg>
                <svg className="moon-icon" viewBox="0 0 24 24">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
              </button>
            )}
            <Link href="/contact" className="btn btn-primary btn-nav" style={{ padding: '10px 22px', fontSize: '14px' }}>
              Get a Quote
            </Link>
            <button className="mobile-toggle" aria-label="Toggle menu" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
