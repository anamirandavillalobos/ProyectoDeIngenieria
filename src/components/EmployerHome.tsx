import type { Job, User } from "./jobData";
import avatarIcon from "../assets/imgs/avatar.png";

interface EmployerHomeProps {
  user: User;
  jobs: Job[];
  onViewMore: (job: Job) => void;
}

function EmployerHome({ user, jobs, onViewMore }: EmployerHomeProps) {
  return (
    <section className="flex-1 bg-white">
      <div className="h-28 border-b border-gray-200"></div>

      <div className="px-10 py-6">
        <h2 className="text-2xl font-bold">
          Hola, <span className="text-[#6246D9]">{user.name.split(" ")[0]}</span>
        </h2>

        <p className="text-sm mt-2 max-w-sm">
          Estas son algunas oportunidades que has publicado recientemente.
        </p>

        <h3 className="font-bold mt-6 mb-6">Trabajos publicados:</h3>

        <div className="space-y-7">
          {jobs.length > 0 ? (
            jobs.map((job) => (
              <article
                key={job.id}
                className="border border-gray-300 rounded-xl px-6 py-5 flex items-center justify-between bg-white"
              >
                <div className="flex items-center gap-6">
                  <img
                    src={avatarIcon}
                    alt="Avatar de oferta"
                    className="w-20 h-20 object-contain"
                  />

                  <div>
                    <h3 className="font-bold text-black">{job.title}</h3>
                    <p className="text-sm mt-1">{job.company}</p>

                    <div className="flex gap-12 mt-5">
                      <span className="text-xs bg-gray-100 border border-gray-300 px-2 py-1 rounded">
                        {job.location}
                      </span>
                      <span className="text-xs bg-gray-100 border border-gray-300 px-2 py-1 rounded">
                        {job.modality}
                      </span>
                      <span className="text-xs bg-gray-100 border border-gray-300 px-2 py-1 rounded">
                        {job.schedule}
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => onViewMore(job)}
                  className="bg-[#6246D9] text-white px-6 py-3 rounded-lg text-sm font-bold hover:bg-[#5137c7]"
                >
                  Ver más
                </button>
              </article>
            ))
          ) : (
            <div className="border border-gray-300 rounded-xl p-8 text-center text-gray-500">
              Todavía no has publicado ofertas laborales.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default EmployerHome;