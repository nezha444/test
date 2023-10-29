"use client"

import React, { createContext } from "react";

type STATE_PROPS = {
  name: string;
  setName: ((value: string) => void) | null;
  phone: string;
  setPhone: ((value: string) => void) | null;
  email: string;
  setEmail: ((value: string) => void) | null;
  handleClick: (() => void) | null
};

const INITIAL_STATE = {
  name: '',
  setName: null,
  phone: '',
  setPhone: null,
  email: '',
  setEmail: null,
  handleClick: null
};

export const Context = createContext<STATE_PROPS>(INITIAL_STATE);
