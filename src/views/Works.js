import React from "react";
import works from "../assets/constant/Work.json";
const Blog = () => {
  return (
    <div className="containerWorks">
      <div className="containerWorks-1">
        {works.map((work) => (
          <div className="work1">
              <h4> {work.workTitle}</h4>
            <span>
              {work.workDescription}
              
            </span>
            <p>stacks: {work.stacks}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Blog;
