// ---------- react ----------
import { useEffect, useState } from "react";
// ---------- react router dom ----------
import { Outlet } from "react-router-dom";
// ---------- components ----------
import { Footer, Navbar, LoadingScreen } from "@/components/index.ts";
// ---------- hooks ----------
import { useIsMobile } from "./hooks/useIsMobile";

function App() {
  const isMobile = useIsMobile();
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showLoading ? (
        <LoadingScreen />
      ) : (
        <div className="min-h-screen flex flex-col">
          <div className="flex flex-1">
            <Navbar />

            <main className={isMobile ? "flex-1" : "lg:ml-48 flex-1"}>
              <Outlet />
            </main>
          </div>

          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
