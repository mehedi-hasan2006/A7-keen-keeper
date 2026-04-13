import Image from "next/image";
import Logo from "../../assets/logo-xl.png";
import { FaYoutube, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#234d3f] text-white pt-10 pb-4 px-6">
      <div className="max-w-5xl mx-auto text-center">
       

        <div className="flex justify-center">
          <Image src={Logo} alt="logo" loading="eager" />
        </div>

        <p className="text-gray-300  mx-auto mb-5 text-sm md:text-base mt-3">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        <p className="text-sm mb-4 text-gray-200 text-bold">Social Links</p>

        <div className="flex justify-center gap-4 mb-12">
          <div className="bg-white text-black p-3 rounded-full cursor-pointer hover:scale-110 transition">
            <FaYoutube size={18} />
          </div>
          <div className="bg-white text-black p-3 rounded-full cursor-pointer hover:scale-110 transition">
            <FaFacebookF size={18} />
          </div>
          <div className="bg-white text-black p-3 rounded-full cursor-pointer hover:scale-110 transition">
            <FaXTwitter size={18} />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-gray-300 text-sm gap-4 border-t border-gray-500/30 pt-6">
          <p>© 2026 KeenKeeper. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
