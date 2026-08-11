const links = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#stack", label: "Stack" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

function Nav() {
  return (
    <nav className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-nav-border bg-nav px-4 backdrop-blur-[6px] sm:px-6 md:px-12">
      <span className="font-mono text-[14px] font-semibold">
        Gabriel Gerhardt
      </span>
      <div className="flex gap-3 font-mono text-[11px] sm:gap-5 sm:text-[13px] md:gap-7">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-muted transition-colors hover:text-accent-hover"
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Nav;
