import Link from "next/link";
import HeadingPrimary from "../../headline/HeadingPrimary";


const AboutTeamCard = ({
  className: classname,
  imgSize,
}: {
  className?: string;
  imgSize?: string;
}) => {
  return (
    <div className=" w-full overflow-hidden flex justify-center items-center ">
      <div
        className={` ${classname} w-[405px] group p-6 flex justify-center bg-white rounded-xl `}
      >
        <div>
          <div
            className={`${imgSize} w-[357px] h-[360px] mb-3 bg-gray-200 rounded-xl relative overflow-hidden `}
          >
            {/* image */}
            <div className=" absolute right-4 group-hover:top-4 -top-10 transition-all ">
              <ul className=" flex justify-center items-center gap-2 ">
                <li className=" flex justify-center items-center size-10 rounded-full text-sm text-primaryColor font-bold bg-white ">
                  FB
                </li>
                <li className=" flex justify-center items-center size-10 rounded-full text-sm text-primaryColor font-bold bg-white ">
                  IG
                </li>
                <li className=" flex justify-center items-center size-10 rounded-full text-sm text-primaryColor font-bold bg-white ">
                  TW
                </li>
              </ul>
            </div>
          </div>
          <div>
            <HeadingPrimary className=" text-[28px] font-bold mb-[6px] ">
              Alice Johnam
            </HeadingPrimary>
            <Link className=" text-primaryColor " href={""}>
              {" "}
              CEO Founder{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTeamCard;