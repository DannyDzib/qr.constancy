import { Fragment, memo, useState } from "react"
import ControlIcon from "assets/icons/control.png"
import UserIcon from "assets/images/avatar.jpg"
import LogoutImage from "assets/icons/logout.svg"
import TucanImage from "assets/images/tucan.png"
import { Link } from "react-router-dom"
import useSidebar from "./useSidebar"
import { useIntl } from "react-intl"
import { useModal } from "components/Modal"
import { useAuth } from "hooks/useAuth"
import "./styles.css"
import { setLoading } from "redux/modules/common"
import { useDispatch } from "react-redux"

const Sidebar = () => {
  const { formatMessage: f } = useIntl()
  const [open, setOpen] = useState(true)
  const { sidebarItems } = useSidebar()
  const { handleOpenModal, handleCloseModal } = useModal()
  const { onLogout } = useAuth()
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(setLoading(true))
    handleCloseModal()
    setTimeout(() => {
      dispatch(setLoading(false))
      onLogout()
    }, 1500)
  }

  const handleModalLogout = () => {
    handleOpenModal({
      title: "¿Seguro desea salir?",
      body: (
        <div className="flex justify-around mt-4 w-[100%] text-xs">
            <button
            className="w-[90px] bg-white hover:bg-blue-900 text-blue-900 hover:text-white font-bold py-2 px-4 border border-blue-900 rounded"
            onClick={handleCloseModal}
          >
            Cancelar
          </button>
          <button
            className="w-[90px] bg-blue-900 hover:bg-white text-white font-semibold hover:text-blue-900 py-2 px-4 border border-blue-900  rounded"
            onClick={handleLogout}
          >
            Aceptar
          </button>
        </div>
      ),
      configProps: {
        showClose: false,
        scroll: "body",
        titleAlign: "center",
        width: "xs",
        showDividerHeader: false,
      },
    })
  }
  const renderItem = (item, key) => (
    <div
      key={key}
      className={`${!open && "hidden"} ${
        key === 0 ? "mt-1 " : "mt-3"
      } origin-left  duration-200 items-start text-sm font-semibold italic flex`}
    >
      <img className=" w-[15px]" alt="user" src={item.icon} />
      <div className="mx-4 italic">
        {item?.subItems ? (
          <p>{item.title}</p>
        ) : (
          <Link to="/">{item.title}</Link>
        )}
        {item?.subItems &&
          item?.subItems?.map((subItem, i) => (
            <Link
              key={i}
              to={subItem.path}
              className={`mt-1 ml-4 font-light italic block`}
            >
              {subItem.title}
            </Link>
          ))}
      </div>
    </div>
  )

  const renderList = (menu, index) => (
    <Fragment key={index}>
      <li className={`flex text-xs ${open ? "ml-0" : "ml-2"}`}>
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
        className={`flex flex-col  rounded-md py-1  hover:bg-light-white text-sm items-start gap-x-4 
       ${index === 0 && "bg-light-white"} `}
      >
        {menu.items.map((item, key) => renderItem(item, key))}
      </li>
      {sidebarItems.length !== index + 1 && (
        <div className="border-b border-gray-300 my-4" />
      )}
    </Fragment>
  )

  return (
    <div
      className={`${
        open ? "w-72" : "w-20"
      } bg-gray-200 p-5 relative duration-300 overflow-y-auto overflow-x-hidden sidebar`}
    >
      <img
        src={ControlIcon}
        className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple border-2 rounded-full ${
          !open && "rotate-180"
        }`}
        onClick={() => setOpen(!open)}
        alt="sidebar open close"
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
          className={`text-center w-full origin-left font-bold italic text-xl duration-200 ${
            !open && "scale-0"
          }`}
        >
          {f({ id: "SIDEBAR_TITLE" })}
        </h1>
      </div>
      {!open && <div className="border-b-2 border-gray-300 mb-4 mt-2" />}
      <ul className="pt-1">
        <li
          className={`flex items-center text-sm ${
            open ? "justify-start" : "justify-center"
          }`}
        >
          <img
            className="object-cover border-2 border-white rounded-full w-[35px]"
            alt="user"
            src={UserIcon}
          />
          {open && (
            <p className="text-gray-500 mx-2">Alejandro de la cruz perez </p>
          )}
        </li>
        <div className="border-b border-gray-300 my-3" />
        {sidebarItems?.map((menu, index) => renderList(menu, index))}
        {!open && <div className="border-b border-gray-300 mt-4" />}
        <li
          className={`flex ${
            open ? "justify-end" : "justify-center"
          }  mt-4 static bottom-5 right-5 lg:absolute lg:block `}
        >
          <button
            className=" border-2 border-white rounded-full bg-white w-[35px] p-2 radius rotate-180"
            onClick={handleModalLogout}
          >
            <img className="object-cover " alt="logout" src={LogoutImage} />
          </button>
        </li>
      </ul>
    </div>
  )
}

export default memo(Sidebar)
