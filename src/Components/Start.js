import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { CiAlarmOn } from "react-icons/ci";

export const Start = () => {
  return (
    <div className="A">
      <div className="B">
        <div className="d1">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgcAFN3D0j48KEiZtXy9H8Z-brml1fSzLUAQ&usqp=CAU"
            alt="Loadng"
            srcset=""
          />
        </div>
        <div className="d2">
          <h1 className="m-3">Disillusioned, Cynical, or Hopeful?</h1>
          <h4 className="m-3">
            {" "}
            Disillusionment in ministry is inevitable, but its outcome is not.
            Where are you on the journey from idealism to enduring hope?{" "}
          </h4>
          <Link className="btn btn-danger mx-3" to="/">
            GET STARTED
          </Link>
          <CiAlarmOn style={{ height: "50px", widows: "40px" }} /> 3 Min
        </div>
      </div>
    </div>
  );
};
