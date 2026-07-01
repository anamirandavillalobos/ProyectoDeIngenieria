import { useState } from "react";
import type { Job } from "./jobData";

interface MyJobsProps {
  jobs: Job[];
  onViewMore: (job: Job) => void;
  onDeleteJob: (jobId: number) => void;
  onChangeStatus: (jobId: number, status: Job["status"]) => void;
}

function MyJobs({
  jobs,
  onViewMore,
  onDeleteJob,
  onChangeStatus,
}: MyJobsProps) {
  const [jobToDelete, setJobToDelete] = useState<Job | null>(null);

  function getStatusClass(status: Job["status"]) {
    if (status === "Activa") {
      return "bg-green-100 text-green-700 border-green-300";
    }

    return "bg-yellow-100 text-yellow-700 border-yellow-300";
  }

  function toggleStatus(job: Job) {
    const newStatus = job.status === "Activa" ? "Pausada" : "Activa";
    onChangeStatus(job.id, newStatus);
  }

  function handleConfirmDelete() {
    if (!jobToDelete) return;

    onDeleteJob(jobToDelete.id);
    setJobToDelete(null);
  }

  return (
    <section className="flex-1 bg-white">
      <div className="h-28 border-b border-gray-200"></div>

      <div className="px-10 py-6">
        <h2 className="text-2xl font-bold text-black">Mis ofertas</h2>

        <p className="text-sm mt-2 text-gray-600">
          Aquí puedes administrar todas las ofertas laborales que has publicado.
        </p>

        <div className="mt-8 border border-gray-300 rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-[#F4F0FF]">
              <tr>
                <th className="px-6 py-4 text-left">Puesto</th>
                <th className="px-6 py-4 text-left">Ubicación</th>
                <th className="px-6 py-4 text-left">Modalidad</th>
                <th className="px-6 py-4 text-center">Estado</th>
                <th className="px-6 py-4 text-center">Acciones</th>
              </tr>
            </thead>

            <tbody>
              {jobs.length > 0 ? (
                jobs.map((job) => (
                  <tr key={job.id} className="border-t border-gray-200">
                    <td className="px-6 py-4 font-bold">{job.title}</td>
                    <td className="px-6 py-4">{job.location}</td>
                    <td className="px-6 py-4">{job.modality}</td>

                    <td className="px-6 py-4 text-center">
                      <button
                        type="button"
                        onClick={() => toggleStatus(job)}
                        className={`min-w-24 border rounded-full px-4 py-2 text-xs font-bold transition ${getStatusClass(
                          job.status
                        )}`}
                      >
                        {job.status}
                      </button>
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex justify-center gap-3">
                        <button
                          type="button"
                          onClick={() => onViewMore(job)}
                          className="bg-[#6246D9] text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-[#5137c7]"
                        >
                          Ver
                        </button>

                        <button
                          type="button"
                          onClick={() => setJobToDelete(job)}
                          className="border border-gray-300 px-4 py-2 rounded-lg text-xs font-bold hover:bg-gray-100"
                        >
                          Eliminar
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={5}
                    className="px-6 py-10 text-center text-gray-500"
                  >
                    Todavía no tienes ofertas publicadas.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-xs text-gray-500">
          Para cambiar el estado de una oferta, toca el botón de estado.
        </p>
      </div>

      {jobToDelete && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 w-full max-w-md">
            <div className="w-14 h-14 rounded-full bg-[#F4F0FF] flex items-center justify-center mb-5">
              <span className="text-2xl text-[#6246D9] font-bold">!</span>
            </div>

            <h3 className="text-2xl font-bold text-black">
              Eliminar oferta laboral
            </h3>

            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
              ¿Estás seguro de eliminar la oferta{" "}
              <span className="font-bold text-black">
                {jobToDelete.title}
              </span>
              ? Esta acción no se puede deshacer.
            </p>

            <div className="mt-8 flex justify-end gap-4">
              <button
                type="button"
                onClick={() => setJobToDelete(null)}
                className="border border-gray-300 px-5 py-3 rounded-lg text-sm font-bold hover:bg-gray-100"
              >
                Cancelar
              </button>

              <button
                type="button"
                onClick={handleConfirmDelete}
                className="bg-[#6246D9] text-white px-5 py-3 rounded-lg text-sm font-bold hover:bg-[#5137c7]"
              >
                Sí, eliminar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default MyJobs;