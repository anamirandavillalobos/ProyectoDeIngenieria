import type { UserType } from "./jobData";
import logoJobConnect from "../assets/imgs/logo_job_connect.png";
import connectionIllustration from "../assets/imgs/connection_illustration.png";
import starsIcon from "../assets/imgs/stars_icon.png";

interface LoginFormProps {
  onLogin: (type: UserType) => void;
  onGoToRegister: () => void;
}

function LoginForm({ onLogin, onGoToRegister }: LoginFormProps) {
  return (
    <main className="min-h-screen bg-white px-12 py-8">
      <header>
        <img
          src={logoJobConnect}
          alt="Logo Job Connect"
          className="w-24 h-auto"
        />
      </header>

      <section className="max-w-7xl mx-auto min-h-[calc(100vh-120px)] grid grid-cols-2 gap-20 items-center">
        <div className="flex flex-col justify-center">
          <div>
            <h2 className="text-4xl font-bold leading-tight text-black">
              Conecta talento
              <br />
              con <span className="text-[#6246D9]">oportunidades</span>
            </h2>

            <p className="mt-5 text-gray-500 max-w-md text-sm leading-relaxed">
              Encuentre el trabajo que impulse su carrera o el talento que lleve
              a su empresa al siguiente nivel.
            </p>
          </div>

          <div className="mt-14 flex justify-center max-w-md">
            <img
              src={connectionIllustration}
              alt="Ilustración de conexión laboral"
              className="w-72 h-auto"
            />
          </div>

          <div className="mt-14 bg-[#ECE6FF] rounded-xl p-5 max-w-xl flex gap-5 items-center">
            <img
              src={starsIcon}
              alt="Icono de reseñas"
              className="w-14 h-14"
            />

            <p className="text-sm text-black leading-relaxed">
              En Job Connect, los{" "}
              <span className="text-[#6246D9]">empleadores</span> pueden
              publicar vacantes y encontrar talento. Los{" "}
              <span className="text-[#6246D9]">candidatos</span> pueden buscar
              empleos, leer, dejar reseñas y comentarios para ayudar a otros.
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="border border-gray-300 rounded-xl p-10 max-w-xl w-full">
            <h2 className="text-3xl font-bold text-center text-[#6246D9] mb-10">
              Iniciar Sesión
            </h2>

            <form
              className="space-y-7"
              onSubmit={(event) => {
                event.preventDefault();
                onLogin("jobSeeker");
              }}
            >
              <div>
                <label className="block text-sm font-bold mb-2">
                  Correo electrónico:
                </label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#6246D9]"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">
                  Contraseña:
                </label>
                <input
                  type="password"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#6246D9]"
                />
              </div>

              <button className="w-full bg-[#6246D9] text-white py-3 rounded-lg font-bold hover:bg-[#5137c7] transition">
                Iniciar Sesión
              </button>
            </form>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => onLogin("jobSeeker")}
                className="border border-[#6246D9] text-[#6246D9] py-3 rounded-lg text-sm font-bold hover:bg-[#F4F0FF]"
              >
                Entrar como buscador
              </button>

              <button
                type="button"
                onClick={() => onLogin("employer")}
                className="border border-[#6246D9] text-[#6246D9] py-3 rounded-lg text-sm font-bold hover:bg-[#F4F0FF]"
              >
                Entrar como empleador
              </button>
            </div>

            <p className="text-center mt-10 text-sm font-bold">
              ¿No tienes una cuenta?{" "}
              <button
                type="button"
                onClick={onGoToRegister}
                className="text-[#6246D9] hover:underline"
              >
                Regístrate
              </button>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default LoginForm;