import { SOCIAL_LINKS, NAV_LINKS } from "@/constants/portfolio";

const footerLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "Resume", href: "/Eddy_Yego_Resume.pdf" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 mt-16">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-10 md:grid-cols-3">
        <div>
          <div className="font-display font-bold text-xl tracking-widest">
            EDDY<span className="text-brand">.</span>YEGO
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed">
            Full Stack Developer crafting premium web experiences with clean architecture and beautiful design.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-4">Quick Links</h4>
          <ul className="grid grid-cols-2 gap-y-2">
            {footerLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="text-sm text-foreground/80 hover:text-brand transition-colors">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-4">Connect</h4>
          <div className="flex flex-wrap gap-2">
            {SOCIAL_LINKS.map(({ label, href, icon: Icon, external }) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="h-10 w-10 grid place-items-center rounded-full glass text-muted-foreground hover:text-brand hover:border-brand/40 transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground">Available worldwide — based in Kenya.</p>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© 2026 Eddy Yego. All rights reserved.</p>
          <p>Designed & Developed with <span className="text-brand">❤</span> by Eddy Yego.</p>
        </div>
      </div>
      {/* Ensure NAV_LINKS import isn't dropped by tree-shaker in dev */}
      <span hidden>{NAV_LINKS.length}</span>
    </footer>
  );
}
