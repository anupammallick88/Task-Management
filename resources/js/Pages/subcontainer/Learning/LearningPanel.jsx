import React, { useEffect, useState } from "react";
import axios from "axios";
import AddLearning from "./LearningSubcomponent/AddLearning.jsx";
import LearningContent from "./LearningSubcomponent/LearningContent.jsx";
import Modal from "react-modal";

const LearningPanel = ({ auth }) => {
    // variables initial setting
    const [learnings, setLearnings] = useState(null);

    // Get Authenticated userid
    const userid = auth.user.id;

    // Get Learning data
    const fetchLearnings = async () => {
        await axios
            .get(`api/getLearning/${userid}`)
            .then(({ data }) => setLearnings(data.learning));
    };

    // Default call functions
    useEffect(() => {
        fetchLearnings();
    }, []);

    // Modal controller
    const [isOpen, setIsOpen] = useState(false);
    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    // Modal style
    const customStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            transform: "translate(-50%, -50%)",
            width: "50%",
        },
    };

    Modal.defaultStyles.overlay.backgroundColor = "#000000A0";

    return (
        <div>
            <div>
                {learnings &&
                    learnings.map((learning, index) => (
                        <div key={index}>
                            <LearningContent
                                learning={learning}
                                key={learning.id}
                                fetchLearnings={fetchLearnings}
                            />
                        </div>
                    ))}
            </div>
            <div>
                <button id="add" onClick={toggleModal}>
                    Add Learning
                </button>
                <Modal
                    isOpen={isOpen}
                    ariaHideApp={false}
                    onRequestClose={toggleModal}
                    style={customStyles}
                    contentLabel="Edit Learning Information"
                >
                    <AddLearning
                        auth={auth}
                        toggleModal={toggleModal}
                        fetchLearnings={fetchLearnings}
                    />
                </Modal>
            </div>
        </div>
    );
};

export default LearningPanel;
