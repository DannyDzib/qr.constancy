import { useState } from "react"
import ControlIcon from "assets/icons/control.png"
import UserIcon from "assets/images/avatar.jpg"
import LogoutImage from "assets/icons/logout.svg"
import TucanImage from "assets/images/tucan.png"
import { sidebarItems } from "./constats"
const Sidebar = () => {
  const [open, setOpen] = useState(true)

  return (
    <div
      className={` ${
        open ? "w-72" : "w-20 "
      } bg-gray-200 h-screen p-5   relative duration-300 text-blue-900 static`}
    >
      <img
        src={ControlIcon}
        className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
        onClick={() => setOpen(!open)}
        alt="icon"
      />
      <div className="flex items-center">
        {!open && (
          <img
            src={TucanImage}
            className={`cursor-pointer duration-500 w-[40px]`}
            alt="icon"
          />
        )}
        <h1
          className={` text-center	w-full origin-left font-bold italic text-xl duration-200 ${
            !open && "scale-0"
          }`}
        >
          TecNM Cancun
        </h1>
      </div>
      {!open && <div className="border-b-2 border-gray-300 mb-4 mt-2" />}
      <ul className="pt-1">
        <li
          className={` flex items-center text-sm   ${
            open ? "justify-start" : "justify-center"
          }`}
        >
          <img
            className="object-cover border-2 border-white rounded-full w-[35px]"
            alt="user"
            src={UserIcon}
          />
          {open && (
            <p className="text-gray-500 ml-2 ">Alejandro de la cruz perez </p>
          )}
        </li>
        {open && (
          <li className="flex justify-end underline-offset-1	mr-5">
            <a href="/" className="text-gray-500 text-sm flex items-center font-semibold ">
              <span>Salir</span>
              <div className=" rounded-full bg-white w-[28px] p-2 radius ml-1">
                <img
                  className=" rotate-180 w-full"
                  alt="logout"
                  src={LogoutImage}
                />
              </div>
            </a>
          </li>
        )}
        <div className="border-b-2 border-gray-300 mt-4" />
        {sidebarItems.map((menu, index) => (
          <>
            <li className={` flex text-sm mt-4 ${open ? "ml-0" : "ml-2"}`}>
              {!open && (
                <img
                  className="object-cover w-[25px] text-blue-900"
                  alt="user"
                  src={menu.icon}
                />
              )}
              <p className="text-gray-500 italic">{open && menu.title}</p>
            </li>
            <li
              key={index}
              className={`flex flex-col  rounded-md py-1  hover:bg-light-white text-sm items-start gap-x-4 
               ${index === 0 && "bg-light-white"} `}
            >
              {menu.items.map((item, key) => (
                <div
                  key={key}
                  className={`${!open && "hidden"} ${
                    key === 0 ? "mt-2 " : "mt-5"
                  } origin-left duration-200  text-sm font-semibold italic flex`}
                >
                  <img
                    className="object-cover w-[25px]"
                    alt="user"
                    fill="#000"
                    src={item.icon}
                  />
                  <div className="text-sm ml-4 font-semibold italic">
                    <p>{item.title}</p>
                  </div>
                </div>
              ))}
            </li>
            {sidebarItems.length !== index + 1 && (
              <div className="border-b-2 border-gray-300 mt-4" />
            )}
          </>
        ))}
        {!open && (
          <>
            <div className="border-b-2 border-gray-300 mt-4" />
            <li className="min-h-fit mt-4 flex items-center justify-end absolute bottom-5 right-6">
              <button className=" border-2 border-white rounded-full bg-white w-[35px] p-2 radius rotate-180">
                <img className="object-cover " alt="logout" src={LogoutImage} />
              </button>
            </li>
          </>
        )}
      </ul>
    </div>
  )
}

export default Sidebar
