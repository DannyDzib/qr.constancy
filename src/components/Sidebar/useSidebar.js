import AdminIcon from "assets/icons/admin.svg"
import ListOrderIcon from "assets/icons/list-order.svg"
import ListCheckIcon from "assets/icons/list-check.svg"
import ListIcon from "assets/icons/list.svg"
import TeacherIcon from "assets/icons/teacher.svg"
import StudentIcon from "assets/icons/student.svg"
import { useIntl } from "react-intl"

const useSidebar = () => {
  const { formatMessage: f } = useIntl()

  const sidebarItems = [
    {
      title: f({ id: "SIDEBAR_ADMINISTRATOR_TITLE" }),
      icon: AdminIcon,
      items: [
        {
          title: f({ id: "SIDEBAR_ADMINISTRATOR_DASHBOARD" }),
          icon: AdminIcon,
          subItems: [
            {
              title: f({ id: "SIDEBAR_ADMINISTRATOR_DASHBOARD_USERS" }),
              path: "/",
            },
            {
              title: f({ id: "SIDEBAR_ADMINISTRATOR_DASHBOARD_CAREERS" }),
              path: "/",
            },
            {
              title: f({ id: "SIDEBAR_ADMINISTRATOR_DASHBOARD_COURSES" }),
              path: "/",
            },
          ],
        },
      ],
    },
    {
      title: f({ id: "SIDEBAR_STUDENT_TITLE" }),
      gap: true,
      icon: StudentIcon,
      items: [
        {
          title: f({ id: "SIDEBAR_STUDENT_CURRENT_COURSES" }),
          icon: ListOrderIcon,
        },
        {
          title: f({ id: "SIDEBAR_STUDENT_OPEN_COURSES" }),
          icon: ListIcon,
        },
        {
          title: f({ id: "SIDEBAR_STUDENT_COMPLETED_COURSES" }),
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
          icon: ListOrderIcon,
        },
        {
          title: f({ id: "SIDEBAR_TEACHER_COMPLETED_COURSES" }),
          icon: ListCheckIcon,
        },
      ],
    },
  ]

  return { sidebarItems }
}

export default useSidebar
