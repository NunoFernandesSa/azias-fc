import { Footer, Navbar } from "@/components/index.ts";
import { Outlet } from "react-router-dom";
import { useIsMobile } from "./hooks/useIsMobile";

function App() {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-1">
        <Navbar />

        <main className={isMobile ? "flex-1" : "lg:ml-48 flex-1"}>
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default App;
