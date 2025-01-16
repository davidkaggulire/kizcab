// components/Header.tsx
import Link from "next/link";
// import logo from '../../public/kizcab1.png'
// import Image from 'next/image'

const Header: React.FC = () => {
  return (
    <header className="bg-darkBlueGray text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* <h1 className="text-3xl font-bold">KIZCAB</h1> */}
        <h1 className="text-3xl font-bold">
          <span>KIZ</span>
          <span className="text-darkYellow">CAB</span>
        </h1>

        {/* <Image src={logo} alt="KIZCABlogo" width={100} height={150} className="h-12" /> */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="#services">Services</Link>
            </li>
            <li>
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
