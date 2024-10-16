import "@/styles/globals.css";
import Navbar from "@/pages/components/Navbar";
import { DarkModeProvider } from "@/pages/contexts/DarkModeContext";
import Footer from "@/pages/components/Footer";

export default function App({ Component, pageProps }) {
  return(
      <DarkModeProvider>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
      </DarkModeProvider>
  );
}
