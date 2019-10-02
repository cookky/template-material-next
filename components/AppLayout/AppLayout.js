import React from 'react';
import NavBar from "../App/NavBar";
import Footer from "../App/Footer";

const AppLayout = props => {
  return (
    <div>
      <NavBar/>
      {props.children}
      <Footer/>
    </div>
  );
};

export default AppLayout;