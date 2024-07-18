import React from "react";
import { FaFacebook, FaInstagram, FaEnvelope } from "react-icons/fa";

const SocialLinks: React.FC = () => (
  <div className="flex flex-row gap-4 ">
    <a
      href="https://facebook.com"
      className="text-white hover:text-gray-400"
    >
      <FaFacebook className="w-6 h-6" />
    </a>
    <a
      href="https://instagram.com"
      className="text-white hover:text-gray-400"
    >
      <FaInstagram className="w-6 h-6" />
    </a>
    <a
      href="mailto:topalxtrans@gmail.com"
      className="text-white hover:text-gray-400"
    >
      <FaEnvelope className="w-6 h-6" />
    </a>
  </div>
);

export default SocialLinks;
