"use client";
import Dropdown from "./Dropdown";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  interface FooterLink {
    title: string;
    href: string;
    isOutsideLink: boolean;
  }

  interface FooterCategory {
    title: string;
    links: FooterLink[];
  }

  const footerLinks: FooterCategory[] = [
    {
      title: "Product",
      links: [
        { title: "Changelog", href: "#", isOutsideLink: false },
        { title: "Customer stories", href: "#", isOutsideLink: false },
        { title: "Security", href: "#", isOutsideLink: false },
        { title: "Chrome extension", href: "#", isOutsideLink: true },
        { title: "iOS App", href: "#", isOutsideLink: true },
        { title: "Android App", href: "#", isOutsideLink: true },
        { title: "Zapier", href: "#", isOutsideLink: true },
        { title: "Integromat", href: "#", isOutsideLink: true },
      ],
    },
    {
      title: "Company",
      links: [
        { title: "About", href: "#", isOutsideLink: false },
        { title: "Careers", href: "#", isOutsideLink: false },
        { title: "Blog", href: "#", isOutsideLink: false },
        { title: "Startup program", href: "#", isOutsideLink: true },
      ],
    },
    {
      title: "Attio for",
      links: [
        { title: "Startups", href: "#", isOutsideLink: false },
        { title: "Dear flow", href: "#", isOutsideLink: false },
      ],
    },
    {
      title: "Support",
      links: [
        { title: "Help Center", href: "#", isOutsideLink: false },
        { title: "Talk to support", href: "#", isOutsideLink: false },
        { title: "API docs", href: "#", isOutsideLink: true },
        { title: "System status", href: "#", isOutsideLink: true },
      ],
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-base-600 -mx-6 px-6 pt-10 md:px-23.5 md:pt-16">
      <div className="flex items-center">
        <Image
          src="./logo.svg"
          width={90}
          height={36}
          alt="attio company logo"
          className="invert w-auto h-auto"
        />
        <div className="ml-auto md:hidden">
          <Socials />
        </div>
      </div>
      <div className="pt-10 flex flex-col gap-3 md:hidden">
        {footerLinks.map((val) => {
          return (
            <Dropdown title={val.title} key={val.title}>
              <div className="flex flex-col gap-1.75 mb-2">
                {val.links.map((branch) => {
                  return (
                    <Link
                      href={branch.href}
                      key={branch.title}
                      target={branch.isOutsideLink ? "_black" : ""}
                      className="active:cursor-default"
                    >
                      <div className="hover:bg-dark-550 transition duration-200 -mx-3 py-3 rounded-lg">
                        <p className="ml-3 text-base-300">{branch.title}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </Dropdown>
          );
        })}
      </div>
      <div className="hidden md:flex md:gap-20">
        {footerLinks.map((val) => {
          return (
            <div key={val.title} className="w-47.5 mt-2">
              <h3 className="text-base-300 mb-3">{val.title}</h3>
              <div>
                {val.links.map((link) => {
                  return (
                    <Link
                      href={link.href}
                      key={link.title}
                      className="flex hover:brightness-150 transition duration-100 group w-fit"
                      target={link.isOutsideLink ? "_blank" : "_self"}
                    >
                      <h4 className="text-base-400">{link.title}</h4>
                      {link.isOutsideLink && (
                        <Image
                          src="icon-arrow-tr.svg"
                          width={20}
                          height={20}
                          alt="an arrow pointing up right"
                          className="w-auto h-auto group-hover:-translate-y-1 duration-100 transition"
                        />
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
        <div className="ml-auto pr-3">
          <h3 className="text-base/6 font-medium text-base-300">
            Ready to build?
          </h3>
          <div className="flex flex-col w-fit gap-3 mt-4">
            <Link href="#">
              <button className="text-nowrap text-base-100 py-3 px-25 bg-base-500 rounded-2xl cursor-pointer active:cursor-default">
                Start for free
              </button>
            </Link>
            <Link href="#">
              <button className="text-nowrap text-base-100 py-3 w-full border border-base-500 rounded-2xl cursor-pointer active:cursor-default">
                Talk to sales
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:border-t md:border-t-base-500 md:pt-5 md:w-[99vw] md:-ml-23.5 md:px-23.5 md:flex-row md:justify-between items-center md:text-base-300 text-base-400 mt-10 gap-2 pb-15">
        <h3 className="">© {currentYear} Attio Ltd. All rights reserved.</h3>
        <div className="flex items-end gap-x-10">
          <h3>
            <Link
              href="#"
              className="hover:brightness-150 transition duration-200"
            >
              Terms & Conditions
            </Link>
            {" ∙ "}
            <Link
              href="#"
              className="hover:brightness-150 transition duration-200"
            >
              Privacy Policy
            </Link>
          </h3>
          <div className="hidden md:block">
            <Socials />
          </div>
        </div>
      </div>
    </div>
  );
}

function Socials() {
  interface socialLinks {
    src: string;
    href: string;
    alt: string;
  }
  const links: socialLinks[] = [
    { src: "./logos/twitter.svg", href: "#", alt: "Twitter Logo" },
    { src: "./logos/dribbble.svg", href: "#", alt: "Dribbble Logo" },
    { src: "./logos/linkedin.svg", href: "#", alt: "Linkedin Logo" },
  ];
  return (
    <div className="flex gap-3">
      {links.map((val) => {
        const isLogoTwitter = val.alt === "Twitter Logo";
        return (
          <Link href={val.href} key={val.src}>
            <Image
              src={val.src}
              width={16}
              height={16}
              alt={val.alt}
              id={isLogoTwitter ? "twitter" : ""}
              className={`${isLogoTwitter && "invert"} hover:opacity-75 duration-100`}
            />
          </Link>
        );
      })}
    </div>
  );
}
