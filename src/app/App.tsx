import NavBar from "@/components/layout/NavBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <header className="w-full h-32 fixed top-0 left-0 right-0 flex items-center justify-center bg-[#0a104f]">
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
