import { Footer, Navbar } from "@/components/index.ts";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-1">
        <header className="h-screen hidden lg:flex lg:w-48 bg-primary fixed top-0 left-0">
          <Navbar />
        </header>

        <main className="lg:ml-48 flex-1">
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default App;
