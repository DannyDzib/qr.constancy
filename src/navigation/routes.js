import Users from "screens/Dashboard/Users"
import Home from "screens/Home"

const routes = [
  {
    path: "/",
    name: "Inicio",
    element: Home,
  },
  {
    path: "/users",
    name: "Usuarios",
    element: Users,
  },
]

export default routes
