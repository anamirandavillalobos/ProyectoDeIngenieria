import type { Job } from "./jobData";

interface SavedJobsProps {
  savedJobs: Job[];
  onViewMore: (job: Job) => void;
  onRemoveSaved: (jobId: number) => void;
}

function SavedJobs({ savedJobs, onViewMore, onRemoveSaved }: SavedJobsProps) {
  return (
    <section className="flex-1 bg-white">
      <div className="h-28 border-b border-gray-200"></div>

      <div className="px-10 py-6">
        <h2 className="text-2xl font-bold text-black">Mis guardados</h2>

        <p className="text-sm mt-2 text-gray-600">
          Aquí puedes ver las ofertas laborales que guardaste.
        </p>

        <div className="mt-8 border border-gray-300 rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-[#F4F0FF]">
              <tr>
                <th className="px-6 py-4 text-left">Puesto</th>
                <th className="px-6 py-4 text-left">Empresa</th>
                <th className="px-6 py-4 text-left">Ubicación</th>
                <th className="px-6 py-4 text-left">Modalidad</th>
                <th className="px-6 py-4 text-center">Acciones</th>
              </tr>
            </thead>

            <tbody>
              {savedJobs.length > 0 ? (
                savedJobs.map((job) => (
                  <tr key={job.id} className="border-t border-gray-200">
                    <td className="px-6 py-4 font-bold">{job.title}</td>
                    <td className="px-6 py-4">{job.company}</td>
                    <td className="px-6 py-4">{job.location}</td>
                    <td className="px-6 py-4">{job.modality}</td>

                    <td className="px-6 py-4">
                      <div className="flex justify-center gap-3">
                        <button
                          onClick={() => onViewMore(job)}
                          className="bg-[#6246D9] text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-[#5137c7]"
                        >
                          Ver más
                        </button>

                        <button
                          onClick={() => onRemoveSaved(job.id)}
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
                  <td colSpan={5} className="px-6 py-10 text-center text-gray-500">
                    Todavía no has guardado trabajos.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default SavedJobs;