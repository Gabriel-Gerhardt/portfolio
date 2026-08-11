const rows: { item: string; tag: string | null }[] = [
  { item: "BSc Software Engineering — PUCRS", tag: "6th semester, in progress" },
  { item: "English C1 certification — IELS Malta", tag: "2025" },
  {
    item: "Communication & People Management — Dale Carnegie",
    tag: "2023",
  },
  {
    item: "Courses: CS50 (Harvard), The Missing Semester (MIT), Machine Learning (BairesDev), Intermediate PostgreSQL (Coursera)",
    tag: null,
  },
];

function Education() {
  return (
    <section
      id="education"
      className="scroll-mt-16 flex justify-center px-6 pb-16 md:px-12 md:pb-[100px]"
    >
      <div className="w-full max-w-[1080px]">
        <div className="mb-8 font-mono text-[13px] tracking-[1.5px] text-accent uppercase">
          Education &amp; certifications
        </div>
        <div className="flex flex-col">
          {rows.map((row, index) => (
            <div
              key={row.item}
              className={`flex flex-wrap justify-between gap-6 border-t border-border py-[18px] font-sans text-[15.5px] text-ink2 ${
                index === rows.length - 1 ? "border-b" : ""
              }`}
            >
              <span>{row.item}</span>
              {row.tag && (
                <span className="font-mono text-[13px] whitespace-nowrap text-muted2">
                  {row.tag}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
