function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-16 flex justify-center bg-dark-bg px-6 py-16 text-dark-text md:px-12 md:py-[100px]"
    >
      <div className="w-full max-w-[1080px]">
        <div className="mb-14 font-mono text-[13px] tracking-[1.5px] text-dark-accent uppercase">
          Experience
        </div>

        <div className="mb-16 grid grid-cols-1 gap-6 border-t border-dark-border pt-10 md:grid-cols-[220px_1fr] md:gap-10">
          <div>
            <div className="mb-1.5 font-serif text-[22px] font-semibold">
              Grupo Panvel
            </div>
            <div className="mb-2.5 font-sans text-[14px] text-dark-muted2">
              Software Developer
            </div>
            <div className="font-mono text-[12.5px] text-dark-muted3">
              Oct 2025 – present
            </div>
          </div>
          <div>
            <p className="mb-5 font-sans text-[15.5px] leading-[1.65] text-dark-muted">
              Backend development on a microservices platform (Spring Boot,
              Python, Apache NiFi, Kafka, Oracle, MongoDB), with Datadog for
              observability.
            </p>
            <ul className="flex flex-col gap-3.5 pl-[18px] font-sans text-[15px] leading-[1.7] text-dark-muted list-disc">
              <li>
                Automated image ingestion through a NiFi-based placeholder
                integration, eliminating manual image processing and freeing{" "}
                <strong className="text-dark-text">
                  3 data-entry operators and 1 developer
                </strong>{" "}
                for higher-value work.
              </li>
              <li>
                Built and maintained a NiFi ETL notification pipeline for
                iFood product-pack workflows, delivering package-removal
                alerts within <strong className="text-dark-text">~1 minute</strong>{" "}
                of the source event and cutting roughly{" "}
                <strong className="text-dark-text">
                  30 daily manual interventions
                </strong>
                .
              </li>
              <li>
                Developed an asynchronous Python library for Datadog
                integration, instrumenting{" "}
                <strong className="text-dark-text">
                  50+ production metrics
                </strong>{" "}
                without blocking request paths and surfacing failures that
                previously reached the team only through user complaints.
              </li>
              <li>
                Standardized gRPC contracts and Avro serialization across{" "}
                <strong className="text-dark-text">3 backend services</strong>{" "}
                through a shared Spring library, eliminating a recurring
                class of schema-compatibility incidents that previously
                required cross-team hotfixes.
              </li>
              <li>
                Redesigned the product technical-specification model,
                extracting metadata duplicated across{" "}
                <strong className="text-dark-text">~100k value rows</strong>{" "}
                into a referenced definition table, exposed through
                non-blocking Spring WebFlux/R2DBC endpoints over Oracle.
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 border-t border-dark-border pt-10 md:grid-cols-[220px_1fr] md:gap-10">
          <div>
            <div className="mb-1.5 font-serif text-[22px] font-semibold">
              RetrospectiveAI
            </div>
            <div className="mb-2.5 font-sans text-[14px] text-dark-muted2">
              Co-founder &amp; Backend Engineer
            </div>
            <div className="font-mono text-[12.5px] text-dark-muted3">
              Feb 2026 – present
            </div>
          </div>
          <div>
            <p className="font-sans text-[15.5px] leading-[1.65] text-dark-muted">
              Distributed system for semantic analysis of code repositories.
              Go, Python, Java 21, React, PostgreSQL/pgvector. Details under{" "}
              <a
                href="#work"
                className="text-dark-accent transition-colors hover:text-dark-accent-hover"
              >
                Selected work
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
