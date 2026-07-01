import { useState } from "react";
import JobCard from "./JobCard";
import type { Job } from "./jobData";

interface SearchJobsProps {
  jobs: Job[];
  savedJobs: Job[];
  onViewMore: (job: Job) => void;
  onSaveJob: (job: Job) => void;
}

function SearchJobs({ jobs, savedJobs, onViewMore, onSaveJob }: SearchJobsProps) {
  const [searchText, setSearchText] = useState("");

  const filteredJobs = jobs.filter((job) => {
    const text = searchText.toLowerCase();

    return (
      job.title.toLowerCase().includes(text) ||
      job.company.toLowerCase().includes(text) ||
      job.location.toLowerCase().includes(text) ||
      job.modality.toLowerCase().includes(text)
    );
  });

  function isJobSaved(jobId: number) {
    return savedJobs.some((job) => job.id === jobId);
  }

  return (
    <section className="flex-1 bg-white">
      <div className="h-28 border-b border-gray-200"></div>

      <div className="px-10 py-6">
        <h2 className="text-2xl font-bold text-black">Buscar trabajos</h2>

        <p className="text-sm mt-2 text-gray-600">
          Encuentra oportunidades según el puesto, empresa, ubicación o modalidad.
        </p>

        <div className="mt-8 max-w-2xl">
          <input
            type="text"
            placeholder="Buscar trabajo..."
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
            className="w-full border border-gray-300 rounded-lg px-5 py-3 outline-none focus:border-[#6246D9]"
          />
        </div>

        <h3 className="font-bold mt-8 mb-6">Trabajos disponibles</h3>

        <div className="space-y-7">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                isSaved={isJobSaved(job.id)}
                onViewMore={onViewMore}
                onSave={onSaveJob}
              />
            ))
          ) : (
            <div className="border border-gray-300 rounded-xl p-8 text-center text-gray-500">
              No se encontraron trabajos con esa búsqueda.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default SearchJobs;