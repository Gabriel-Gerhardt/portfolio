function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="bg-blue-600 text-white p-6 shadow-md">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Gabriel Gerhardt de Marque</h1>
          <nav className="space-x-4">
            <a href="#sobre" className="hover:underline">
              Sobre
            </a>
            <a href="#projetos" className="hover:underline">
              Projetos
            </a>
            <a href="#contato" className="hover:underline">
              Contato
            </a>
          </nav>
        </div>
      </header>

      {/* Seção Sobre */}
      <section id="sobre" className="py-20 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Gabriel Gerhardt de Marque
          </h2>
          <p className="text-lg">
            Olá! Meu nome é Gabriel, atualmente estou cursando engenharia de
            software na PUCRS.
          </p>
        </div>
      </section>

      {/* Seção Projetos */}
      <section id="projetos" className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-10">Projetos</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card de Projeto */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Projeto 1</h3>
              <p className="text-gray-600">Descrição breve do projeto.</p>
            </div>
            {/* Replicar para outros projetos */}
          </div>
        </div>
      </section>

      {/* Seção Contato */}
      <section id="contato" className="py-20 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">Contato</h2>
          <p>Você pode me encontrar em:</p>
          <div className="mt-4 space-x-4">
            <a
              href="mailto:email@exemplo.com"
              className="text-blue-600 hover:underline"
            >
              Email
            </a>
            <a
              href="https://github.com/seuusuario"
              className="text-blue-600 hover:underline"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/seuusuario"
              className="text-blue-600 hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-blue-600 text-white">
        © {new Date().getFullYear()} Seu Nome. Todos os direitos reservados.
      </footer>
    </div>
  );
}

export default Home;
