import AdminIcon from "assets/icons/admin.svg"
import ListOrderIcon from "assets/icons/list-order.svg"
import ListCheckIcon from "assets/icons/list-check.svg"
import ListIcon from "assets/icons/list.svg"
import TeacherIcon from "assets/icons/teacher.svg"
import StudentIcon from "assets/icons/student.svg"
import { useIntl } from "react-intl"
import localstorage from "services/localstorage"
import { useLocation } from "react-router-dom"
import { paths } from "vars"
const useSidebar = () => {
  const { isAdmin } = localstorage.get("data")
  const { formatMessage: f } = useIntl()
  const { pathname } = useLocation()

  const sidebarAdmin = {
    title: f({ id: "SIDEBAR_ADMINISTRATOR_TITLE" }),
    icon: AdminIcon,
    items: [
      {
        title: f({ id: "SIDEBAR_ADMINISTRATOR_DASHBOARD" }),
        icon: AdminIcon,
        subItems: [
          {
            title: f({ id: "SIDEBAR_ADMINISTRATOR_DASHBOARD_USERS" }),
            path: paths.admin.users,
            isActive: paths?.admin?.users === pathname,
          },
          {
            title: f({ id: "SIDEBAR_ADMINISTRATOR_DASHBOARD_CAREERS" }),
            path: "/",
            isActive: false,
          },
          {
            title: f({ id: "SIDEBAR_ADMINISTRATOR_DASHBOARD_COURSES" }),
            path: "/",
            isActive: false,
          },
        ],
      },
    ],
  }

  const sidebarItems = [
    {
      title: f({ id: "SIDEBAR_STUDENT_TITLE" }),
      gap: true,
      icon: StudentIcon,
      items: [
        {
          title: f({ id: "SIDEBAR_STUDENT_CURRENT_COURSES" }),
          icon: ListOrderIcon,
          isActive: false,
        },
        {
          title: f({ id: "SIDEBAR_STUDENT_OPEN_COURSES" }),
          isActive: false,
          icon: ListIcon,
        },
        {
          title: f({ id: "SIDEBAR_STUDENT_COMPLETED_COURSES" }),
          isActive: false,
          icon: ListCheckIcon,
        },
      ],
    },
    {
      title: f({ id: "SIDEBAR_TEACHER_TITLE" }),
      gap: true,
      icon: TeacherIcon,
      items: [
        {
          title: f({ id: "SIDEBAR_TEACHER_CURRENT_COURSES" }),
          isActive: false,
          icon: ListOrderIcon,
        },
        {
          title: f({ id: "SIDEBAR_TEACHER_COMPLETED_COURSES" }),
          isActive: false,
          icon: ListCheckIcon,
        },
      ],
    },
  ]

  return {
    sidebarItems: isAdmin ? [sidebarAdmin, ...sidebarItems] : sidebarItems,
  }
}

export default useSidebar
