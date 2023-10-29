"use client"

import { Context } from "@/context/context";
import React, { useContext } from "react";

type Props = {};

const Inputs = (props: Props) => {
  const { name, setName, phone, setPhone, email, setEmail, handleClick } =
    useContext(Context);
  return (
    <div className="flex flex-col gap-y-2 w-fit text-black">
      <input type="text" value={name} onChange={(e) => setName && setName(e.target.value)}/>
      <input type="text" value={phone} onChange={(e) => setPhone && setPhone(e.target.value)}/>
      <input type="email" value={email} onChange={(e) => setEmail && setEmail(e.target.value)}/>
      <button className="bg-white/50" onClick={() => handleClick && handleClick()}>Click</button>
    </div>
  );
};

export default Inputs;
