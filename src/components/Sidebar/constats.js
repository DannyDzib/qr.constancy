import AdminIcon from "assets/icons/admin.svg"
import ListOrderIcon from "assets/icons/list-order.svg"
import ListCheckIcon from "assets/icons/list-check.svg"
import ListIcon from "assets/icons/list.svg"
import TeacherIcon from "assets/icons/teacher.svg"
import StudentIcon from "assets/icons/student.svg"

export const sidebarItems = [
  {
    title: "Administrador",
    icon: AdminIcon,
    items: [
      {
        title: "Dashboard",
        icon: AdminIcon,
        subItems: [
          {
            title: " Ususarios",
            path: "/",
          },
          {
            title: " Carreras",
            path: "/",
          },
          {
            title: " Cursos",
            path: "/",
          },
        ],
      },
    ],
  },
  {
    title: "Alumno",
    gap: true,
    icon: StudentIcon,
    items: [
      {
        title: "Cursos Actuales",
        icon: ListOrderIcon,
      },
      {
        title: "Cursos Abiertos",
        icon: ListIcon,
      },
      {
        title: "Cursos Abiertos",
        icon: ListCheckIcon,
      },
    ],
  },
  {
    title: "Docente",
    gap: true,
    icon: TeacherIcon,
    items: [
      {
        title: "Cursos Actuales",
        icon: ListOrderIcon,
      },
      {
        title: "Cursos Abiertos",
        icon: ListCheckIcon,
      },
    ],
  },
]
