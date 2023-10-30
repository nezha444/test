import React from "react"
import Image from "next/image"
import Link from "next/link"

import computerImg from "../../public/images/mobile/computer.png"
import spiralImg from "../../public/images/mobile/spiral.png"
import screwImg from "../../public/images/mobile/screw.png"
import screwDesktopImg from "../../public/images/desktop/screwDesktop.png"
import linesImg from "../../public/images/mobile/lines.png"
import linesDesktopImg from "../../public/images/desktop/linesDesktop.png"
import vectorDesktopImg from "../../public/images/desktop/vectorDesktop.svg"

const Hero = () => {
  return (
    <section className="relative max-w-[375px] m-auto bg-group_182  ||| xl:min-w-[1100px]">
      <Image
        className="absolute top-[40px] right-[0px] object-contain ||| xl:right-[-40px]"
        alt=""
        src={spiralImg}
      />
      <Image className="absolute -z-[10]" alt="" src={linesDesktopImg} />
      <ul className="mb-[20px]">
        <li>
          <p className="text-white text-[42px] tracking-[1.05px] font-bigText ||| xl:text-[64px] xl:tracking-[1.6px] xl:mb-[-20px]">
            Створюємо
          </p>
        </li>
        <li className="-mt-3">
          <p className="text-white text-[42px] font-medium tracking-[1.05px] font-bigText ||| xl:text-[64px] xl:tracking-[1.6px] xl:mb-[-20px]">
            сайти
          </p>
        </li>
        <li className="-mt-3">
          <p className=" text-[42px] font-medium tracking-[1.05px] font-bigText text-transparent bg-gradient-to-b from-[#6311BE] to-[#D820B4] bg-clip-text ||| xl:text-[64px] xl:tracking-[1.6px]">
            під ключ
          </p>
        </li>
      </ul>
      <Image
        className="hidden xl:absolute xl:w-[900px] xl:left-[0px] xl:top-[-200px] xl:block -z-10"
        alt=""
        src={vectorDesktopImg}
      />

      <p className=" text-white text-[16px] flex flex-col mb-[78px] ||| xl:text-[18px] xl:w-[464px] xl:mb-[86px]">
        Індивідуальний підхід до розпобки сайту згідно з потребами замовника або на вибір шаблонів.{" "}
        <span className="">Зробимо все, щоб ви були задоволені.</span>
      </p>

      <ul className=" flex flex-row justify-between font-semibold mb-[44px] text-[16px] ||| xl:justify-start">
        <li className="flex justify-center items-center w-[165px] h-[50px] rounded-full bg-[#360AC1] ||| xl:mr-[20px] ">
          <button type="button">Зв’язатися</button>
          {/* <Link/> */}
        </li>
        <li className="flex justify-center items-center w-[200px] h-[50px] rounded-full border-solid border-[1px] ">
          <button type="button">Дізнатися більше</button>
          {/* <Link/> */}
        </li>
      </ul>
      <Image
        className="object-contain xl:w-[535px] xl:absolute xl:right-[40px] xl:top-[0px]"
        alt=""
        src={computerImg}
      />

      <ul className="flex flex-row justify-around items-center mt-[-50px] max-w-[373px] h-[105px] border-solid border-[1px] backdrop-blur-xl border-gray-600 rounded-2xl bg-[#ffffff10] transform -skew-x-6 ||| xl:min-w-[530px] xl:float-right xl:mr-[5px] xl:mt-[-110px]">
        <li className="flex flex-col justify-center items-center">
          <p className="italic text-[24px] font-semibold mb-[9px] ||| xl:text-[28px]">5+</p>
          <p className="text-[12px] font-medium ||| xl:text-[14px]">років у сфері</p>
        </li>
        <li className="flex flex-col justify-center items-center">
          <p className="italic text-[24px] font-semibold mb-[9px] ||| xl:text-[28px]">30+</p>
          <p className="text-[12px] font-medium ||| xl:text-[14px]">вдалих проектів</p>
        </li>
        <li className="flex flex-col justify-center items-center">
          <p className="italic text-[24px] font-semibold mb-[9px] ||| xl:text-[28px]">108+</p>
          <p className="text-[12px] font-medium ||| xl:text-[14px]">відгуків про нас</p>
        </li>
      </ul>

      <Image
        className="object-contain absolute top-[845px] right-[0px] ||| xl:hidden "
        alt=""
        src={screwImg}
      />
      <Image
        className="xl:object-contain xl:absolute xl:top-[600px] xl:right-[0px] hidden xl:block"
        alt=""
        src={screwDesktopImg}
      />

      <Image
        className="object-contain absolute top-[500px] -z-10 xl:hidden"
        alt=""
        src={linesImg}
      />
    </section>
  )
}

export default Hero
