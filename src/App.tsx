import { Footer, Navbar } from "@/components/index.ts";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-1">
        <Navbar />

        <main className="lg:ml-48 flex-1">
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default App;
