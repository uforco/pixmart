import Pentablet from "./Pentablet";
import Presentation from "./Presentation";
import Socialmedia from "./Socialmedia";
import Textui from "./Textui";
import Uidesign from "./Uidesign";

const ServiceIcon = () => {
  return (
    <div className=" flex justify-between items-center my-[120px] ">
      <div className=" hoverChangeimg w-[224px] h-[274px] group  ">
        <div className=" imgcontainer size-[224px] flex justify-center items-center overflow-hidden rounded-2xl group-hover:bg-primaryColor transition-all  ">
          <Uidesign></Uidesign>
        </div>
        <h2 className=" text-center mt-5 font-bold ">UI Kits</h2>
      </div>

      <div className=" hoverChangeimg w-[224px] h-[274px] group  ">
        <div className=" imgcontainer size-[224px] flex justify-center items-center overflow-hidden rounded-2xl group-hover:bg-primaryColor transition-all  ">
          <Socialmedia></Socialmedia>
        </div>
        <h2 className=" text-center mt-5 font-bold ">Social Media</h2>
      </div>

      <div className=" hoverChangeimg w-[224px] h-[274px] group  ">
        <div className=" imgcontainer size-[224px] flex justify-center items-center overflow-hidden rounded-2xl group-hover:bg-primaryColor transition-all  ">
          <Presentation></Presentation>
        </div>
        <h2 className=" text-center mt-5 font-bold ">Presentation</h2>
      </div>

      <div className=" hoverChangeimg w-[224px] h-[274px] group  ">
        <div className=" imgcontainer size-[224px] flex justify-center items-center overflow-hidden rounded-2xl group-hover:bg-primaryColor transition-all  ">
          <Textui></Textui>
        </div>
        <h2 className=" text-center mt-5 font-bold ">Fonts</h2>
      </div>

      <div className=" hoverChangeimg w-[224px] h-[274px] group  ">
        <div className=" imgcontainer size-[224px] flex justify-center items-center overflow-hidden rounded-2xl group-hover:bg-primaryColor transition-all  ">
          <Pentablet></Pentablet>
        </div>
        <h2 className=" text-center mt-5 font-bold ">Illustrations</h2>
      </div>

    </div>
  );
};

export default ServiceIcon;
