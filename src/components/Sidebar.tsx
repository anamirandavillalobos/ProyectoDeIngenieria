import type { UserType } from "./jobData";

import logoJobConnect from "../assets/imgs/logo_job_connect.png";

import homeIcon from "../assets/imgs/Home.png";
import homePurpleIcon from "../assets/imgs/home_purple.png";

import searchIcon from "../assets/imgs/search.png";
import searchPurpleIcon from "../assets/imgs/search_purple.png";

import bookmarkIcon from "../assets/imgs/bookmark.png";
import bookmarkPurpleIcon from "../assets/imgs/bookmark_purple.png";

import personIcon from "../assets/imgs/person.png";
import personPurpleIcon from "../assets/imgs/person_purple.png";

import plusSquareIcon from "../assets/imgs/plus_square.png";
import plusSquarePurpleIcon from "../assets/imgs/plus_square_purple.png";

import signOutIcon from "../assets/imgs/sing_out.png";
import signOutPurpleIcon from "../assets/imgs/sing_out_purple.png";

export type View =
  | "home"
  | "search"
  | "saved"
  | "profile"
  | "createJob"
  | "myJobs"
  | "detail";

interface SidebarProps {
  userType: UserType;
  activeView: View;
  onChangeView: (view: View) => void;
  onLogout: () => void;
}

interface MenuItem {
  id: View;
  label: string;
  icon: string;
  activeIcon: string;
}

function Sidebar({
  userType,
  activeView,
  onChangeView,
  onLogout,
}: SidebarProps) {
  const seekerMenu: MenuItem[] = [
    {
      id: "home",
      label: "Inicio",
      icon: homeIcon,
      activeIcon: homePurpleIcon,
    },
    {
      id: "search",
      label: "Buscar trabajos",
      icon: searchIcon,
      activeIcon: searchPurpleIcon,
    },
    {
      id: "saved",
      label: "Mis guardados",
      icon: bookmarkIcon,
      activeIcon: bookmarkPurpleIcon,
    },
    {
      id: "profile",
      label: "Mi perfil",
      icon: personIcon,
      activeIcon: personPurpleIcon,
    },
  ];

  const employerMenu: MenuItem[] = [
    {
      id: "home",
      label: "Inicio",
      icon: homeIcon,
      activeIcon: homePurpleIcon,
    },
    {
      id: "createJob",
      label: "Publicar oferta",
      icon: plusSquareIcon,
      activeIcon: plusSquarePurpleIcon,
    },
    {
      id: "myJobs",
      label: "Mis ofertas",
      icon: bookmarkIcon,
      activeIcon: bookmarkPurpleIcon,
    },
    {
      id: "profile",
      label: "Mi perfil",
      icon: personIcon,
      activeIcon: personPurpleIcon,
    },
  ];

  const menu = userType === "jobSeeker" ? seekerMenu : employerMenu;

  return (
    <aside className="w-64 min-h-screen border-r border-gray-200 bg-white flex flex-col justify-between px-8 py-8">
      <div>
        <div className="mb-16">
          <img
            src={logoJobConnect}
            alt="Logo Job Connect"
            className="w-24 h-auto"
          />
        </div>

        <nav className="space-y-6">
          {menu.map((item) => {
            const isActive = activeView === item.id;

            return (
              <button
                key={item.id}
                onClick={() => onChangeView(item.id)}
                className={`w-full flex items-center gap-3 text-left text-sm transition ${
                  isActive ? "text-[#6246D9] font-bold" : "text-gray-700"
                }`}
              >
                <img
                  src={isActive ? item.activeIcon : item.icon}
                  alt={item.label}
                  className="w-5 h-5 object-contain"
                />

                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      <button
        onClick={onLogout}
        className="group flex items-center gap-3 text-sm text-gray-700 hover:text-[#6246D9]"
      >
        <img
          src={signOutIcon}
          alt="Cerrar sesión"
          className="w-5 h-5 object-contain group-hover:hidden"
        />

        <img
          src={signOutPurpleIcon}
          alt="Cerrar sesión"
          className="w-5 h-5 object-contain hidden group-hover:block"
        />

        <span>Cerrar sesión</span>
      </button>
    </aside>
  );
}

export default Sidebar;