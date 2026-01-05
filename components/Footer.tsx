"use client";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

type FooterProps = {
  data: any;
};

export default function Footer({ data }: FooterProps) {
  if (!data) return null;

  return (
    <footer className="bg-gradient-to-b from-[#2f243f] to-[#0b0b2e] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* ABOUT */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-4">
            {data.name}
          </h3>
          <p className="text-sm leading-relaxed">
            {data.description}
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm">
            {["home", "about", "skills", "education", "projects", "contact"].map(
              (item) => (
                <li key={item}>
                  <a href={`#${item}`} className="hover:text-purple-400">
                    ▸ {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Contact Info
          </h3>

          <div className="space-y-4 text-sm">
            {data.phone && (
              <p className="flex items-center gap-3">
                <FaPhoneAlt className="text-purple-400" />
                {data.phone}
              </p>
            )}

            {data.email && (
              <p className="flex items-center gap-3">
                <FaEnvelope className="text-purple-400" />
                {data.email}
              </p>
            )}

            {data.location && (
              <p className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-purple-400" />
                {data.location}
              </p>
            )}
          </div>

          {/* SOCIAL */}
          <div className="flex gap-4 mt-6">
            {data.socials?.linkedin && (
              <a href={data.socials.linkedin} target="_blank">
                <FaLinkedinIn />
              </a>
            )}
           {data.socials?.whatsapp && (
              <a
                href={`https://wa.me/${data.socials.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
  >
              <FaWhatsapp />
             </a>
)}

            {data.socials?.facebook && (
              <a href={data.socials.facebook} target="_blank">
                <FaFacebookF />
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 text-center py-4 text-sm">
        {data.copyright}
      </div>
    </footer>
  );
}
