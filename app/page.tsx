// import Image from "next/image";
import Header from "./header/page";
import About from "./section/page";
import Portfolio from "./portfolio/page";
import Contact from "./contact/page";
import Footer from "./footer/page";



export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  )

}