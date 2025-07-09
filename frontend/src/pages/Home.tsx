import minhaFoto from "../assets/eu2.jpeg"; // ajuste o caminho conforme necessário

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 pt-20">
      <header className="fixed top-0 left-0 w-full bg-purple-800 text-white h-20 px-8 shadow-md z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center h-full">
          <h1 className="text-2xl font-bold">Gabriel Gerhardt de Marque</h1>
          <div className="flex gap-6 text-sm">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:email@exemplo.com"
              className="hover:underline"
            >
              Email
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Gabriel-Gerhardt"
              className="hover:underline"
            >
              GitHub
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
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
              src={minhaFoto}
              alt="Gabriel Gerhardt de Marque"
              className="w-96 h-96 rounded-full object-cover shadow mx-auto"
            />
          </div>

          {/* Coluna do texto */}
          <div className="w-full md:w-2/3 text-justify">
            <h2 className="text-3xl font-bold mb-4 text-center md:text-left">
              Sobre Mim
            </h2>
            <p className="text-base leading-relaxed">
              Sou estudante de Engenharia de Software na PUCRS, apaixonado por
              tecnologia e pela criação de soluções que combinam eficiência
              técnica com impacto real. Tenho experiência prática com
              desenvolvimento full stack, com ênfase em backend, atuando com
              ferramentas modernas como React, NestJS, PostgreSQL, Golang e
              MongoDB, além de familiaridade com boas práticas de versionamento,
              documentação e testes.
              <p>
                Ao longo da graduação, participei de projetos interdisciplinares
                com equipes multidisciplinares, onde desenvolvi não apenas
                habilidades técnicas, e de pessoais — como liderança,
                organização e comunicação clara.
              </p>
              Falo inglês fluentemente e espanhol em nível intermediário, o que
              me permite colaborar com equipes internacionais. Estou em
              constante evolução, buscando aprender, construir e contribuir com
              projetos que façam diferença.
            </p>
          </div>
        </div>
      </section>

      {/* Seção Competências */}
      <section id="competencias" className="py-12 px-4">
        <div className="max-w-7xl mx-auto bg-white shadow-md rounded-xl p-8 text-center min-h-[500px] flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-8">Competências</h2>

          <div className="flex flex-col gap-12 text-left text-gray-700 items-center md:items-start">
            {/* Interpessoais */}
            <div className="w-full md:w-2/3">
              <h3 className="text-xl font-semibold mb-4 text-center md:text-left">
                Interpessoais
              </h3>
              <ul className="space-y-1 list-disc list-inside">
                <li>Inglês fluente, espanhol intermediário</li>
                <li>Trabalho em equipe, liderança</li>
                <li>Organização, Adaptabilidade</li>
              </ul>
            </div>

            {/* Técnicas */}
            <div className="w-full md:w-2/3">
              <h3 className="text-xl font-semibold mb-4 text-center md:text-left">
                Técnicas
              </h3>
              <ul className="space-y-1 list-disc list-inside">
                <li>
                  Desenvolvimento web (Frontend): HTML, CSS, Javascript, React
                </li>
                <li>
                  Desenvolvimento web (Backend): Golang (Gin), Node.js, Nest.js
                </li>
                <li>Banco de dados: PostgreSQL, OracleSQL, MongoDB, Prisma</li>
                <li>
                  Linguagens de programação: Javascript, Java, Python, C++, C e
                  Go
                </li>
                <li>
                  Ferramentas: Git, Github, LaTeX, Microsoft Office, Docker
                </li>
              </ul>
            </div>
          </div>
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
