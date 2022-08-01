import React from "react"
import { useModal } from "./useModal"
import "./style.css"
const Modal = () => {
  const { modalState, handleCloseModal } = useModal()
  const { show, title, body, configProps = {} } = modalState
  const {
    maxWidth = false,
    width = "xs",
    className = "",
    titleAlign = "left",
    showClose = true,
    showDividerHeader = false,
  } = configProps

  const widthContent = {
    xs: "w-[300px]",
    sm: "w-[500px]",
    md: "w-[800px]",
    lg: "w-[1000px]",
    xl: "w-[1200px]",
    full: "w-full",
  }

  return (
    show && (
      <div className="bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0 z-50">
        <div
          className={`scroll-modal bg-white rounded-md  relative max-h-full overflow-auto scroll-ml-6 ${widthContent[width]} ${className}`}
        >
          {showClose && (
            <p
              className={`text-md cursor-pointer text-gray-800 dark:text-gray-400 absolute top-[10px] right-3 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800`}
              onClick={handleCloseModal}
            >
              &#10006;
            </p>
          )}
          {title && <h1 className={`text-md font-bold mx-4 mt-4 text-${titleAlign}`}>{title}</h1>}
          {showDividerHeader && (
            <div className="border-b-2 border-gray-200 my-2" />
          )}
          <div className="px-5 pb-5">{body}</div>
        </div>
      </div>
    )
  )
}

export { Modal }
