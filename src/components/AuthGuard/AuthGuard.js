import Layout from "components/Layout"
import * as React from "react"
import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom"

const AuthGuard = ({ component: Component }) => {
  const location = useLocation()
  const { isAuth } = useSelector((state) => state.auth)

  return isAuth ? (
    <Layout>
      <Component />
    </Layout>
  ) : (
    <Navigate to="/login" replace state={{ path: location.pathname }} />
  )
}

export default AuthGuard
