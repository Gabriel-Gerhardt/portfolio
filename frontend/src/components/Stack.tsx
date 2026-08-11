const categories = [
  { label: "Languages", items: "Java, Python, Go, TypeScript, SQL" },
  {
    label: "Backend",
    items: "Spring Boot, Spring WebFlux, FastAPI, gRPC, Avro, JWT, Node.js",
  },
  {
    label: "Data & messaging",
    items:
      "Kafka, Elasticsearch, Apache NiFi, Oracle, PostgreSQL/pgvector, MongoDB, R2DBC, Hibernate/JPA",
  },
  { label: "AI & retrieval", items: "RAG, vector search, embeddings, MCP" },
  {
    label: "Infrastructure",
    items: "Docker, Docker Compose, Datadog, Git, SonarQube, Linux",
  },
  { label: "Frontend", items: "React, SvelteKit, TailwindCSS" },
];

function Stack() {
  return (
    <section
      id="stack"
      className="scroll-mt-16 flex justify-center px-6 py-16 md:px-12 md:py-[100px]"
    >
      <div className="w-full max-w-[1080px]">
        <div className="mb-14 font-mono text-[13px] tracking-[1.5px] text-accent uppercase">
          Stack
        </div>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 md:gap-x-10 md:gap-y-12">
          {categories.map((category) => (
            <div key={category.label}>
              <div className="mb-3 font-mono text-[12.5px] tracking-[0.5px] text-accent uppercase">
                {category.label}
              </div>
              <div className="font-sans text-[15px] leading-[1.7] text-muted">
                {category.items}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stack;
