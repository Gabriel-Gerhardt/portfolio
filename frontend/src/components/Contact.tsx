function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-16 flex justify-center border-t border-border px-6 pt-16 pb-12 md:px-12 md:pt-[100px] md:pb-20"
    >
      <div className="flex w-full max-w-[1080px] flex-wrap items-end justify-between gap-10">
        <div>
          <div className="mb-5 font-mono text-[13px] tracking-[1.5px] text-accent uppercase">
            Get in touch
          </div>
          <a
            href="mailto:gabrielgerhardt27@gmail.com"
            className="mb-5 block font-serif text-[26px] font-semibold text-ink transition-colors hover:text-accent-hover md:text-[36px]"
          >
            gabrielgerhardt27@gmail.com
          </a>
          <div className="flex flex-wrap gap-6 font-mono text-[14px]">
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
        </div>
        <div className="font-mono text-[13px] text-contact-name">
          Gabriel Gerhardt de Marque
          <br />
          Porto Alegre, Brazil
        </div>
      </div>
    </section>
  );
}

export default Contact;
