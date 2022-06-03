import { useParams } from "react-router-dom";

const Admin = () => {
    const params = useParams()
    console.log(params)
    return (<div>
        Admin
    </div>);
}

export default Admin;