import axios from "axios";
import React, { useState } from "react";

const LearningDailyReportContent = (props) => {
    const { learningnow, userid } = props;
    const [postname, setPostName] = useState("");
    const [learningprogress, setLearningProgress] = useState(
        learningnow.progress
    );
    const [learningdailyreport, setLearningDailyReport] = useState("");

    const PostCheck_alert = async (id) => {
        var con = confirm("Do you Want To Post This Daily Report?");
        if (con == true) {
            await postDailyReport(id);
        }
    };

    const postDailyReport = async (id) => {
        const res = await axios({
            method: "POST",
            url: `/api/postLearningDailyReport/${id}`,
            data: {
                userid,
                postname,
                learningprogress,
                learningdailyreport,
            },
        });
    };

    return (
        <div>
            <div id="title">{learningnow.title}</div>
            <form>
                <div className="form-inline">
                    <div>
                        <label>Learning title</label>
                        <p>{learningnow.title}</p>
                    </div>
                    <div>
                        <label>Subject Title</label>
                        <p>{learningnow.subject_title}</p>
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
                            name="learningprogress"
                            value={learningprogress}
                            onChange={(e) =>
                                setLearningProgress(e.target.value)
                            }
                        />
                    </div>
                </div>
                <div>
                    {/* <label>Post text</label> */}
                    <textarea
                        type="string"
                        name="learningdailyreport"
                        value={learningdailyreport}
                        onChange={(e) => setLearningDailyReport(e.target.value)}
                        placeholder="Input learning daily report"
                    />
                </div>
                <button
                    type="button"
                    id="save"
                    onClick={() => PostCheck_alert(learningnow.id)}
                >
                    Post
                </button>
            </form>
        </div>
    );
};

export default LearningDailyReportContent;
