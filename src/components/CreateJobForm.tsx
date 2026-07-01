import { useState } from "react";
import type { Job } from "./jobData";

interface CreateJobFormProps {
  onCreateJob: (job: Job) => void;
  onCancel: () => void;
}

function CreateJobForm({ onCreateJob, onCancel }: CreateJobFormProps) {
  const [title, setTitle] = useState("");
  const [professionalType, setProfessionalType] = useState("");
  const [description, setDescription] = useState("");
  const [modality, setModality] = useState("Presencial");
  const [schedule, setSchedule] = useState("Tiempo completo");
  const [hours, setHours] = useState("");
  const [salary, setSalary] = useState("");
  const [location, setLocation] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [requirements, setRequirements] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const newJob: Job = {
      id: Date.now(),
      title,
      company: "Job Connect Empresa",
      location,
      modality,
      schedule,
      publishedDate: "20 may 2025",
      status: "Activa",
      description: `${description} Tipo de profesional: ${professionalType}. Horas semanales: ${hours}. Salario: ${
        salary || "No especificado"
      }.`,
      requirements: requirements
        .split("\n")
        .map((requirement) => requirement.trim())
        .filter((requirement) => requirement !== ""),
      contactEmail,
      contactPhone,
    };

    onCreateJob(newJob);

    setTitle("");
    setProfessionalType("");
    setDescription("");
    setModality("Presencial");
    setSchedule("Tiempo completo");
    setHours("");
    setSalary("");
    setLocation("");
    setContactEmail("");
    setContactPhone("");
    setRequirements("");
  }

  return (
    <section className="flex-1 bg-white">
      <div className="h-28 border-b border-gray-200"></div>

      <div className="px-10 py-6">
        <h2 className="text-2xl font-black text-black">Publicar trabajo</h2>

        <p className="text-sm mt-2 text-gray-600">
          Completa la información para crear una nueva oferta laboral.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 border border-gray-300 rounded-xl p-8 max-w-5xl"
        >
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold mb-2">
                Nombre del puesto:
              </label>
              <input
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#6246D9]"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">
                Tipo de profesional:
              </label>
              <input
                value={professionalType}
                onChange={(event) => setProfessionalType(event.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#6246D9]"
              />
            </div>

            <div className="col-span-2">
              <label className="block text-sm font-bold mb-2">
                Descripción del puesto:
              </label>
              <textarea
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                required
                className="w-full min-h-28 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#6246D9]"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">Modalidad:</label>
              <select
                value={modality}
                onChange={(event) => setModality(event.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#6246D9]"
              >
                <option>Presencial</option>
                <option>Remoto</option>
                <option>Híbrido</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">
                Tipo de horario:
              </label>
              <select
                value={schedule}
                onChange={(event) => setSchedule(event.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#6246D9]"
              >
                <option>Tiempo completo</option>
                <option>Medio tiempo</option>
                <option>Por horas</option>
                <option>Temporal</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">
                Horas semanales:
              </label>
              <input
                value={hours}
                onChange={(event) => setHours(event.target.value)}
                required
                placeholder="Ej: 40 horas"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#6246D9]"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">
                Salario opcional:
              </label>
              <input
                value={salary}
                onChange={(event) => setSalary(event.target.value)}
                placeholder="Ej: ₡350 000"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#6246D9]"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">Ubicación:</label>
              <input
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#6246D9]"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">
                Correo electrónico:
              </label>
              <input
                type="email"
                value={contactEmail}
                onChange={(event) => setContactEmail(event.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#6246D9]"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">Teléfono:</label>
              <input
                value={contactPhone}
                onChange={(event) => setContactPhone(event.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#6246D9]"
              />
            </div>

            <div className="col-span-2">
              <label className="block text-sm font-bold mb-2">
                Requisitos:
              </label>
              <textarea
                value={requirements}
                onChange={(event) => setRequirements(event.target.value)}
                placeholder="Escribe un requisito por línea"
                required
                className="w-full min-h-28 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#6246D9]"
              />
            </div>
          </div>

          <div className="flex justify-end gap-4 mt-8">
            <button
              type="button"
              onClick={onCancel}
              className="border border-gray-300 px-6 py-3 rounded-lg font-bold"
            >
              Cancelar
            </button>

            <button className="bg-[#6246D9] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#5137c7]">
              Publicar oferta
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default CreateJobForm;