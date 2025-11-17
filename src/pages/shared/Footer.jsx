import React from "react";
import { Link } from "react-router";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import Logo from "../../components/Logo";

const Footer = () => {
  return (
    <footer className="bg-accent text-gray-100 rounded-2xl mb-4 border-t border-base-300">
      <div className="footer sm:footer-horizontal py-10 max-w-[1432px] mx-auto px-4 text-gray-200">
        
        {/* Left Section */}
        <aside>
          <Link
            onClick={() => window.scrollTo(0, 0)}
            to="/"
            className="text-gray-50"
          >
            <Logo />
          </Link>
          <p className="max-w-xs text-gray-300 mt-2">
            Discover, collect, and showcase stunning digital artworks from
            creators around the world.
          </p>
        </aside>

        {/* Quick Links */}
        <div>
          <h6 className="footer-title text-white font-semibold">Quick Links</h6>
          <Link
            onClick={() => window.scrollTo(0, 0)}
            to="/"
            className="link link-hover text-gray-200 hover:text-white"
          >
            Home
          </Link>
          <Link
            onClick={() => window.scrollTo(0, 0)}
            to="/explore-artworks"
            className="link link-hover text-gray-200 hover:text-white"
          >
            Explore Artworks
          </Link>
          <Link
            onClick={() => window.scrollTo(0, 0)}
            to="/login"
            className="link link-hover text-gray-200 hover:text-white"
          >
            Login
          </Link>
          <Link
            onClick={() => window.scrollTo(0, 0)}
            to="/register"
            className="link link-hover text-gray-200 hover:text-white"
          >
            Register
          </Link>
        </div>

        {/* Services */}
        <div>
          <h6 className="footer-title text-white font-semibold">Services</h6>
          <Link
            onClick={() => window.scrollTo(0, 0)}
            to="/add-artworks"
            className="link link-hover text-gray-200 hover:text-white"
          >
            Add Artwork
          </Link>
          <Link
            onClick={() => window.scrollTo(0, 0)}
            to="/my-gallery"
            className="link link-hover text-gray-200 hover:text-white"
          >
            My Gallery
          </Link>
          <Link
            onClick={() => window.scrollTo(0, 0)}
            to="/my-favorites"
            className="link link-hover text-gray-200 hover:text-white"
          >
            My Favorites
          </Link>
        </div>

        {/* Contact + Social */}
        <div>
          <h6 className="footer-title text-white font-semibold">Contact & Social</h6>

          {/* Contact Info */}
          <div className="space-y-2 text-sm text-gray-300">
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-primary" /> Dhaka, Bangladesh
            </p>
            <p className="flex items-center gap-2">
              <FaPhoneAlt className="text-primary" /> +880 1752-080666
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-primary" /> mo.mahin4@gmail.com
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-4">
            <a
              href="https://www.facebook.com/mahinmostafiz.m/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-all flex items-center justify-center w-10 h-10 rounded-full bg-base-100 text-gray-800 hover:bg-primary  duration-300"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.linkedin.com/in/mostafiz04"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-all flex items-center justify-center w-10 h-10 rounded-full bg-base-100 text-gray-800 hover:bg-primary duration-300"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/Mostafiz002"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-all flex items-center justify-center w-10 h-10 rounded-full bg-base-100 text-gray-800 hover:bg-primary duration-300"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-600 py-4 text-center text-sm text-gray-300">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-primary">Artopia</span>. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
