function Hero() {
  return (
    <section
      className="flex justify-center px-6 pt-20 pb-16 md:px-12 md:pt-[120px] md:pb-[100px]"
      style={{
        background:
          "oklch(97% 0.006 75) repeating-linear-gradient(180deg, transparent 0px, transparent 34px, oklch(90% 0.008 75) 35px)",
      }}
    >
      <div className="w-full max-w-[900px]">
        <div className="mb-7 font-mono text-[13px] tracking-[1.5px] text-accent uppercase">
          Gabriel Gerhardt de Marque · Porto Alegre, Brazil
        </div>
        <h1 className="mb-7 font-serif text-[38px] leading-[1.1] font-semibold md:text-[64px]">
          Distributed systems,
          <br />
          built for <span className="text-accent">search</span>.
        </h1>
        <p className="mb-10 max-w-[640px] font-serif text-[20px] leading-[1.6] text-muted">
          Java backend with real depth in distributed systems, event-driven
          architecture, and information retrieval.
        </p>
        <div className="mb-12 font-mono text-[14px] tracking-[0.5px] text-muted2">
          Java · Spring Boot · Kafka · Elasticsearch · Event-Driven Systems
        </div>
        <div className="mb-3 flex flex-wrap items-center gap-6 border-t border-border pt-6 font-mono text-[14px]">
          <a
            href="mailto:gabrielgerhardt27@gmail.com"
            className="text-muted transition-colors hover:text-accent-hover"
          >
            gabrielgerhardt27@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/gabriel-gerhardt27/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-accent-hover"
          >
            linkedin.com/in/gabriel-gerhardt27
          </a>
          <a
            href="https://github.com/gabriel-gerhardt"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-accent-hover"
          >
            github.com/gabriel-gerhardt
          </a>
        </div>
        <a
          href="#work"
          className="font-mono text-[13px] text-muted2 transition-colors hover:text-accent-hover"
        >
          Selected work ↓
        </a>
      </div>
    </section>
  );
}

export default Hero;
