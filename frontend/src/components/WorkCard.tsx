export interface WorkItem {
  title: string;
  oneLiner: string;
  bullets: string[];
  tags: string[];
  videoLabel?: string;
  githubUrl?: string;
}

function WorkCard({
  item,
  variant,
}: {
  item: WorkItem;
  variant: "featured" | "secondary";
}) {
  const featured = variant === "featured";

  return (
    <div
      className={
        featured
          ? "border border-border p-6 md:p-10"
          : "border border-border p-6 md:p-8"
      }
    >
      <div
        className={
          featured
            ? "mb-2.5 font-serif text-[24px] font-semibold md:text-[28px]"
            : "mb-2 font-serif text-[19px] font-semibold md:text-[21px]"
        }
      >
        {item.title}
      </div>
      <div
        className={
          featured
            ? "mb-5 font-sans text-[16px] font-semibold"
            : "mb-4 font-sans text-[15px] font-semibold"
        }
      >
        {item.oneLiner}
      </div>
      <ul
        className={
          featured
            ? "mb-6 flex flex-col gap-2.5 pl-[18px] font-sans text-[15px] leading-[1.65] text-muted3 list-disc"
            : "flex flex-col gap-2 pl-[18px] font-sans text-[14.5px] leading-[1.6] text-muted3 list-disc"
        }
      >
        {item.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2 font-mono text-[12px] text-muted2">
        {item.tags.map((tag) => (
          <span key={tag} className="border border-border px-2.5 py-1">
            {tag}
          </span>
        ))}
      </div>
      {item.videoLabel && (
        <div
          className="mt-5 flex aspect-video items-center justify-center border border-border px-4"
          style={{
            background:
              "repeating-linear-gradient(135deg, oklch(93% 0.006 75) 0px, oklch(93% 0.006 75) 10px, oklch(89% 0.008 75) 10px, oklch(89% 0.008 75) 20px)",
          }}
        >
          <span className="text-center font-mono text-[12px] text-muted2">
            {item.videoLabel}
          </span>
        </div>
      )}
      {item.githubUrl && (
        <a
          href={item.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block font-mono text-[13px] text-muted2 transition-colors hover:text-accent-hover"
        >
          View on GitHub ↗
        </a>
      )}
    </div>
  );
}

export default WorkCard;
