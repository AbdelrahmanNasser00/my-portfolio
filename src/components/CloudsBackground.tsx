import React from "react";
import "../App.css";
import TopClouds from "./TopClouds";
import Footer from "./Footer";
interface CloudsBackgroundProps {
  children: React.ReactNode;
}

const CloudsBackground: React.FC<CloudsBackgroundProps> = ({ children }) => {
  return (
    <div className="relative  min-h-screen flex flex-col items-center justify-center">
      <div className="absolute inset-0 overflow-hidden bg-three">
        <div className="relative w-full  bg-custom-gradient flex flex-col justify-end items-center overflow-clip">
          <TopClouds />
        </div>
      </div>
      {children}
      <Footer />
      {/* <div className="relative w-full bg-custom-gradient flex flex-col justify-end items-center overflow-clip">
        <BottomClouds />
      </div> */}
    </div>
  );
};

export default CloudsBackground;
