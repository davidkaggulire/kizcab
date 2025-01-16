import Image from "next/image";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { PiMapPinFill } from "react-icons/pi";

//   <footer className="bg-gray-900 text-white py-8 text-center">
//     <p>© 2025 KIZCAB. All rights reserved.</p>
//   </footer>

// components/Footer.tsx
const Footer: React.FC = () => {
  return (
    <footer className="bg-darkBlueGray text-white py-12">
      <div className="container mx-auto flex justify-between items-center flex-wrap">
        {/* Left Section */}
        <div className="flex flex-col space-y-2">
          <h2 className="text-lg font-bold">KIZITO TWALIB</h2>
          <p className="text-sm">Director</p>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col space-y-2">
          <div className="flex items-center">
            <BsTelephone className="mr-2" />
            <span>+256 788 072231</span>
          </div>
          <div className="flex items-center">
            <MdOutlineEmail className="mr-2" />

            <span>Twalibluvinz@gmail.com</span>
          </div>
          <div className="flex items-center">
            <PiMapPinFill className="mr-2" />
            <span>Kisasi - Kampala</span>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center">
          {/* <img src="/path-to-image/kizcab-logo.png" alt="Kizcab Logo" className="h-12 mb-2" /> */}
          <Image
            src="/kizcab3.png"
            alt="KIZCAB logo"
            width={350}
            height={150}
            className="mb-4"
          />
          {/* <p className="text-sm">Airport Pickups . Drop Offs</p> */}
        </div>
      </div>
      <div className="container mx-auto flex justify-center items-center">
        <p className="text-gray-400">© 2025 KIZCAB. All rights reserved.</p>
      </div>
    </footer>
  );
// return (
//     <footer className="bg-darkBlueGray text-white py-12">
//       <div className="container mx-auto flex flex-wrap justify-between items-center">
//         {/* Left Section */}
//         <div className="flex flex-col space-y-2 text-center md:text-left">
//           <h2 className="text-lg font-bold">KIZITO TWALIB</h2>
//           <p className="text-sm">Director</p>
//         </div>
  
//         {/* Middle Section */}
//         <div className="flex flex-col space-y-2 text-center md:text-left">
//           <div className="flex items-center justify-center md:justify-start">
//             <BsTelephone className="mr-2" />
//             <span>+256 788 072231</span>
//           </div>
//           <div className="flex items-center justify-center md:justify-start">
//             <MdOutlineEmail className="mr-2" />
//             <span>Twalibluvinz@gmail.com</span>
//           </div>
//           <div className="flex items-center justify-center md:justify-start">
//             <PiMapPinFill className="mr-2" />
//             <span>Kisasi - Kampala</span>
//           </div>
//         </div>
  
//         {/* Right Section */}
//         <div className="flex flex-col items-center">
//           <Image
//             src="/kizcab3.png"
//             alt="KIZCAB logo"
//             width={300}
//             height={150}
//             className="mb-4"
//           />
//         </div>
//       </div>
  
//       {/* Footer Text */}
//       <div className="container mx-auto flex justify-center items-center mt-6">
//         <p className="text-gray-400 text-center">© 2025 KIZCAB. All rights reserved.</p>
//       </div>
//     </footer>
//   );
  
  
};

export default Footer;
