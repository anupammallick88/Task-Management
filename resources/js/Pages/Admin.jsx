import React, { useEffect } from "react";
import AdminTab from "@/Layouts/AdminTab.jsx";
import AdminDashboard from "./Admincontainer/AdminDashboard.jsx";
import Detail from "./Admincontainer/Detail/Index.jsx";
import UserManagement from "./Admincontainer/UserManagement.jsx";

export default function Admin(props) {
    useEffect(() => {
        document.getElementById("Dashboard").style.display = "block";
    });
    return (
        <AdminTab auth={props.auth} errors={props.errors}>
            <div>
                <div id="Dashboard" className="tabcontent">
                    <AdminDashboard />
                </div>

                <div id="Detail" className="tabcontent">
                    <Detail />
                </div>

                <div id="UserManagement" className="tabcontent">
                    <UserManagement />
                </div>
            </div>
        </AdminTab>
    );
}
