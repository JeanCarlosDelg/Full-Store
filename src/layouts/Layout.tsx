import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";

const initialOptions = {
    clientId: import.meta.env.VITE_PAYPAL_CLIENT_ID,
    currency: "USD",
    intent: "capture"
  };

const Layout = () => {
  return (
    <>
    <PayPalScriptProvider options={initialOptions}>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <Navbar />
        <main className="p-4 mt-16">
          <Outlet />
        </main>
        <Footer />
        <Toaster richColors />
      </ThemeProvider>
    </PayPalScriptProvider>
    </>
  );
};

export default Layout;
