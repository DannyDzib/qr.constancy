import Admin from "screens/Admin"
import Home from "screens/Home"

const routes = [
    {
        path: "/",
        name: "Inicio",
        element: Home
    },
    {
        path: "/admin/:type",
        name: "Admin",
        element: Admin
    },
]

export default routes