// components/Portfolio.tsx

import Image from "next/image"

interface Project {
    title: string
    description: string
    imageUrl: string
  }
  
  const projects: Project[] = [
    { title: 'Project 1', description: 'Description of project 1', imageUrl: '/air5.jpg' },
    { title: 'Project 2', description: 'Description of project 2', imageUrl: '/air2.jpg' },
    { title: 'Project 3', description: 'Description of project 3', imageUrl: '/air3.jpg' }
  ]
  
  const Portfolio: React.FC = () => {
    return (
      <section id="portfolio" className="py-16 bg-white text-center">
        <h2 className="text-4xl font-semibold mb-12">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <Image src={project.imageUrl} alt={project.title} width={600} height={600} className="w-full h-64 object-cover rounded-md mb-4" />
              {/* <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700">{project.description}</p> */}
            </div>
          ))}
        </div>
      </section>
    )
  }
  
  export default Portfolio
  