import React, { useCallback, useEffect, useMemo, useState } from "react"
import { initialState, ToastContext } from "./ToastContext"
import _ from "lodash"
const ToastProvider = (props) => {
  const { children } = props
  const [toastState, setToastState] = useState(initialState)

  const handleToast = (config, type) => {
    const toast = {
      id: _.uniqueId(),
      type,
      text: config.text,
      showClose: config.showClose,
    }
    setToastState([...toastState, toast])
  }

  const success = {
    show: (config) => handleToast(config, "success"),
  }
  const alert = {
    show: (config) => handleToast(config, "alert"),
  }
  const error = {
    show: (config) => handleToast(config, "error"),
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
        handleDeleteToast(toastState[0].id)
      }
    }, 3500)
    return () => {
      console.log(toastState)
      clearTimeout(timeOut)
    }
  }, [toastState, handleDeleteToast])

  const contextValue = useMemo(
    () => ({
      success,
      alert,
      error,
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
