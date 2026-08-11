import WorkCard, { type WorkItem } from "./WorkCard";

const featuredWork: WorkItem[] = [
  {
    title: "ElasticPom",
    oneLiner: "Hybrid search engine for scientific papers.",
    bullets: [
      "Hybrid retrieval fuses BM25 and kNN rankings with Reciprocal Rank Fusion, merging on rank since the two score scales are incomparable; degrades to BM25-only if embedding generation fails.",
      "Event-driven ingestion pipeline (Python OAI-PMH harvester → Kafka → Spring Boot) indexed 120k+ papers, bulk-writing up to 1,000 papers per batch.",
      "Embedding generation runs on Java 21 virtual threads off the Kafka consumer thread, keeping indexing lag independent of embedding-API latency.",
    ],
    tags: [
      "Java 21",
      "Spring Boot",
      "Kafka",
      "Elasticsearch",
      "MongoDB",
      "SvelteKit",
      "Docker",
    ],
    videoLabel: "[ demo video: hybrid search query to results ]",
    githubUrl: "https://github.com/Gabriel-Gerhardt/ElasticPom",
  },
  {
    title: "RetrospectiveAI",
    oneLiner: "Distributed system for semantic analysis of code repositories.",
    bullets: [
      "Four-service platform (Go crawler, Python FastAPI inference, Java/Spring Boot API, React SPA) communicating over REST with per-user agent isolation.",
      "Retrieval layer built end to end: on-demand repo cloning, sentence-transformer embeddings, vector storage in PostgreSQL/pgvector.",
      "Agentic tool loop invokes codebase- and web-search tools mid-answer, with intermediate reasoning and tool results streamed incrementally to the browser over SSE.",
    ],
    tags: [
      "Go",
      "Python / FastAPI",
      "Java 21 / Spring Boot",
      "React",
      "PostgreSQL/pgvector",
      "Docker",
    ],
    videoLabel: "[ demo video: agent loop streaming an answer ]",
  },
];

const secondaryWork: WorkItem[] = [
  {
    title: "GitCrawler",
    oneLiner: "Clones and extracts data from GitHub repositories on demand.",
    bullets: [
      "Go REST API that clones GitHub repositories and extracts matching files for ingestion by RetrospectiveAI.",
      "Scans cloned repos by directory and file extension; results can be returned directly or exported to disk.",
      "Generates AI-written repository summaries: extracts relevant files from a repo and returns an LLM-written business/tech-stack overview.",
    ],
    tags: ["Go", "Git", "net/http", "Clean Architecture"],
    githubUrl: "https://github.com/Gabriel-Gerhardt/GitCrawler",
  },
  {
    title: "Webhook Manager",
    oneLiner: "Centralized event broker for webhook delivery between services.",
    bullets: [
      "Centralized event broker: producer services register the events they emit, client services subscribe a URL to specific events, and the manager dispatches payloads when a registered event fires.",
      "Three independent Spring Boot components (client, producer library, manager) talking over REST, so producers never need to know their consumers.",
      "Backed by OracleDB and PostgreSQL, containerized with Docker Compose.",
    ],
    tags: ["Java 21", "Spring Boot", "RestClient", "OracleDB", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/Gabriel-Gerhardt/Webhook-Manager",
  },
];

function Work() {
  return (
    <section
      id="work"
      className="scroll-mt-16 flex justify-center px-6 py-16 md:px-12 md:py-[100px]"
    >
      <div className="w-full max-w-[1080px]">
        <div className="mb-4 font-mono text-[13px] tracking-[1.5px] text-accent uppercase">
          Selected work
        </div>
        <h2 className="mb-14 max-w-[640px] font-serif text-[24px] font-semibold md:text-[32px]">
          Search and distributed systems, built end to end.
        </h2>

        <div className="mb-10 grid grid-cols-1 gap-10 md:grid-cols-2">
          {featuredWork.map((item) => (
            <WorkCard key={item.title} item={item} variant="featured" />
          ))}
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {secondaryWork.map((item) => (
            <WorkCard key={item.title} item={item} variant="secondary" />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;
