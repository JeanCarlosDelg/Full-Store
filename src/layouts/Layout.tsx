import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";

const Layout = () => {
  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <Navbar />
        <main className="p-4 mt-16">
          <Outlet />
        </main>
        <Footer />
        <Toaster richColors />
      </ThemeProvider>
    </>
  );
};

export default Layout;
