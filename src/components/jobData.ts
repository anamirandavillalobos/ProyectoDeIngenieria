export type UserType = "jobSeeker" | "employer";

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  location: string;
  type: UserType;
}

export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  modality: string;
  schedule: string;
  publishedDate: string;
  status: "Activa" | "Pausada";
  description: string;
  requirements: string[];
  contactEmail: string;
  contactPhone: string;
}

export const defaultJobSeeker: User = {
  id: 1,
  name: "Lola Pérez",
  email: "lola@gmail.com",
  phone: "+506 8767 8888",
  location: "Esparza, Puntarenas",
  type: "jobSeeker",
};

export const defaultEmployer: User = {
  id: 2,
  name: "Lola Pérez",
  email: "lola@gmail.com",
  phone: "+506 8767 8888",
  location: "Esparza, Puntarenas",
  type: "employer",
};

export const initialJobs: Job[] = [
  {
    id: 1,
    title: "Diseñador Gráfico",
    company: "Creative Studio",
    location: "Esparza, Puntarenas",
    modality: "Remoto",
    schedule: "Tiempo completo",
    publishedDate: "20 may 2025",
    status: "Activa",
    description:
      "Buscamos una persona creativa y responsable para apoyar en la creación de contenido visual, diseño para redes sociales y material publicitario.",
    requirements: [
      "Experiencia básica en diseño gráfico.",
      "Manejo de Canva, Photoshop o herramientas similares.",
      "Buena comunicación.",
      "Creatividad y atención al detalle.",
    ],
    contactEmail: "hola@gmail.com",
    contactPhone: "+506 8298 2826",
  },
  {
    id: 2,
    title: "Desarrollador Web",
    company: "Tech Solutions",
    location: "Puntarenas, CR",
    modality: "Híbrido",
    schedule: "Medio tiempo",
    publishedDate: "20 may 2025",
    status: "Pausada",
    description:
      "Se busca desarrollador web para apoyar en el mantenimiento de aplicaciones y creación de nuevas funcionalidades.",
    requirements: [
      "Conocimiento básico de HTML, CSS y JavaScript.",
      "Deseable experiencia con React.",
      "Responsabilidad y trabajo en equipo.",
    ],
    contactEmail: "tech@gmail.com",
    contactPhone: "+506 8888 1234",
  },
  {
    id: 3,
    title: "Asistente Contable",
    company: "ContiGlobal",
    location: "Puntarenas, CR",
    modality: "Presencial",
    schedule: "Tiempo completo",
    publishedDate: "20 may 2025",
    status: "Activa",
    description:
      "Se necesita asistente contable para apoyo administrativo y registro de información financiera.",
    requirements: [
      "Conocimiento básico en contabilidad.",
      "Manejo de Excel.",
      "Orden y responsabilidad.",
    ],
    contactEmail: "contabilidad@gmail.com",
    contactPhone: "+506 7777 9090",
  },
];