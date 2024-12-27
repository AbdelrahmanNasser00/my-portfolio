import { useEffect, useState } from "react";
import "./App.css";
import LeftSide from "./components/home/LeftSide";
import RightSide from "./components/home/RightSide";
// import Home from "./pages/Home";

function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div className="relative bg-slate-900 min-h-screen flex justify-center">
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300"
        style={{
          background: `radial-gradient(600px at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        }}></div>

      <div className="max-w-screen-xl lg:flex lg:flex-row px-12">
        <LeftSide />
        <RightSide />
      </div>
    </div>
  );
}

export default App;
