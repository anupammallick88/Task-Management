import React, { useState, useEffect } from "react";
import axios from "axios";

const LearningDailyReportContent = (props) => {
    const {learningdailyreport} = props;

    return (
        <div>
            <div>
                {learningdailyreport.name}
            </div>
            <div>
                {learningdailyreport.post}
            </div>
            <div>
                {learningdailyreport.progress}
            </div>
        </div>
    );
}

export default LearningDailyReportContent