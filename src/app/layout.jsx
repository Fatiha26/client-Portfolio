import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Who from "./components/Who";
import Blogs from "./components/Blogs";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Arjon's",
  description: "Arjon Golder",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto&display=swap" rel="stylesheet"></link>
      </head>
      <body>
      <Header />
        {children}
        <Who />
        <Blogs />
        <Skills />
        <Projects />
        <Contact />
        <ScrollToTop/>
        
        <Footer />
      </body>
    </html>
  );
}
