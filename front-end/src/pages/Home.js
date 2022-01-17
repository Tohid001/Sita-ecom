import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/layout/header/header elements/Header";
import Footer from "../components/layout/footer/Footer";
import "./home.css";

function Home() {
  return (
    <>
      <div class="parent">
        <div
          style={{
            position: "sticky",
            top: 0,
            // boxShadow: "0 2px 2px rgb(0 0 0 / 10%)",
          }}
        >
          <Header />
        </div>
        <p>hdhdhdhdhdhdhdhdh</p>
        <p>hdhdhdhdhdhdhdhdh</p>
        <p>hdhdhdhdhdhdhdhdh</p>
        <p>hdhdhdhdhdhdhdhdh</p>
        <p>hdhdhdhdhdhdhdhdh</p>
        <p>hdhdhdhdhdhdhdhdh</p>
        <p>hdhdhdhdhdhdhdhdh</p>
        <p>hdhdhdhdhdhdhdhdh</p>
        <p>hdhdhdhdhdhdhdhdh</p>
        <p>hdhdhdhdhdhdhdhdh</p>
        <p>hdhdhdhdhdhdhdhdh</p>
        <p>hdhdhdhdhdhdhdhdh</p>
        <p>hdhdhdhdhdhdhdhdh</p>
        <p>hdhdhdhdhdhdhdhdh</p>
        <p>hdhdhdhdhdhdhdhdh</p>
        <p>hdhdhdhdhdhdhdhdh</p>
        <p>hdhdhdhdhdhdhdhdh</p>
        <p>hdhdhdhdhdhdhdhdh</p>
        <p>hdhdhdhdhdhdhdhdh</p>
        <p>hdhdhdhdhdhdhdhdh</p>
        <p>hdhdhdhdhdhdhdhdh</p>
        <p>hdhdhdhdhdhdhdhdh</p>
        <p>hdhdhdhdhdhdhdhdh</p>
        <p>hdhdhdhdhdhdhdhdh</p>
        <p>hdhdhdhdhdhdhdhdh</p>
        <p>hdhdhdhdhdhdhdhdh</p>
        <p>hdhdhdhdhdhdhdhdh</p>
        <p>hdhdhdhdhdhdhdhdh</p>
        <p>hdhdhdhdhdhdhdhdh</p>
        <p>hdhdhdhdhdhdhdhdh</p>
        <p>hdhdhdhdhdhdhdhdh</p>
        <p>hdhdhdhdhdhdhdhdh</p>
        <p>hdhdhdhdhdhdhdhdh</p>
        <p>hdhdhdhdhdhdhdhdh</p>
        <p>hdhdhdhdhdhdhdhdh</p>
        <p>hdhdhdhdhdhdhdhdh</p>
        <p>hdhdhdhdhdhdhdhdh</p>
        <p>hdhdhdhdhdhdhdhdh</p>
        <p>hdhdhdhdhdhdhdhdh</p>
        <p>hdhdhdhdhdhdhdhdh</p>
        <p>hdhdhdhdhdhdhdhdh</p>
        <p>hdhdhdhdhdhdhdhdh</p>
        <p>hdhdhdhdhdhdhdhdh</p>
        <p>hdhdhdhdhdhdhdhdh</p>
        <p>hdhdhdhdhdhdhdhdh</p>
        <p>hdhdhdhdhdhdhdhdh</p>
        <p>hdhdhdhdhdhdhdhdh</p>
        <p>hdhdhdhdhdhdhdhdh</p>
        <p>hdhdhdhdhdhdhdhdh</p>
        <p>hdhdhdhdhdhdhdhdh</p>
        <p>hdhdhdhdhdhdhdhdh</p>
        <p>hdhdhdhdhdhdhdhdh</p>
        <p>hdhdhdhdhdhdhdhdh</p>
        <p>hdhdhdhdhdhdhdhdh</p>
        <p>hdhdhdhdhdhdhdhdh</p>
        <p>hdhdhdhdhdhdhdhdh</p>
        <p>hdhdhdhdhdhdhdhdh</p>
        <p>hdhdhdhdhdhdhdhdh</p>
        <p>hdhdhdhdhdhdhdhdh</p>
        <p>hdhdhdhdhdhdhdhdh</p>
        <p>hdhdhdhdhdhdhdhdh</p>
        <p>OOOOOOOOOOOOOOOOOOOOOOOOOOOOoo</p>
        <Outlet />

        {/* <div
          style={{
            marginTop: "auto",
            // position: "sticky",
            // bottom: "61px",
            width: "100%",
          }}
        >
          
        </div> */}
        <Footer />
      </div>
    </>
  );
}

export default Home;
