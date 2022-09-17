import Users from "screens/admin/users"
import Careers from "screens/admin/careers"
import Courses from "screens/admin/cuorses"
import Home from "screens/dashboard/home"

const routes = [
  {
    path: "/",
    name: "Inicio",
    element: Home,
  },
  {
    path: "/admin/users",
    name: "Usuarios",
    element: Users,
  },
  {
    path: "/admin/careers",
    name: "Carreras",
    element: Careers,
  },
  {
    path: "/admin/courses",
    name: "Cursos",
    element: Courses,
  },
]

export default routes
