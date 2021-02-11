import React from "react";
import { useSelector } from "react-redux";

import { Form, Spinner } from "reactstrap";
import Post from "../Posts/Post/Post";
import Formm from "../Form/Form";
import Posts from "../Posts/Posts";
const Dashboard = () => {
  const user = useSelector((state) => state.authReducer.user);
  if (!user) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <Spinner
          style={{ width: "3rem", height: "3rem", color: "secondary" }}
          type="grow"
        />
      </div>
    );
  }

  return (
    <div>
      {/* <h1 className="mb-3 ml-4">
        {user.name} {user.lastName}
      </h1>
      <h5 className="mb-3 ml-4">{user.email} </h5> */}
      <div
        style={{
          width: "500px",
          justifyContent: "flex-start",
        }}
      >
        <Posts />
      </div>
      <div>
        <Formm />
      </div>
    </div>
  );
};

export default Dashboard;
