function ProjectCard({ project, index, clicked, onClick }) {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm w-80">
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      <p className="text-gray-600 text-base leading-relaxed mb-2">
        {project.description}
      </p>
      <a
        onClick={() => onClick(index)}
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className={`hover:underline ${clicked ? "text-purple-800" : "text-blue-600"}`}
      >
        GitHub Repository
      </a>
    </div>
  );
}
