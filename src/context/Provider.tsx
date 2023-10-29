"use client"

import React, { useState } from "react";
import { Context } from "./context";

type Props = {
  children: JSX.Element;
};

const Provider = ({ children }: Props) => {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleClick = () => {
    console.log(name)
    console.log(phone)
    console.log(email)
  }

  const payload = {
    name,
    setName,
    phone,
    setPhone,
    email,
    setEmail,
    handleClick
  };

  return <Context.Provider value={payload}>{children}</Context.Provider>;
};
export default Provider;
