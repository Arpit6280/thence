import React from "react";

function Footer() {
  return (
    <div className="bg-[#F5F5F5]  h-24  mt-10 mb-6 mx-auto rounded-2xl">
      <div className="flex justify-between items-center mx-10 h-full">
        <section>
          <p>&copy; Talup 2023. All rights reserved</p>
        </section>
        <section>
          <span className=" underline decoration-1">Terms & Condition</span>
          <span className=" ml-10 underline decoration-1">Privacy Policy</span>
        </section>
      </div>
    </div>
  );
}

export default Footer;
