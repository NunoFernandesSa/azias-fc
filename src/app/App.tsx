import NavBar from "@/components/layout/NavBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <header className="w-full flex items-center justify-center h-32 bg-primary">
        <NavBar />
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      {/* <footer className="border-t">
        <div className="container py-4 text-center text-sm">
          &copy; {new Date().getFullYear()} AZIAS FC. Todos os direitos
          reservados.
        </div>
      </footer> */}
    </>
  );
}

export default App;
