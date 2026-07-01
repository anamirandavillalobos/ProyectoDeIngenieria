import { useState } from "react";
import type { User } from "./jobData";

import avatarIcon from "../assets/imgs/avatar.png";
import mailIcon from "../assets/imgs/mail.png";
import mapPinIcon from "../assets/imgs/map_pin.png";
import phoneIcon from "../assets/imgs/phone.png";

interface ProfileProps {
  user: User;
  onUpdateUser: (updatedUser: User) => void;
}

function Profile({ user, onUpdateUser }: ProfileProps) {
  const [isEditing, setIsEditing] = useState(false);

  const [name, setName] = useState(user.name);
  const [location, setLocation] = useState(user.location);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);

  function handleSaveChanges() {
    const updatedUser: User = {
      ...user,
      name,
      location,
      email,
      phone,
    };

    onUpdateUser(updatedUser);
    setIsEditing(false);
  }

  function handleCancelEdit() {
    setName(user.name);
    setLocation(user.location);
    setEmail(user.email);
    setPhone(user.phone);
    setIsEditing(false);
  }

  return (
    <section className="flex-1 bg-white">
      <div className="h-28 border-b border-gray-200"></div>

      <div className="px-10 py-10">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold text-black">Mi perfil</h2>

          {!isEditing && (
            <button
              type="button"
              onClick={() => setIsEditing(true)}
              className="bg-[#6246D9] text-white px-5 py-3 rounded-lg text-sm font-bold hover:bg-[#5137c7]"
            >
              Editar perfil
            </button>
          )}
        </div>

        <div className="mt-16 flex items-center gap-16">
          <img
            src={avatarIcon}
            alt="Avatar de usuario"
            className="w-44 h-44 object-contain"
          />

          {!isEditing ? (
            <div>
              <h3 className="text-4xl font-bold text-black">{user.name}</h3>

              <p className="mt-2 text-2xl text-black">
                {user.type === "jobSeeker" ? "Busco Trabajo" : "Soy empleador"}
              </p>

              <div className="mt-10 space-y-8">
                <div className="flex items-center gap-4">
                  <img
                    src={mapPinIcon}
                    alt="Ubicación"
                    className="w-6 h-6 object-contain"
                  />
                  <p className="text-xl text-black">{user.location}</p>
                </div>

                <div className="flex items-center gap-4">
                  <img
                    src={mailIcon}
                    alt="Correo electrónico"
                    className="w-6 h-6 object-contain"
                  />
                  <p className="text-xl text-black">{user.email}</p>
                </div>

                <div className="flex items-center gap-4">
                  <img
                    src={phoneIcon}
                    alt="Teléfono"
                    className="w-6 h-6 object-contain"
                  />
                  <p className="text-xl text-black">{user.phone}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full max-w-2xl">
              <h3 className="text-3xl font-bold text-black">Editar perfil</h3>

              <p className="mt-2 text-sm text-gray-600">
                Actualiza la información visible en tu perfil.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="col-span-2">
                  <label className="block text-sm font-bold mb-2">
                    Nombre completo:
                  </label>
                  <input
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#6246D9]"
                  />
                </div>

                <div className="col-span-2">
                  <label className="block text-sm font-bold mb-2">
                    Ubicación:
                  </label>
                  <input
                    value={location}
                    onChange={(event) => setLocation(event.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#6246D9]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">
                    Correo electrónico:
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#6246D9]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">
                    Teléfono:
                  </label>
                  <input
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#6246D9]"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-4 mt-8">
                <button
                  type="button"
                  onClick={handleCancelEdit}
                  className="border border-gray-300 px-5 py-3 rounded-lg text-sm font-bold hover:bg-gray-100"
                >
                  Cancelar
                </button>

                <button
                  type="button"
                  onClick={handleSaveChanges}
                  className="bg-[#6246D9] text-white px-5 py-3 rounded-lg text-sm font-bold hover:bg-[#5137c7]"
                >
                  Guardar cambios
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Profile;