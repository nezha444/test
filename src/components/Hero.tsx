import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="max-w-[375px] m-auto">
      <ul>
        <li><p className="text-white text-[42px] tracking-[1.05px] font-bigText">Створюємо</p></li>
        <li><p className="text-white text-[42px] font-medium tracking-[1.05px]">сайти</p></li>
        <li><p className=" text-[42px] font-medium tracking-[1.05px]">під ключ</p></li>
      </ul>
      <p>
        Індивідуальний підхід до розпобки сайту згідно з потребами замовника або
        на вибір шаблонів. Зробимо все, щоб ви були задоволені.
      </p>
      <ul>
        <li>
          <button type="button">Зв’язатися</button>
        </li>
        <li>
          <button type="button">Дізнатися більше</button>
        </li>
      </ul>
      {/* <Image width={} height={} alt='' src={}/> */}
      
    </section>
  );
};

export default Hero;
