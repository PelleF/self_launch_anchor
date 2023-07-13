/*!

=========================================================
* Paper Kit React - v1.3.1
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

// index sections
import SectionAbout from "views/index-sections/SectionAbout.js";
import {isMobile} from 'react-device-detect';




function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });

  if (isMobile) {
    return (
        <>
          <IndexNavbar />
          <IndexHeader />
          <div className="main">
            <SectionAbout />
            <DemoFooter />
          </div>
        </>
    );
  }

  return (
    <>
      <IndexNavbar />
      <IndexHeader />
      <div className="main">
        <SectionAbout />
        <DemoFooter />
      </div>
    </>
  );
}

export default Index;
