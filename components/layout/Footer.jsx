import facebook from "@/public/Facebook.svg";
import linkedin from "@/public/Linkedin.svg";
import x from "@/public/X svg.svg";
import youtube from "@/public/YouTube.svg";
import logo from "@/public/athenia.svg";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {

  const { primary, secondary, footerBg} = process.env.themeColors;
  const logoUrl = process.env.logoUrl;


  return (
    <div className="    static bottom-0 left-0 right-0 pt-10">
      <footer style={{ background: footerBg  }} className="  h-full flex items-center  lg:h-[90px] ">
        <div className=" container flex flex-col items-center py-2 gap-6 flex-wrap lg:flex-nowrap lg:gap-x-[200px] md:flex-row">
          <Image src={logoUrl} alt="logo" width="102" height="90" />
          <div className=" flex items-center flex-col gap-4 md:flex-row">
            <ul className=" flex items-center flex-col gap-4 sm:flex-row">
              <li>
                <Link href={""} className=" text-sm font-public-sens font-bold">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href={""} className=" text-sm font-public-sens font-bold">
                  About Us
                </Link>
              </li>
              <li>
                <Link href={""} className=" text-sm font-public-sens font-bold">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href={""} className=" text-sm font-public-sens font-bold">
                  Contact Us
                </Link>
              </li>
            </ul>
            <ul className=" flex items-center gap-5">
              <li>
                <Link href={""}>
                  <Image src={youtube} alt="youtube/tarifalhasan" />{" "}
                </Link>
              </li>
              <li>
                <Link href={""}>
                  <Image src={linkedin} alt="youtube/tarifalhasan" />{" "}
                </Link>
              </li>
              <li>
                <Link href={""}>
                  <Image src={facebook} alt="youtube/tarifalhasan" />{" "}
                </Link>
              </li>
              <li>
                <Link href={""}>
                  <Image src={x} alt="youtube/tarifalhasan" />{" "}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
