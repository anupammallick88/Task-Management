import React, { useEffect } from "react";
import Authenticated from "@/Layouts/Authenticated";
import ProjectPanel from "./subcontainer/Project/ProjectPanel.jsx";
import LearningPanel from "./subcontainer/Learning/LearningPanel.jsx";
import DailyReportPanel from "./subcontainer/DailyReport/DailyReport.jsx";
import SideBar from "./Sidebar/UserSideBar.jsx";

export default function Dashboard(props) {
    useEffect(() => {
        document.getElementById("Project").style.display = "block";
    });
    return (
        <Authenticated auth={props.auth} errors={props.errors}>
            <SideBar />
            <div className="workpanel">
                <div id="Project" className="tabcontent">
                    <ProjectPanel auth={props.auth} />
                </div>

                <div id="Learning" className="tabcontent">
                    <LearningPanel auth={props.auth} />
                </div>

                <div id="Daily" className="tabcontent">
                    <DailyReportPanel auth={props.auth} />
                </div>
            </div>
        </Authenticated>
    );
}
