"use client";

import Link from "next/link";

interface FooterMenu {
  title?: string;
  linkArray?: Array<{ Lable: string; LinkURI: string }>;
}

const FooterMenu: React.FC<FooterMenu> = ({ title, linkArray }) => {
  return (
    <div>
      <h4 className="text-md text-green-700 font-semibold mb-3">{title}</h4>
      <div className="grid">
        {linkArray?.map((link, idx) => (
          <Link
            className="mb-2 text-xs cursor-pointer hover:underline hover:text-green-600"
            href={link.LinkURI}
            key={idx}
          >
            {link.Lable}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterMenu;
