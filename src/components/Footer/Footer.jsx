import React, { useContext } from "react";
import { UserDataContext } from "../../context/Context";

function Footer() {
  const userPersonalData = useContext(UserDataContext);

  return (
    <div>
      This is Footer
      {userPersonalData?.name} {userPersonalData?.age}
    </div>
  );
}

export default Footer;
