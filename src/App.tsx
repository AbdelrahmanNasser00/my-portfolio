import "./App.css";
import Home from "./pages/Home";
import CloudsBackground from "./components/CloudsBackground";

function App() {
  // const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // useEffect(() => {
  //   const handleMouseMove = (e: MouseEvent) => {
  //     setCursorPosition({ x: e.clientX, y: e.clientY });
  //   };
  //   window.addEventListener("mousemove", handleMouseMove);
  //   return () => {
  //     window.removeEventListener("mousemove", handleMouseMove);
  //   };
  // }, []);

  return (
    // <div className="relative bg-custom-gradient  min-h-screen flex justify-center">

    //   {/* <div
    //     className="pointer-events-none fixed inset-0 z-30 transition duration-300"
    //     style={{
    //       background: `radial-gradient(600px at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
    //     }}></div> */}

    //   <Home />
    // </div>
    <CloudsBackground>
      <Home />
    </CloudsBackground>
  );
}

export default App;
