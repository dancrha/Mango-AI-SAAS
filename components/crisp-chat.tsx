"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("78a59414-329b-4169-b7be-e114f405a82b");
  }, []);

  return null;
};

export default CrispChat;
