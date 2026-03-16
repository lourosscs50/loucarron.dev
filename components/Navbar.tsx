export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0B0B0F]/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <div>
          <p className="text-lg font-semibold tracking-wide">Lou Carron</p>
          <p className="text-xs text-white/60">Software Developer</p>
        </div>

        <nav className="hidden gap-8 text-sm text-white/75 md:flex">
          <a href="#systems" className="transition hover:text-white">
            Systems
          </a>
          <a href="#projects" className="transition hover:text-white">
            Projects
          </a>
          <a href="#principles" className="transition hover:text-white">
            Principles
          </a>
          <a href="#stack" className="transition hover:text-white">
            Stack
          </a>
          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}