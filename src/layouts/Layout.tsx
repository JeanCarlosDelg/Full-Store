import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { Outlet } from "react-router-dom";

const Layout = () => {
  
  return (
    <>
      <ThemeProvider
        defaultTheme="light"
        storageKey="vite-ui-theme"
      >
        <Navbar />
        <main className="p-4">
          <Outlet />
        </main>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Layout;
