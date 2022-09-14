import * as React from "react"
import { Navigate, useLocation } from "react-router-dom"
import { useAuth } from "hooks/useAuth"
import Layout from "components/Layout"

const AuthGuard = ({ component: Component }) => {
  const location = useLocation()
  const { isAuth } = useAuth()
  return isAuth ? (
    <Layout>
      <Component />
    </Layout>
  ) : (
    <Navigate to="/login" replace state={{ path: location.pathname }} />
  )
}

export default AuthGuard
