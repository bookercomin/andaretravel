import { navLinks } from "@/lib/data";
import { Instagram } from "lucide-react";

function PinterestIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props} aria-hidden="true">
      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.43 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.024 0 1.518.769 1.518 1.69 0 1.03-.655 2.567-.994 3.992-.283 1.194.598 2.169 1.775 2.169 2.131 0 3.771-2.246 3.771-5.487 0-2.868-2.061-4.874-5.005-4.874-3.409 0-5.409 2.557-5.409 5.202 0 1.031.397 2.137.893 2.738a.36.36 0 0 1 .083.345c-.09.375-.293 1.194-.332 1.361-.053.219-.174.266-.402.16-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.379l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer id="contact" className="border-t border-ink/10 bg-ink text-cream">
      <div className="container grid gap-12 py-16 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl">
            Andare <span className="text-terracotta-light">Travel</span>
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/70">
            We build custom European adventures — helping you experience Europe the way locals do,
            with a specialty in Italy.
          </p>
        </div>

        <div>
          <p className="eyebrow text-cream/60">Explore</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href="#top" className="text-cream/80 hover:text-terracotta-light">
                Home
              </a>
            </li>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-cream/80 hover:text-terracotta-light">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-cream/60">Connect</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href="mailto:hello@andaretravel.com" className="text-cream/80 hover:text-terracotta-light">
                hello@andaretravel.com
              </a>
            </li>
          </ul>
          <div className="mt-5 flex gap-4">
            <a
              href="https://www.instagram.com/"
              aria-label="Andare Travel on Instagram"
              className="text-cream/70 hover:text-terracotta-light"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.pinterest.com/"
              aria-label="Andare Travel on Pinterest"
              className="text-cream/70 hover:text-terracotta-light"
            >
              <PinterestIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container flex flex-col items-center justify-between gap-3 py-6 text-xs text-cream/50 md:flex-row">
          <p>&copy; {new Date().getFullYear()} Andare Travel. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-cream/80">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-cream/80">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
