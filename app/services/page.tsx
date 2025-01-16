// components/Portfolio.tsx

import Image from "next/image";
import Link from "next/link";

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  slug: string;
}

const projects: Project[] = [
  {
    title: "Airport PickUps and Dropoffs",
    description: "Seamless and reliable airport pickups",
    imageUrl: "/air5.jpg",
    slug: "project-1",
  },
  {
    title: "Kampala Tour",
    description:
      "Discover the vibrant heart of Uganda with our Kampala city tours",
    imageUrl: "/tour2.jpg",
    slug: "project-2",
  },
  {
    title: "Picks up in the city",
    description: "Convenient and dependable city pickups",
    imageUrl: "/tour1.jpg",
    slug: "project-3",
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 bg-white text-center">
      <h2 className="text-4xl font-semibold mb-12">Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Link href={`/services/${project.slug}`} key={index}>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow">
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={600}
                height={600}
                className="w-full h-64 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700">{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Services;
