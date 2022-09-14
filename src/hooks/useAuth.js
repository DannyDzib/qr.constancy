import { useEffect } from "react"
import { login, logout } from "redux/modules/auth"
import localstorage from "services/localstorage"
import { useDispatch, useSelector } from "react-redux"

export function useAuth() {
  const data = localstorage.get("data")
  const { isAuth } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    if (data?.token && data?.userName) {
      dispatch(login())
    } else {
      localstorage.clear()
      dispatch(logout())
    }
  }, [data])

  const onLogout = () => {
    localstorage.clear()
    dispatch(logout())
  }
  
  return {
    isAuth,
    onLogout,
  }
}
