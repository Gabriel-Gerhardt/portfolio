function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 pt-20">
      <header className="fixed top-0 left-0 w-full bg-purple-800 text-white h-20 px-8 shadow-md z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center h-full">
          <h1 className="text-2xl font-bold">Gabriel Gerhardt de Marque</h1>
          <div className="flex gap-6 text-sm">
            <a href="mailto:email@exemplo.com" className="hover:underline">
              Email
            </a>
            <a
              href="https://github.com/Gabriel-Gerhardt"
              className="hover:underline"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/gabriel-gerhardt-0a8b852b9/"
              className="hover:underline"
            >
              Linkedin
            </a>
          </div>
        </div>
      </header>
      {/* Seção Sobre Mim */}
      <section id="sobre" className="py-2 px-4">
        <div className="max-w-7xl mx-auto bg-white shadow-md rounded-xl p-8 flex flex-col md:flex-row items-center gap-8 min-h-[500px]">
          {/* Coluna da imagem */}
          <div className="w-full md:w-1/3">
            <img
              src="/sua-foto.jpg"
              alt="Gabriel Gerhardt de Marque"
              className="w-full h-auto rounded-lg shadow"
            />
          </div>

          {/* Coluna do texto */}
          <div className="w-full md:w-2/3 text-justify">
            <h2 className="text-3xl font-bold mb-4 text-center md:text-left">
              Sobre Mim
            </h2>
            <p className="text-base leading-relaxed">
              Olá! Meu nome é Gabriel, atualmente estou cursando Engenharia de
              Software na PUCRS. Sou apaixonado por tecnologia, desenvolvimento
              de software e aprendizado contínuo. Tenho experiência em projetos
              acadêmicos, incluindo aplicações web com React, NestJS, banco de
              dados relacionais e conteinerização com Docker. Busco
              constantemente aprimorar minhas habilidades técnicas e contribuir
              em projetos com impacto real.
            </p>
          </div>
        </div>
      </section>

      {/* Seção Competências */}
      <section id="competencias" className="py-2 px-4">
        <div className="max-w-7xl mx-auto bg-white shadow-md rounded-xl p-8 text-center min-h-[500px] flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Competências</h2>
          <ul className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 text-base text-gray-700">
            <li>React / JS</li>
            <li>Node.js / NestJS</li>
            <li>PostgreSQL / SQL</li>
            <li>Docker</li>
            <li>MongoDB</li>
            <li>Git / GitHub</li>
          </ul>
        </div>
      </section>

      {/* Seção Projetos */}
      <section id="projetos" className="py-2 px-4">
        <div className="max-w-7xl mx-auto bg-white shadow-md rounded-xl p-8 min-h-[500px]">
          <h2 className="text-3xl font-bold text-center mb-6">Projetos</h2>
          <div className="flex flex-col gap-4">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-2">The Controller</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Ferramenta de linha de comando desenvolvida em Python com
                Textual, que facilita a cópia, exclusão e movimentação de
                arquivos e diretórios de forma simples e eficiente.
              </p>
              <a
                href="https://github.com/Gabriel-Gerhardt/The_Controller"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Repositório no GitHub
              </a>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-2">FileMorph</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Aplicação web para conversão de arquivos entre diversos
                formatos, incluindo DOCX, PDF e PAGES. Desenvolvido com React,
                TailwindCSS e Golang (Gin), oferece interface amigável e
                desempenho eficiente.
              </p>
              <a
                href="https://github.com/Gabriel-Gerhardt/FileMorph"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Repositório no GitHub
              </a>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-2">Pong-game</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Jogo clássico Pong desenvolvido em Python usando Pygame,
                projetado para entretenimento e aprendizado prático de
                programação de jogos.
              </p>
              <a
                href="https://github.com/Gabriel-Gerhardt/pong_game"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Repositório no GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
