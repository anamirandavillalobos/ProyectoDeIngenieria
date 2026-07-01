import JobCard from "./JobCard";
import type { Job, User } from "./jobData";

interface JobSeekerHomeProps {
  user: User;
  jobs: Job[];
  savedJobs: Job[];
  onViewMore: (job: Job) => void;
  onSaveJob: (job: Job) => void;
}

function JobSeekerHome({
  user,
  jobs,
  savedJobs,
  onViewMore,
  onSaveJob,
}: JobSeekerHomeProps) {
  function isJobSaved(jobId: number) {
    return savedJobs.some((job) => job.id === jobId);
  }

  return (
    <section className="flex-1 bg-white">
      <div className="h-28 border-b border-gray-200"></div>

      <div className="px-10 py-6">
        <h2 className="text-2xl font-bold">
          Hola, <span className="text-[#6246D9]">{user.name.split(" ")[0]}</span>
        </h2>

        <p className="text-sm mt-2 max-w-sm">
          Estas son algunas oportunidades que pueden interesarte.
        </p>

        <h3 className="font-bold mt-6 mb-6">Trabajos recomendados para ti</h3>

        <div className="space-y-7">
          {jobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              isSaved={isJobSaved(job.id)}
              onViewMore={onViewMore}
              onSave={onSaveJob}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default JobSeekerHome;