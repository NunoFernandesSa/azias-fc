import { Navbar } from "@/components/index.ts";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="flex">
        <header className="h-screen w-32 bg-primary">
          <Navbar />
        </header>

        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
