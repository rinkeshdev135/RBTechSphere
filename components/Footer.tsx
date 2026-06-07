import Link from 'next/link';
import Image from 'next/image';

const SocialIcon = ({ href, label, children }: { href: string; label: string; children: React.ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
    <svg viewBox="0 0 24 24">{children}</svg>
  </a>
);

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="logo-wrapper">
              <Image src="/logo.png" alt="RB TechSphere Logo" width={56} height={56} className="logo-image" />
              <span className="logo-text">RB <span>TechSphere</span></span>
            </Link>
            <p>Delivering premium technology architectures and high-performing digital campaigns that drive long-term business value.</p>
            <div className="footer-socials">
              <SocialIcon href="https://www.facebook.com/share/1EAEBGsma8/?mibextid=wwXIfr" label="Facebook">
                <path d="M9 8H7v3h2v9h4v-9h3.6l.4-3H13V6c0-.5.5-1 1-1h2V1h-3c-3 0-5 2-5 5v2z"/>
              </SocialIcon>
              <SocialIcon href="https://www.linkedin.com/in/rbtechsphere" label="LinkedIn">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </SocialIcon>
              <SocialIcon href="https://www.instagram.com/rbtechsphere?igsh=bWgxY3JjZmY2eWdv" label="Instagram">
                <path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.25-1.7 4.77-4.92 4.92-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.15-3.25 1.7-4.77 4.92-4.92.12.06 1.64.07 4.85.07M12 0C8.74 0 8.33.01 7.05.07 2.69.27.27 2.69.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.2-4.36-2.62-6.78-6.98-6.98C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-10.4a1.44 1.44 0 1 0 0-2.88 1.44 1.44 0 0 0 0 2.88z"/>
              </SocialIcon>
            </div>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/services">Services Catalog</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><Link href="/services/custom-website-development">Website Development</Link></li>
              <li><Link href="/services/web-application-development">Web App Development</Link></li>
              <li><Link href="/services/mobile-app-development">Mobile App Development</Link></li>
              <li><Link href="/services/odoo-erp-solutions">Odoo ERP Setup</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact Details</h4>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>
                <a href="mailto:info@rbtechsphere.com">info@rbtechsphere.com</a>
              </li>
              <li className="footer-contact-item">
                <svg viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                <a href="tel:+917990782351">+91 7990782351</a>
              </li>
              <li className="footer-contact-item">
                <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                <span>A-304, Times Square 2 Sindhu Bhavan Road, (SBR), Ahmedabad, Gujarat - 380059.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 RB TechSphere. All rights reserved.</span>
          <div className="footer-bottom-links">
            <a href="#" style={{ color: '#64748B' }}>Privacy Policy</a>
            <a href="#" style={{ color: '#64748B' }}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
