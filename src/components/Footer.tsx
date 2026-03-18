import { NAV_LINKS, CONTACT_EMAIL, FOOTER_CONTENT } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-primary text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div>
            <p className="font-serif text-xl font-bold mb-2">
              {FOOTER_CONTENT.brand}
            </p>
            <p className="text-white/60 text-sm">
              {FOOTER_CONTENT.tagline}
            </p>
          </div>

          {/* Nav Links */}
          <div>
            <p className="font-semibold mb-4 text-sm uppercase tracking-wider text-white/40">
              Navigation
            </p>
            <nav aria-label="Footer navigation" className="space-y-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-white/70 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="font-semibold mb-4 text-sm uppercase tracking-wider text-white/40">
              Contact
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-white/70 hover:text-white transition-colors text-sm"
            >
              {CONTACT_EMAIL}
            </a>
            <p className="text-white/60 text-sm mt-2">
              {FOOTER_CONTENT.location}
            </p>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-white/40 text-xs">
            {FOOTER_CONTENT.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
