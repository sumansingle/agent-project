import React from "react";
import Nvbr from "../component/Nvbr";
import Intropreslogn from "../component/imges/intro-pre-slogan.png";
function Header() {
  return (
    <>
      <Nvbr />
      <div>
        <img
          src={Intropreslogn}
          class="intro-pre-slogan"
          width="542"
          height="43"
          alt="We are best and creative agency"
        />
        <h1 class="intro-slogan">
          We turn creative ideas <br />
          into your business
        </h1>
        <p>
          Lorem ipsum dolor sit amet consec tetur adipi sicing elit. Sequi,
          <br />
          modi tenetur mollitia nam totam obcaecati.
        </p>

        <button class="btn btn-round btn-intro-pink">Our Story</button>
        <button class="btn btn-round btn-intro-purple">Read More</button>
      </div>
    </>
  );
}
export default Header;
