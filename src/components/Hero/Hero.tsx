import curlyGirl from "../../assets/images/Curly-girl.webp";
import iconSprite from "../../assets/images/sprite.svg";
import { heroInfo } from "../../assets/heroInfo";

export const Hero = () => {
  return (
    <>
      <section className="flex gap-x-6 justify-center">
        <div className="bg-lightGray rounded-[30px] w-[720px] pl-16 py-[98px] pr-[108px]">
          <h1 className="text-xxl font-medium tracking-tight leading-[56px]">
            Unlock your potential with the best{" "}
            <span className="italic font-normal bg-lightYellow rounded-xl">
              language
            </span>{" "}
            tutors
          </h1>
          <p className="w-[460px] text-base mt-8 mb-16 leading-[22px] tracking-tight">
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </p>
          <a
            className="py-4 px-[88px] bg-darkYellow font-bold rounded-xl hover:scale-105 hover:shadow-3xl transition-transform duration-300 inline-flex"
            href="/teachers"
          >
            Get started
          </a>
        </div>
        <div className="relative bg-lightYellow rounded-[30px] px-[114px] pt-[80px] pb-[111px]">
          <img
            src={curlyGirl}
            alt="Pretty curly girl"
            width={300}
            height={300}
          />
          <div className="w-[360px] h-[200px] absolute bottom-0 left-[88px] bg-macBook rounded-t-md">
            <svg className="absolute w-[46px]] h-[56px] fill-lightYellow top-[66px] left-7">
              <use xlinkHref={`${iconSprite}#apple`} />
            </svg>
          </div>
        </div>
      </section>
      <div className="mt-6 mb-8 py-10 px-[122px] border border-darkYellow border-dashed rounded-3xl">
        <ul className="flex justify-center gap-x-24">
          {heroInfo.map(({ number, title }) => (
            <li className="flex gap-4 justify-center items-center" key={title}>
              <p className="font-medium text-xl leading-8 tracking-tight">
                {number}
              </p>
              <p className="font-normal text-sm w-24">{title}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
