import type { Job } from "./jobData";
import avatarIcon from "../assets/imgs/avatar.png";

interface JobCardProps {
  job: Job;
  isSaved: boolean;
  onViewMore: (job: Job) => void;
  onSave?: (job: Job) => void;
}

function JobCard({ job, isSaved, onViewMore, onSave }: JobCardProps) {
  return (
    <article className="border border-gray-300 rounded-xl px-6 py-5 flex items-center justify-between bg-white">
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

      <div className="flex items-center gap-7">
        <button
          onClick={() => onSave?.(job)}
          className={`text-2xl transition ${
            isSaved ? "text-[#6246D9]" : "text-gray-700 hover:text-[#6246D9]"
          }`}
          title="Guardar"
        >
          {isSaved ? "♥" : "♡"}
        </button>

        <button
          onClick={() => onViewMore(job)}
          className="bg-[#6246D9] text-white px-6 py-3 rounded-lg text-sm font-bold hover:bg-[#5137c7]"
        >
          Ver más
        </button>
      </div>
    </article>
  );
}

export default JobCard;