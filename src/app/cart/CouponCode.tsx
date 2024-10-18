
import HeadingPrimary from '@/components/shared/headline/HeadingPrimary';


const CouponCode = ({ setfuncTotal }: { setfuncTotal: any }) => {

  let borcolor = "border-opionalColor";


  const getcouponcode = (e: any) => {
    // e.prevandDefualt()
    e.preventDefault();
    let promcode:any = e.target?.promoCouponCode;
    if (promcode?.value?.toLowerCase() === "sharif") {
      setfuncTotal((priValue: number) => priValue / 2);
      e.target.reset();
    } else {
      borcolor = "border-red-500";
    }
  };

  return (
    <>
      <form onSubmit={getcouponcode} className="max-w-md mx-auto">
        <div>
          <HeadingPrimary className="libreFranklin text-base ">
            Got any coupon code?
          </HeadingPrimary>
        </div>
        <div className="relative border rounded-lg p-1 h-16 mt-2 ">
          <input
            type="text"
            name="promoCouponCode"
            className={`block w-full libreFranklin p-2 ps-2 text-base  focus:outline-0  h-full ${borcolor}`}
            placeholder="Enter coupon code ..."
            // required
          />
          <button
            type="submit"
            className="text-primaryColor absolute uppercase font-bold p-1.5 end-1 top-1/2 -translate-y-1/2 libreFranklin text-base "
          >
            Apply
          </button>
        </div>
      </form>
    </>
  );
};

export default CouponCode;