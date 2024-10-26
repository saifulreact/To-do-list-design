import React from "react";
import "./Done.css";
import Lottie from "lottie-react";
import { IoCheckboxOutline } from "react-icons/io5";
import done from "../../../public/Animation/done.json";

const Done = () => {
  return (
    <>
      <section>
        <h1 className="heading">
          Great ! <span>You have done some of yours tasks</span>
        </h1>
        <div className="done-wrapper">
          <div className="done-content">
            <div className="done-animation">
              <Lottie animationData={done} className="done-lottie" />
            </div>
            <div className="done-tasks-container">
              <h3 className="done-title">
                Completed Tasks <span className="done-count">4</span>
              </h3>
              <div className="done-tasks-list">
                <div className="done-task" data-index="0">
                  <div className="flex items-center gap-2">
                    <IoCheckboxOutline className="done-icon" />
                    <span className="done-task-name">
                      Complete the Project
                    </span>
                  </div>
                  <span className="done-task-timestamp">
                    2024-10-25 10:30 AM
                  </span>
                </div>
                <div className="done-task" data-index="1">
                  <div className="flex items-center gap-2">
                    <IoCheckboxOutline className="done-icon" />
                    <span className="done-task-name">Do Assignment</span>
                  </div>
                  <span className="done-task-timestamp">
                    2024-10-24 02:00 PM
                  </span>
                </div>
                <div className="done-task" data-index="2">
                  <div className="flex items-center gap-2">
                    <IoCheckboxOutline className="done-icon" />
                    <span className="done-task-name">Client Meeting</span>
                  </div>
                  <span className="done-task-timestamp">
                    2024-10-23 05:00 PM
                  </span>
                </div>
                <div className="done-task" data-index="3">
                  <div className="flex items-center gap-2">
                    <IoCheckboxOutline className="done-icon" />
                    <span className="done-task-name">Code practice</span>
                  </div>
                  <span className="done-task-timestamp">
                    2024-10-22 08:00 PM
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Done;
