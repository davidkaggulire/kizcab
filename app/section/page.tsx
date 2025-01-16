import Image from "next/image";
import Link from "next/link";

// components/About.tsx
const About: React.FC = () => {
  //   return (
  //     <section id="about" className="py-16 bg-gray-100 text-center">
  //       <h2 className="text-4xl font-semibold mb-4">About KizCab</h2>
  //       <p className="text-lg max-w-2xl mx-auto">
  //         Welcome to KizCab, your trusted partner for reliable and convenient
  //         transportation services in Kampala and beyond. Whether you&lsquo;re heading to
  //         the airport, commuting to work, or exploring the city, KizCab is here to
  //         ensure a seamless and comfortable journey every time.
  //       </p>
  //     </section>
  //   );

  return (
    // <section
    //   id="about"
    //   className="py-16 bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 text-white"
    // >
    <section
      id="about"
      className="py-16 bg-gradient-to-r from-darkBlueGray via-lightBlueGray to-darkBlueGray text-white flex flex-col md:flex-row items-center"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-between">
        {/* Image Section */}
        <div className="md:w-1/3 mb-8 md:mb-0">
          <Image
            src="/kizcab3.png" // Replace with the actual path to your image
            alt="KizCab Owner"
            width={400}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-2/3 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-6">About Kizcab</h2>
          <p className="text-lg mb-6">
            Welcome to KizCab, your trusted partner for reliable and convenient
            transportation services in Kampala and beyond. Whether you&lsquo;re
            heading to the airport, commuting to work, or exploring the city,
            KizCab is here to ensure a seamless and comfortable journey every
            time.
          </p>
          <button className="px-6 py-2 bg-white text-pink-500 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
            <Link href="#portfolio">Learn More</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
