import Image from 'next/image'
import Link from 'next/link'

const footerLinks = {
  product: [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Hustle Tracks', href: '#tracks' },
    { label: 'Pricing', href: '#' },
    { label: 'Download', href: '#' },
  ],
  resources: [
    { label: 'The Playbook (Blog)', href: '#' },
    { label: 'Safety Guide', href: '#' },
    { label: 'Help Center', href: '#' },
    { label: 'Community', href: '#' },
  ],
  company: [
    { label: 'About Us', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Press', href: '#' },
    { label: 'Contact', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-navy pt-16 pb-8 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Image
              src="/Gigignition-Logo.jpg"
              alt="Gig Ignition"
              width={48}
              height={48}
              className="rounded-xl mb-4"
            />
            <p className="text-white/60 leading-relaxed max-w-xs">
              The AI-powered side hustle coach that takes you from broke and bored to earning your first $1,000. Safe. Smart. Simple.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-orbitron font-bold text-white text-sm mb-5 tracking-wide">
              PRODUCT
            </h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/60 hover:text-ignition-gold transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-orbitron font-bold text-white text-sm mb-5 tracking-wide">
              RESOURCES
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/60 hover:text-ignition-gold transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-orbitron font-bold text-white text-sm mb-5 tracking-wide">
              COMPANY
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/60 hover:text-ignition-gold transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white/40 text-sm">
            <span className="text-ignition-gold font-orbitron font-semibold">Gig Ignition</span> — Fuel Your Future.
          </div>
          <div className="text-white/40 text-sm">
            © {new Date().getFullYear()} Gig Ignition. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
