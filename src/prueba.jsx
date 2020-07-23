import React, { useRef } from "react";
import { useEffect } from "react";
import Footer from "./components/footer";

const Prueba = (props) => {
  useEffect(() => {
    const pos = sessionStorage.getItem(`${props.match.path}`);
    if (pos) document.body.scrollTo(0, pos);
    window.addEventListener("beforeunload", () => {
      sessionStorage.setItem(`${props.match.path}`, document.body.scrollTop);
    });
  }, []);

  // useEffect(() => {
  //   window.addEventListener("beforeunload", () => {
  //     sessionStorage.setItem(`${props.match.path}`, document.body.scrollTop);
  //   });
  // }, []);

  return (
    <>
      <div style={{ height: "3000px", background: "aqua" }}>vaya</div>
      <button>clic</button>
      <Footer />
    </>
  );
};

export default Prueba;
