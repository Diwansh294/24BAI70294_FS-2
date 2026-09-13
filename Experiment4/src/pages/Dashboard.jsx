import {Link, Outlet} from "react-router-dom";

function Dashboard(){
    return(
        <>
            <h1>Dashboard</h1>
            <Link to="/dashboard/profile">My Profile</Link>
            <Link to="/dashboard/setting">Settings</Link>
            <Outlet/>
        </>
    );
}

export default Dashboard;