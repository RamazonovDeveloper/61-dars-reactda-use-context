import React, { useState } from "react";

export default function useStore() {
  const user = {
    name: "John",
    age: 33,
    job: "Director",
  };
  const [theme, setTheme] = useState("light");
  const [isAuthhorized, setIsAuthhorized] = useState(true);

  return { user, theme, setTheme, isAuthhorized, setIsAuthhorized };
}
