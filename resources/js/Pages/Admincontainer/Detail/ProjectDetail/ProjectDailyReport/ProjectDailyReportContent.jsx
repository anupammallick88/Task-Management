import React, { useState, useEffect } from "react";
import axios from "axios";

const ProjectDailyReportContent = (props) => {
    const {projectdailyreport} = props;

    return (
        <div>
            <div>
                {projectdailyreport.name}
            </div>
            <div>
                {projectdailyreport.post}
            </div>
            <div>
                {projectdailyreport.progress}
            </div>
        </div>
    );
}

export default ProjectDailyReportContent