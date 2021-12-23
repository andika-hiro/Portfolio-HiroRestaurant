import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <div className="footer">
      <div className="footer1" id="contact">
        <div className="subfooter1">
          <h1>logo</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita repudiandae neque illum aspernatur fugiat maiores id magni, modi, quaerat vitae. Consectetur</p>
        </div>
        <div className="subfooter2">
          <h1>Contact</h1>
          <p>Call: +76 (094) 754 43 7I</p>
          <p>Timing: Everyday from 10am - 11pm</p>
          <p>Address: 817 N California Ave Chicago, IL 60622</p>
        </div>
        <div className="subfooter3">
          <h1>Subscribe</h1>
          <input type="email" name="email" id="email" placeholder="Email" />
          <button>Subscribe</button>
        </div>
      </div>
      <div className="footer2">
        <p>
          Copyright &#169; 2021 Cafe | All Rights Reserved | Theme Designed by{" "}
          <Link href="https://www.youtube.com/channel/UCYMEEnLzGGGIpQQ3Nu_sBsQ" passHref>
            SA7MAN
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Footer;
