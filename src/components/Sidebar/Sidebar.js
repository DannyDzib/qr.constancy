import { useState } from "react"
import XmarkIcon from "assets/icons/xmark.svg"
import BurgerIcon from "assets/icons/burger-bar.svg"
import UserIcon from "assets/icons/user.svg"
import AdminIcon from "assets/icons/admin.svg"
import ListOrderIcon from "assets/icons/list-order.svg"
import ListCheckIcon from "assets/icons/list-check.svg"
import ListIcon from "assets/icons/list.svg"
import LogoutImage from "assets/icons/logout.svg"
import TucanImage from "assets/images/tucan.png"

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false)

  const renderIcon = () => {
    if (showSidebar) {
      return (
        <button
          className="flex text-4xl text-white items-center cursor-pointer fixed left-[265px] top-3 z-50  text-white"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <img src={XmarkIcon} alt="close" className="w-[15px] " />
        </button>
      )
    }
    return (
      <button
        className="flex text-4xl text-white items-center cursor-pointer fixed left-10 top-3 z-50  text-white"
        onClick={() => setShowSidebar(!showSidebar)}
      >
        <img src={BurgerIcon} alt="burger-bar" className="w-[20px]" />
      </button>
    )
  }

  const routesLinks = [
    {
      title: "Dashboard",
      icon: AdminIcon,
      items: [
        { title: "Usuarios" },
        { title: "Carreras" },
        { title: "Cursos" },
      ],
    },
  ]

  return (
    <>
      {renderIcon()}
      <div
        className={`top-0 left-0 w-[300px] bg-gray-200 p-5  text-blue-900  fixed h-full z-40  ease-in-out duration-300 rounded-r-2xl  ${
          showSidebar ? "translate-x-0 " : "translate-x-[-300px]"
        }`}
      >
        <h1 className="text-2xl font-semibold italic  text-center">
          TecNM Cancun
        </h1>
        <div className="flex items-center	mt-2">
          <div className="border-2 border-white rounded-full bg-white w-[35px] p-1 radius ">
            <img className="object-cover" alt="user" src={UserIcon} />
          </div>
          <p className="text-sm ml-4 font-bold">Alejandro De La Cruz Perez</p>
        </div>
        <div className="border border-gray-300 mt-4" />
        <div className="pt-3">
          <p className="text-sm text-gray-500">Administrador</p>
          <div className="flex items-center mt-2">
            <img className="object-cover w-[20px]" alt="user" src={AdminIcon} />
            <p className="text-sm ml-4 font-semibold italic">Dashboard</p>
          </div>
          <ul>
            <li className="mt-1">
              <a className="text-sm ml-12" href="/">
                Usuarios
              </a>
            </li>
            <li className="mt-1">
              <a className="text-sm ml-12" href="/">
                Carreras
              </a>
            </li>
            <li className="mt-1">
              <a className="text-sm ml-12 " href="/">
                Cursos
              </a>
            </li>
          </ul>
        </div>
        <div className="border border-gray-300 mt-4" />
        <div className="pt-3">
          <p className="text-sm text-gray-500 ">Alumno</p>
          <ul>
            <li className="flex items-center mt-3">
              <img
                className="object-cover w-[20px]"
                alt="user"
                src={ListOrderIcon}
              />
              <a className="text-sm ml-4 font-semibold italic" href="/">
                Cursos Actuales
              </a>
            </li>
            <li className="flex items-center mt-3">
              <img
                className="object-cover w-[20px]"
                alt="user"
                src={ListIcon}
              />
              <a className="text-sm ml-4 font-semibold italic" href="/">
                Cursos Abiertos
              </a>
            </li>
            <li className="flex items-center mt-3">
              <img
                className="object-cover w-[20px]"
                alt="user"
                src={ListCheckIcon}
              />
              <a className="text-sm ml-4 font-semibold italic" href="/">
                Cursos Terminados
              </a>
            </li>
          </ul>
        </div>
        <div className="border border-gray-300 mt-4" />
        <div className="pt-3">
          <p className="text-sm text-gray-500 ">Docente</p>
          <ul>
            <li className="flex items-center mt-3">
              <img
                className="object-cover w-[20px]"
                alt="user"
                src={ListOrderIcon}
              />
              <a className="text-sm ml-4 font-semibold italic" href="/">
                Cursos Actuales
              </a>
            </li>
            <li className="flex items-center mt-3">
              <img
                className="object-cover w-[20px]"
                alt="user"
                src={ListCheckIcon}
              />
              <a className="text-sm ml-4 font-semibold italic" href="/">
                Cursos Terminados
              </a>
            </li>
          </ul>
        </div>
        <div class="absolute bottom-5 left-3 flex items-center justify-between w-full">
          <img className="object-cover w-[50px]" alt="user" src={TucanImage} />
          <div className="flex items-center mr-6">
            <p className="text-sm mr-1">Salir</p>
            <button className=" border-2 border-white rounded-full bg-white w-[35px] p-2 radius">
              <img
                className="object-cover "
                alt="user"
                src={LogoutImage}
              />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
