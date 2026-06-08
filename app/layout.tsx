import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

export const metadata: Metadata = {
  title: { default: 'RB TechSphere — Powering Businesses with Smart IT Solutions', template: '%s | RB TechSphere' },
  description: 'RB TechSphere delivers custom software, web apps, mobile app development, SEO, UI/UX design, and Odoo ERP solutions. Ahmedabad\'s leading IT startup partner.',
  keywords: ['IT company', 'web development', 'mobile app', 'SEO', 'Odoo ERP', 'Ahmedabad', 'software development'],
  openGraph: {
    type: 'website', url: 'https://rbtechsphere.com/',
    title: 'RB TechSphere — Powering Businesses with Smart IT Solutions',
    description: 'RB TechSphere delivers custom software, web apps, mobile apps, SEO, UI/UX design, and Odoo ERP solutions.',
    images: [{ url: 'https://rbtechsphere.com/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RB TechSphere — Powering Businesses with Smart IT Solutions',
    description: 'RB TechSphere delivers custom software, web apps, mobile apps, SEO, UI/UX design, and Odoo ERP solutions.',
    images: ['https://rbtechsphere.com/logo.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable}`} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
