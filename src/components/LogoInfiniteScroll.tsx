import partners from "../data/partners";

const LogoInfiniteScroll = () => {
  return (
    <div
      className="m-auto w-full relative overflow-hidden bg-white flex flex-col gap-y-5 grayscale
      [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
    >
      <div className="flex overflow-hidden gap-x-20 group">
        <div className="animate-loop-scroll flex gap-x-20 group-hover:paused">
          {partners.map((partner, index) => (
            <div
              className="flex w-[90px] sm:w-[100px] items-center justify-center"
              key={index}
            >
              <img src={partner.url} alt={partner.alt} className="w-[90px]" />
            </div>
          ))}
        </div>
        <div
          className="animate-loop-scroll flex gap-x-20 group-hover:paused"
          aria-hidden
        >
          {partners.map((partner, index) => (
            <div
              className="flex w-[90px] sm:w-[100px] items-center justify-center"
              key={index}
            >
              <img src={partner.url} alt={partner.alt} className="w-[90px]" />
            </div>
          ))}
        </div>
      </div>

      <div className="flex overflow-hidden gap-x-20 hover:paused group sm:hidden">
        <div className="animate-loop-scroll-reverse flex gap-x-20 group-hover:paused">
          {partners
            .map((partner, index) => (
              <div
                className="flex w-[90px] sm:w-[100px] items-center justify-center"
                key={index}
              >
                <img src={partner.url} alt={partner.alt} className="w-[90px]" />
              </div>
            ))
            .reverse()}
        </div>
        <div
          className="animate-loop-scroll-reverse flex gap-x-20 group-hover:paused"
          aria-hidden
        >
          {partners
            .map((partner, index) => (
              <div
                className="flex w-[90px] sm:w-[100px] items-center justify-center"
                key={index}
              >
                <img src={partner.url} alt={partner.alt} className="w-[90px]" />
              </div>
            ))
            .reverse()}
        </div>
      </div>
    </div>
  );
};

export default LogoInfiniteScroll;
