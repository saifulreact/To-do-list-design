import React, { useEffect } from "react";
import "./ToDo.css";
import { MdCheckBoxOutlineBlank } from "react-icons/md";

const ToDo = () => {
  useEffect(() => {}, []);

  return (
    <>
      <section className="container">
        <div className="input">
          <input placeholder="Add your todo tasks" type="text" />
        </div>
        <div className="flex justify-center">
          <button className="btn">Add task</button>
        </div>
        <div className="tasks-div">
          <h3>
            Pending tasks to do <span>8/10</span>
          </h3>
          <div className="mb-20">
            <div className="tasks">
              <div className="flex gap-2">
                <span>
                  <MdCheckBoxOutlineBlank />
                </span>
                Doing workout
              </div>
            </div>
            <div className="tasks">
              <div className="flex gap-2">
                <span>
                  <MdCheckBoxOutlineBlank />
                </span>
                Study 
              </div>
            </div>
            <div className="tasks">
              <div className="flex gap-2">
                <span>
                  <MdCheckBoxOutlineBlank />
                </span>
                Tution
              </div>
            </div>
            <div className="tasks">
              <div className="flex gap-2">
                <span>
                  <MdCheckBoxOutlineBlank />
                </span>
                Class
              </div>
            </div>
            <div className="tasks">
              <div className="flex gap-2">
                <span>
                  <MdCheckBoxOutlineBlank />
                </span>
                Homework
              </div>
            </div>
            <div className="tasks">
              <div className="flex gap-2">
                <span>
                  <MdCheckBoxOutlineBlank />
                </span>
                Make recharge paper
              </div>
            </div>
            <div className="tasks">
              <div className="flex gap-2">
                <span>
                  <MdCheckBoxOutlineBlank />
                </span>
                Make a presentation
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ToDo;
