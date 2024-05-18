import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="">
      <section className="">
        <section className="flex">
          <section className="w-full bg-[#1F2937]">
            <h3 className="text-center text-2xl font-medium leading-[normal] text-white [font-family:Inter]">
              CONTACT US
            </h3>
            <p className="text-center text-base font-medium leading-9 text-white [font-family:Inter]">
              123 ABS Street, Uni 21, Bangladesh
            </p>
            <p className="text-center text-base font-medium leading-9 text-white [font-family:Inter]">
              +88 123456789
            </p>
            <p className="text-center text-base font-medium leading-9 text-white [font-family:Inter]">
              Mon - Fri: 08:00 - 22:00
            </p>
            <p className="text-center text-base font-medium leading-9 text-white [font-family:Inter]">
              Sat - Sun: 10:00 - 23:00
            </p>
          </section>
          <section className="w-full bg-[#111827]">
            <h3 className="text-center text-[32px] font-medium leading-[normal] text-white [font-family:Inter]">
              Follow US
            </h3>
            <p className="text-center text-base font-medium leading-9 text-white [font-family:Inter]">
              Join us on social media
            </p>
            <section className="flex justify-center gap-x-6 text-2xl text-white">
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />
            </section>
          </section>
        </section>
        <section className="py-4 text-center text-base font-medium leading-9 text-white [background:var(--Dark-01,#151515)] [font-family:Inter]">
          Copyright © CulinaryCloud. All rights reserved.
        </section>
      </section>
    </section>
  );
};

export default Footer;
