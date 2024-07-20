import React from "react";
import { FaFacebook, FaInstagram, FaEnvelope } from "react-icons/fa";

const SocialLinks: React.FC = () => (
  <div className="flex flex-row gap-4 ">
    <a
      href="https://www.facebook.com/scoaladesoferitopalx/"
      className="text-white hover:text-gray-400"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaFacebook className="w-6 h-6" />
    </a>
    <a
      href="https://www.instagram.com/scoaladesoferitopalx/"
      className="text-white hover:text-gray-400"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaInstagram className="w-6 h-6" />
    </a>
    <a
      href="mailto:topalxtrans@gmail.com"
      className="text-white hover:text-gray-400"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaEnvelope className="w-6 h-6" />
    </a>
  </div>
);

export default SocialLinks;
