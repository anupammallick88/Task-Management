import React, { useEffect, useState } from "react";

const LearningDetailContent = (props) => {
    const { learning } = props;

    var progressbar = learning.progress + "%";

    return (
        <div>
            <div id="title">{learning.title}</div>

            <div className="form-inline">
                <div>
                    <label>Title</label>
                    <p>{learning.title}</p>
                </div>
                <div>
                    <label>Subject Title</label>
                    <p>{learning.subject_title}</p>
                </div>
                <div>
                    <label>Deadline</label>
                    <p>{learning.deadline}</p>
                </div>
                <div>
                    <label>Course</label>
                    <p>{learning.course}</p>
                </div>
            </div>
            <div className="progress">
                <div
                    className="progressbar"
                    style={{ width: progressbar }}
                ></div>
            </div>
            <textarea
                readOnly
                name="description"
                value={learning.description}
            />
        </div>
    );
};

export default LearningDetailContent;
