// import Image from "next/image";
import Header from "./header/page";
import About from "./section/page";
import Services from "./services/page";
import Contact from "./contact/page";
import Footer from "./footer/page";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
