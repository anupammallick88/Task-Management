import React, { useEffect, useState } from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import SideBar from "./Sidebar/AdminSideBar";
import axios from "axios";

import ProjectDetailContent from "./ProjectDetail/Project/ProjectDetail.jsx";
import ProjectDailyReport from "./ProjectDetail/ProjectDailyReport/ProjectDailyReport.jsx";
import LearningDetailContent from "./LearningDetail/Learning/LearningDetail.jsx";
import LearningDailyReport from "./LearningDetail/LearningDailyReport/LearningDailyReport";

const Index = (props) => {
    const [userId, setUserId] = useState("1");
    // const [userData, setUserData] = useState([]);

    // const fetchUserData = async (userId) => {
    //     await axios
    //         .get(`api/getUserData/${userId}`)
    //         .then((data)=>setUserData(data.data.userdata));
    // }

    // useEffect (() => {
    //     fetchUserData(userId);
    // });

    return (
        <div>
            <SideBar userId={userId} setUserId={setUserId} />
            <div id="AdminDetailPanel" className="workpanel">
                <div id="projectDetail" className="adminlist">
                    <div id="projectlist" className="adminlisttop">
                        <ProjectDetailContent userId = {userId} />
                    </div>
                    <div id="projectdailyreport" className="adminlistbottom">
                        <ProjectDailyReport userId = {userId} />
                    </div>
                </div>
                <div id="learningDetail" className="adminlist">
                    <div id="learninglist" className="adminlisttop">
                        <LearningDetailContent userId = {userId} />
                    </div>
                    <div id="learningdailyreport" className="adminlistbottom">
                        <LearningDailyReport userId = {userId} />
                    </div>
                </div>
                <div id="otherDetail" className="adminlist">other</div>
            </div>
        </div>
    );
};
export default Index;
