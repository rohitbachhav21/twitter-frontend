import React from "react";

import "./TwitterBlue.css";

const TwitterBlue = () => {
  return (
    <div>
      <div
        className="card-deck"
        style={{ background: "white", borderRadius: "3rem" }}
      >
        <div className="card  " style={{ backgroundColor: "white" }}>
          <div className="card-header" style={{ backgroundColor: "white" }}>
            <h5 className="card-title">Free Plan</h5>
          </div>
          <div className="card-body">
            <ul className="list-group list-group-flush">
              <li
                className="list-group-item"
                style={{ backgroundColor: "grey", color: "white" }}
              >
                1 tweet/day
              </li>
            </ul>
            <div
              className="card-footer "
              style={{ backgroundColor: "grey", color: "white" }}
            >
              ₹0/month
            </div>
            <div
              style={{
                backgroundColor: "blue ",
                borderRadius: "2rem",
                marginTop: "1.5rem",
                height: "3rem",
                cursor: "pointer",
                color: "white",
                paddingTop: ".7rem",
                fontWeight: "bold",
                outline: "none",
              }}
            >
              Free
            </div>
          </div>
        </div>

        <div
          className="card"
          style={{ backgroundColor: "white", color: "white" }}
        >
          <div className="card-header" style={{ backgroundColor: "white" }}>
            <h5 className="card-title" style={{ color: "black" }}>
              Silver Plan
            </h5>
          </div>
          <div className="card-body">
            <ul className="list-group list-group-flush">
              <li
                className="list-group-item"
                style={{ backgroundColor: "grey", color: "white" }}
              >
                5 tweets/day
              </li>
            </ul>
            <div
              className="card-footer text-muted"
              style={{ backgroundColor: "grey", color: "white" }}
            >
              ₹100/month
            </div>
            <div
              style={{
                backgroundColor: "#c0c0c0 ",
                borderRadius: "2rem",
                marginTop: "1.5rem",
                height: "3rem",
                cursor: "pointer",
                color: "white",
                paddingTop: ".7rem",
                fontWeight: "bold",
                outline: "none",
              }}
            >
              <a
                href="https://buy.stripe.com/test_cN201O9U48Pbf8A3cd"
                style={{ textDecoration: "none", color: "white" }}
              >
                SUBSCRIBE
              </a>
            </div>
          </div>
        </div>

        <div className="card" style={{ backgroundColor: "white" }}>
          <div className="card-header" style={{ backgroundColor: "white" }}>
            <h5 className="card-title">Gold Plan</h5>
          </div>
          <div className="card-body">
            <ul className="list-group list-group-flush">
              <li
                className="list-group-item"
                style={{ backgroundColor: "grey", color: "white" }}
              >
                Unlimited tweets
              </li>
            </ul>
            <div
              className="card-footer text-muted"
              style={{ backgroundColor: "grey", color: "white" }}
            >
              ₹1000/month
            </div>
            <div
              style={{
                backgroundColor: "gold ",
                borderRadius: "2rem",
                marginTop: "1.5rem",
                height: "3rem",
                cursor: "pointer",
                color: "white",
                paddingTop: ".7rem",
                fontWeight: "bold",
                outline: "none",
              }}
            >
              <a
                href="https://buy.stripe.com/test_eVaeWI6HS2qN7G85km"
                style={{ textDecoration: "none", color: "white" }}
              >
                SUBSCRIBE
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwitterBlue;
