import React, { useCallback, useEffect, useMemo, useState } from "react"
import { initialState, ToastContext } from "./ToastContext"
import _ from "lodash"
const ToastProvider = (props) => {
  const { children } = props
  const [toastState, setToastState] = useState(initialState)

  const show = (config) => {
   
    const toast = {
      id: _.uniqueId(),
      type: config.type,  //types "success", "alert", "error"
      text: config.text,
      showClose: config.showClose, // true, false
    }
    setToastState([...toastState, toast])
  }

  const handleDeleteToast = useCallback(
    (id) => {
      const filter = toastState.filter((item) => item.id !== id)
      setToastState(filter)
    },
    [toastState, setToastState]
  )

  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (toastState[0]) {
        handleDeleteToast(toastState[toastState.length - 1].id)
      }
    }, 3500)
    return () => {
      clearTimeout(timeOut)
    }
  }, [toastState, handleDeleteToast])

  const contextValue = useMemo(
    () => ({
      show,
      toastState,
      handleDeleteToast,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [toastState]
  )
  return (
    <ToastContext.Provider value={contextValue}>
      {children}
    </ToastContext.Provider>
  )
}
export { ToastProvider }
