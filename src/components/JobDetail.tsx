import { useState } from "react";
import type { Job, UserType } from "./jobData";

interface JobDetailProps {
  job: Job | null;
  userType: UserType;
  onBack: () => void;
}

function JobDetail({ job, userType, onBack }: JobDetailProps) {
  const [comments, setComments] = useState([
    "Muy buena oferta, la información está clara.",
    "Me gusta que dejaron los datos de contacto visibles.",
  ]);

  const [newComment, setNewComment] = useState("");

  const isEmployer = userType === "employer";

  function handleAddComment() {
    if (newComment.trim() === "") return;

    setComments([...comments, newComment]);
    setNewComment("");
  }

  function handleDeleteComment(commentIndex: number) {
    const updatedComments = comments.filter((_, index) => index !== commentIndex);
    setComments(updatedComments);
  }

  if (!job) {
    return (
      <section className="flex-1 bg-white">
        <div className="h-28 border-b border-gray-200"></div>

        <div className="px-10 py-10">
          <h2 className="text-2xl font-bold">No hay trabajo seleccionado</h2>

          <button
            onClick={onBack}
            className="mt-6 bg-[#6246D9] text-white px-5 py-3 rounded-lg font-bold"
          >
            Volver
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="flex-1 bg-white">
      <div className="h-28 border-b border-gray-200"></div>

      <div className="px-10 py-6">
        <button
          onClick={onBack}
          className="text-sm font-bold text-[#6246D9] hover:underline"
        >
          ← Volver
        </button>

        <div className="mt-6 border border-gray-300 rounded-xl p-8">
          <div>
            <h2 className="text-3xl font-bold text-black">{job.title}</h2>
            <p className="mt-2 text-gray-600">{job.company}</p>
          </div>

          <div className="flex gap-4 mt-6">
            <span className="text-xs bg-gray-100 border border-gray-300 px-3 py-2 rounded">
              {job.location}
            </span>
            <span className="text-xs bg-gray-100 border border-gray-300 px-3 py-2 rounded">
              {job.modality}
            </span>
            <span className="text-xs bg-gray-100 border border-gray-300 px-3 py-2 rounded">
              {job.schedule}
            </span>
            <span className="text-xs bg-gray-100 border border-gray-300 px-3 py-2 rounded">
              Publicado: {job.publishedDate}
            </span>
          </div>

          <div className="mt-8">
            <h3 className="font-bold text-lg">Descripción del puesto</h3>
            <p className="mt-3 text-sm text-gray-700 max-w-4xl">
              {job.description}
            </p>
          </div>

          <div className="mt-8">
            <h3 className="font-bold text-lg">Requisitos</h3>

            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              {job.requirements.map((requirement) => (
                <li key={requirement}>• {requirement}</li>
              ))}
            </ul>
          </div>

          <div className="mt-8 bg-[#F4F0FF] rounded-xl p-5">
            <h3 className="font-bold text-lg">Información de contacto</h3>

            <p className="mt-3 text-sm">
              <span className="font-bold">Correo:</span> {job.contactEmail}
            </p>

            <p className="mt-2 text-sm">
              <span className="font-bold">Teléfono:</span> {job.contactPhone}
            </p>
          </div>
        </div>

        <div className="mt-8 border border-gray-300 rounded-xl p-8">
          <h3 className="font-bold text-lg">Comentarios y reseñas</h3>

          <div className="mt-5 space-y-4">
            {comments.length > 0 ? (
              comments.map((comment, index) => (
                <div
                  key={`${comment}-${index}`}
                  className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm flex items-center justify-between gap-4"
                >
                  <p>{comment}</p>

                  {isEmployer && (
                    <button
                      type="button"
                      onClick={() => handleDeleteComment(index)}
                      className="border border-gray-300 px-4 py-2 rounded-lg text-xs font-bold hover:bg-gray-100"
                    >
                      Eliminar
                    </button>
                  )}
                </div>
              ))
            ) : (
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm text-gray-500">
                Todavía no hay comentarios.
              </div>
            )}
          </div>

          {!isEmployer && (
            <div className="mt-6">
              <textarea
                placeholder="Escribe un comentario..."
                value={newComment}
                onChange={(event) => setNewComment(event.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#6246D9] min-h-24"
              />

              <button
                onClick={handleAddComment}
                className="mt-4 bg-[#6246D9] text-white px-6 py-3 rounded-lg font-bold"
              >
                Agregar comentario
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default JobDetail;