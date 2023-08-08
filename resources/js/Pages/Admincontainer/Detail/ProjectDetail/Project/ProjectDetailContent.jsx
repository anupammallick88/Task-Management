import React, { useEffect, useState } from "react";

const ProjectDetailContent = (props) => {
    const { project } = props;

    var progressbar = project.progress+"%";

    return (
        <div>
            <div id="title">{project.name}</div>

            <div className="form-inline">
                <div>
                    <label>Client Name</label>
                    <div></div>
                    <p>{project.client_name}</p>
                </div>
                <div>
                    <label>Budget</label>
                    <div>
                        <p>{project.budget}</p>
                    </div>
                </div>
                <div>
                    <label>Payment method</label>
                    <div>
                        <p>{project.type}</p>
                    </div>
                </div>
                <div>
                    <label>Deadline</label>
                    <div>
                        <p>{project.deadline}</p>
                    </div>
                </div>
            </div>
            <div className="form-inline">
                <div>
                    <label>Platform</label>
                    <div>
                        <p>{project.platform}</p>
                    </div>
                </div>
                <div>
                    <label>Partner</label>
                    <div>
                        <p>{project.partner && project.partner}</p>
                    </div>
                </div>
                <div>
                    <label>State</label>
                    <div>
                        <p>{project.state}</p>
                    </div>
                </div>
            </div>
            <div className="progress">
                <div
                    className="progressbar"
                    style={{ width: progressbar }}
                ></div>
            </div>
            <div>
                <textarea readOnly value={project.description} />
            </div>
        </div>
    );
};

export default ProjectDetailContent;
