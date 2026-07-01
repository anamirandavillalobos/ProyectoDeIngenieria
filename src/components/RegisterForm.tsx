import type { UserType } from "./jobData";
import logoJobConnect from "../assets/imgs/logo_job_connect.png";
import connectionIllustration from "../assets/imgs/connection_illustration.png";
import starsIcon from "../assets/imgs/stars_icon.png";

interface RegisterFormProps {
  selectedType: UserType;
  onSelectType: (type: UserType) => void;
  onRegister: () => void;
  onGoToLogin: () => void;
}

function RegisterForm({
  selectedType,
  onSelectType,
  onRegister,
  onGoToLogin,
}: RegisterFormProps) {
  return (
    <main className="min-h-screen bg-white px-14 py-8">
      <header>
        <img
          src={logoJobConnect}
          alt="Logo Job Connect"
          className="w-24 h-auto"
        />
      </header>

      <section className="grid grid-cols-2 gap-24 mt-16 items-center">
        <div>
          <h2 className="text-4xl font-bold leading-tight text-black">
            Conecta talento
            <br />
            con <span className="text-[#6246D9]">oportunidades</span>
          </h2>

          <p className="mt-4 text-gray-500 max-w-md text-sm">
            Encuentre el trabajo que impulse su carrera o el talento que lleve a
            su empresa al siguiente nivel.
          </p>

          <div className="mt-16 flex justify-center max-w-md">
            <img
              src={connectionIllustration}
              alt="Ilustración de conexión laboral"
              className="w-72 h-auto"
            />
          </div>

          <div className="mt-20 bg-[#ECE6FF] rounded-xl p-5 max-w-xl flex gap-4 items-center">
            <img
              src={starsIcon}
              alt="Icono de reseñas"
              className="w-14 h-14"
            />

            <p className="text-sm text-black">
              En Job Connect, los{" "}
              <span className="text-[#6246D9]">empleadores</span> pueden
              publicar vacantes y encontrar talento. Los{" "}
              <span className="text-[#6246D9]">candidatos</span> pueden buscar
              empleos, leer, dejar reseñas y comentarios para ayudar a otros.
            </p>
          </div>
        </div>

        <div className="border border-gray-300 rounded-xl p-10 max-w-2xl w-full">
          <h2 className="text-3xl font-bold text-center text-[#6246D9] mb-8">
            Registrarse
          </h2>

          <h3 className="font-bold mb-5">Crea tu cuenta:</h3>

          <form
            className="space-y-6"
            onSubmit={(event) => {
              event.preventDefault();
              onRegister();
            }}
          >
            <div>
              <label className="block text-sm font-bold mb-2">
                Nombre completo:
              </label>
              <input className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#6246D9]" />
            </div>

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

            <div>
              <label className="block text-sm font-bold mb-2">
                Confirmar contraseña:
              </label>
              <input
                type="password"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#6246D9]"
              />
            </div>

            <div>
              <p className="text-sm font-bold mb-4">Tipo de cuenta:</p>

              <div className="grid grid-cols-2 gap-6">
                <button
                  type="button"
                  onClick={() => onSelectType("jobSeeker")}
                  className={`border rounded-xl p-6 text-center transition ${
                    selectedType === "jobSeeker"
                      ? "border-[#6246D9] bg-[#F1ECFF]"
                      : "border-gray-300"
                  }`}
                >
                  <div className="text-3xl mb-3">▣</div>
                  <h4 className="font-bold">Busco Trabajo</h4>
                  <p className="text-sm mt-2">
                    Encuentra empleos y lee reseñas de empresas.
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => onSelectType("employer")}
                  className={`border rounded-xl p-6 text-center transition ${
                    selectedType === "employer"
                      ? "border-[#6246D9] bg-[#F1ECFF]"
                      : "border-gray-300"
                  }`}
                >
                  <div className="text-3xl mb-3">▱</div>
                  <h4 className="font-bold">Soy empleador</h4>
                  <p className="text-sm mt-2">
                    Publica vacantes y encuentra talento.
                  </p>
                </button>
              </div>
            </div>

            <button className="w-full bg-[#6246D9] text-white py-3 rounded-lg font-bold hover:bg-[#5137c7] transition">
              Crear cuenta
            </button>
          </form>

          <p className="text-center mt-5 text-sm font-bold">
            ¿Ya tienes cuenta?{" "}
            <button
              type="button"
              onClick={onGoToLogin}
              className="text-[#6246D9] hover:underline"
            >
              Iniciar sesión
            </button>
          </p>
        </div>
      </section>
    </main>
  );
}

export default RegisterForm;