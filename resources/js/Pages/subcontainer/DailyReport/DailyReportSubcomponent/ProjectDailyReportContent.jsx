import axios from "axios";
import React, { useState } from "react";

const ProjectDailyReportContent = (props) => {
    const { projectnow, userid } = props;
    const [postname, setPostName] = useState("");
    const [projectprogress, setProjectProgress] = useState(projectnow.progress);
    const [projectdailyreport, setProjectDailyReport] = useState("");

    const PostCheck_alert = async (id) => {
        var con = confirm("Do you Want To Post This Daily Report?");
        if (con == true) {
            await postDailyReport(id);
        }
    };

    const postDailyReport = async (id) => {
        const res = await axios({
            method: "POST",
            url: `/api/postProjectDailyReport/${id}`,
            data: {
                userid,
                postname,
                projectprogress,
                projectdailyreport,
            },
        });
    };

    return (
        <div>
            <div id="title">{projectnow.name}</div>
            <form>
                <div className="form-inline">
                    <div>
                        <label>Project name</label>
                        <p>{projectnow.name}</p>
                    </div>
                    <div>
                        <label>Project deadline</label>
                        <p>{projectnow.deadline}</p>
                    </div>
                </div>
                <div className="form-inline">
                    <div>
                        <label>Postname</label>
                        <input
                            type="text"
                            name="postname"
                            value={postname}
                            onChange={(e) => setPostName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Progress</label>
                        <input
                            type="number"
                            name="projectprogress"
                            value={projectprogress}
                            onChange={(e) => setProjectProgress(e.target.value)}
                        />
                    </div>
                </div>
                <div>
                    {/* <label>Post text</label> */}
                    <textarea
                        type="string"
                        name="projectdailyreport"
                        value={projectdailyreport}
                        onChange={(e) => setProjectDailyReport(e.target.value)}
                        placeholder="Input project daily report"
                    />
                </div>
                <button
                    type="button"
                    id="save"
                    onClick={() => PostCheck_alert(projectnow.id)}
                >
                    Post
                </button>
            </form>
        </div>
    );
};

export default ProjectDailyReportContent;
