import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <header className="border-b">
        <nav className="container flex items-center justify-between py-4">
          <div className="font-bold">AZIAS FC</div>
          <div className="flex gap-4 text-sm">
            <Link to="/">Início</Link>
            <Link to="/clube">O clube</Link>
            <Link to="/equipa">A Equipa</Link>
            <Link to="/calendário">Calendário</Link>
            <Link to="/galeria">Galeria</Link>
            <Link to="/parceiros">Parceiros e Apoiadores</Link>
            <Link to="/contacto">Contacto</Link>
            <Link to="/loja">Loja</Link>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t">
        <div className="container py-4 text-center text-sm">
          &copy; {new Date().getFullYear()} AZIAS FC. Todos os direitos
          reservados.
        </div>
      </footer>
    </>
  );
}

export default App;
