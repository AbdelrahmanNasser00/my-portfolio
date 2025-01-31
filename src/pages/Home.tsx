import LeftSide from "../components/LeftSide/LeftSide";
import RightSide from "../components/RightSide/RightSide";
import Switch from "../components/Switch";

const Home: React.FC = () => {
  return (
    <div className="relative ">
      <div className=" flex justify-end py-2 fixed w-[67%]">
        <Switch />
      </div>
      <div className="max-w-screen-xl lg:flex lg:flex-row px-6 md:px-12">
        <LeftSide />
        <RightSide />
      </div>
    </div>
  );
};

export default Home;
