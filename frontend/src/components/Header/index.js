"use client";
import Link from "next/link";
import Logo from "./Logo";
import {
    DribbbleIcon,
    GithubIcon,
    LinkedinIcon,
    MoonIcon,
    SunIcon,
    TwitterIcon,
} from "../Icons";
import { useThemeSwitch } from "../Hooks/useThemeSwitch";
import { useEffect, useState } from "react";
import { cx } from "@/src/utils";
import { apiClient } from "@/src/utils/apiClient";
import { useRouter } from "next/navigation";
import { getDictionary } from "@/src/app/[locale]/dictionaries/dictionaries";

const Header = ({ defaultLang }) => {
    const navigate = useRouter();
    const [mode, setMode] = useThemeSwitch();
    const [click, setClick] = useState(false);
    const [categories, setCategories] = useState([]);
    const [translation, setTranslation] = useState({});

    useEffect(() => {
        getDictionary(defaultLang).then((r) => setTranslation(r));
    }, [defaultLang]);

    useEffect(() => {
        apiClient
            .get(`categories?locale=${defaultLang}`)
            .then((res) => {
                if (res.data) setCategories(res.data?.data);
            })
            .catch((err) => console.log("errrrrrr", err));
    }, []);

    const toggle = () => {
        setClick(!click);
    };

    const handleLanguageChange = (val) => {
        navigate.push(`/${val}`);
    };

    return (
        <header className="w-full p-4  px-5 sm:px-10 flex items-center justify-between">
            <Logo title={translation?.header?.heading} pathname={defaultLang} />

            <button
                className="inline-block sm:hidden z-50"
                onClick={toggle}
                aria-label="Hamburger Menu"
            >
                <div className="w-6 cursor-pointer transition-all ease duration-300">
                    <div className="relative">
                        <span
                            className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
                            style={{
                                transform: click
                                    ? "rotate(-45deg) translateY(0)"
                                    : "rotate(0deg) translateY(6px)",
                            }}
                        >
                            &nbsp;
                        </span>
                        <span
                            className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
                            style={{
                                opacity: click ? 0 : 1,
                            }}
                        >
                            &nbsp;
                        </span>
                        <span
                            className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
                            style={{
                                transform: click
                                    ? "rotate(45deg) translateY(0)"
                                    : "rotate(0deg) translateY(-6px)",
                            }}
                        >
                            &nbsp;
                        </span>
                    </div>
                </div>
            </button>

            <nav
                className=" w-max py-3 px-6 sm:px-8 border border-solid border-dark rounded-full font-medium capitalize  items-center flex  sm:hidden
        fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50
        transition-all ease duration-300
        "
                style={{
                    top: click ? "1rem" : "-5rem",
                }}
            >
                {categories.map((category, index) => (
                    <Link
                        href={`/${defaultLang}/categories/${category.id}`}
                        className="mx-2"
                        key={index}
                    >
                        {category?.attributes?.name}
                    </Link>
                ))}

                <button
                    onClick={() => setMode(mode === "light" ? "dark" : "light")}
                    className={cx(
                        "w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1",
                        mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
                    )}
                    aria-label="theme-switcher"
                >
                    {mode === "light" ? (
                        <MoonIcon className={"fill-dark"} />
                    ) : (
                        <SunIcon className={"fill-dark"} />
                    )}
                </button>
            </nav>

            <nav
                className=" w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize  items-center hidden sm:flex
        fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50"
            >

                {/* category map */}
                {categories.map((category, index) => (
                    <Link
                        href={`/${defaultLang}/categories/${category.id}`}
                        className="mx-2"
                        key={index}
                    >
                        {category?.attributes?.name}
                    </Link>
                ))}

            </nav>
            <div className=" hidden sm:flex items-center">
                <Link
                    href={`/${defaultLang}/login`}
                    className="dark:bg-slate-500 dark:text-white bg-white text-black mr-5 pt-2 pb-2 pl-3 pr-3 rounded"
                    aria-label="Account"
                >
                    {translation?.header?.buttonText}
                </Link>
                <div className="slct mr-5">
                    <select
                        defaultValue={defaultLang || "en"}
                        onChange={(e) => handleLanguageChange(e.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                        <option value={"en"}>Eng</option>
                        <option value={"ur"}>Urdu</option>
                    </select>
                </div>
                {/* <a href={siteMetadata.linkedin} className="inline-block w-6 h-6 mr-4" aria-label="Reach out to me via LinkedIn" target="_blank"><LinkedinIcon className="hover:scale-125 transition-all ease duration-200" /></a>
            <a href={siteMetadata.twitter} className="inline-block w-6 h-6 mr-4" aria-label="Reach out to me via Twitter" target="_blank"><TwitterIcon className="hover:scale-125 transition-all ease duration-200" /></a>
            <a href={siteMetadata.github} className="inline-block w-6 h-6 mr-4" aria-label="Check my profile on Github" target="_blank"><GithubIcon className="  hover:scale-125 transition-all ease duration-200 dark:fill-light" /></a> */}
                <Link
                    href={"/login"}
                    className="inline-block w-6 h-6 mr-4"
                    aria-label="Account"
                >
                    <DribbbleIcon className="hover:scale-125 transition-all ease duration-200" />
                </Link>
            </div>
        </header>
    );
};

export default Header;
