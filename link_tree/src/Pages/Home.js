import React from "react";
import Profile from "../Components/profile";
import Linker from "../Components/links";
import Share from "../Components/share";
import Socials from "../Components/socials";

const Home = () => {
  return (
    <div>
      <Share />
      <Profile />
      <Linker />
      <Socials />
    </div>
  );
}

export default Home
