"use client";

import Image from "next/image";
import { notFound, useRouter } from "next/navigation";
import { use } from "react";

const serviceData = {
  "project-1": {
    title: "Airport Pickups and Dropoffs",
    description:
      "Seamless and reliable airport pickups to ensure your journey starts and ends stress-free. Whether you're traveling for business or leisure, we provide timely pickups, professional drivers, and comfortable rides tailored to your schedule. Let us take the hassle out of airport transfers—your comfort is our priority!",
    imageUrl: "/air5.jpg",
  },
  "project-2": {
    title: "Kampala Tour",
    description:
      "Discover the vibrant heart of Uganda with our Kampala city tours. Explore cultural landmarks, bustling markets, historical sites, and hidden gems that showcase the rich heritage and lively spirit of the city. Experience Kampala like never before—an adventure you won't forget!",
    imageUrl: "/tour2.jpg",
  },
  "project-3": {
    title: "Picks up in the city",
    description:
      "Convenient and dependable city pickups designed to get you where you need to be. Whether it’s work, errands, or a night out, our professional drivers ensure a smooth and hassle-free ride every time. Your comfort, our priority!",
    imageUrl: "/tour1.jpg",
  },
};
// } as const;

type ServiceKey = keyof typeof serviceData; // Extract the keys as a union type: "project-1" | "project-2" | "project-3"

interface ServiceDetailsProps {
  params: Promise<{
    services: string;
  }>;
}

export default function ServiceDetails({ params }: ServiceDetailsProps) {
  const router = useRouter(); // For navigating back

  // console.log("params:", params);

  const resolvedParams = use(params);

  const serviceKey = resolvedParams.services as ServiceKey;
  const serviceDetail = serviceData[serviceKey];

  if (!serviceDetail) {
    console.error(`Service not found for key: ${resolvedParams.services}`);
    notFound();
  }

  console.log("Service Detail:", serviceDetail, resolvedParams.services);

  return (
    <div className="">
      <header className="bg-darkBlueGray text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* <h1 className="text-3xl font-bold">KIZCAB</h1> */}
          <h1 className="text-3xl font-bold">
            <span>KIZ</span>
            <span className="text-darkYellow">CAB</span>
          </h1>
        </div>
      </header>
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-4">{serviceDetail.title}</h1>
        <Image
          src={serviceDetail.imageUrl}
          alt={serviceDetail.title}
          width={600}
          height={600}
          className="w-full max-w-2xl mb-6 rounded-md"
        />
        <p className="text-lg text-gray-700">{serviceDetail.description}</p>
        {/* Back Button */}
        <button
          onClick={() => router.back()} // Navigate back to the previous page
          className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Go Back
        </button>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
