"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { DribbbleIcon, GithubIcon, LinkedinIcon, TwitterIcon } from "../Icons";
import Link from "next/link";
import siteMetadata from "@/src/utils/siteMetaData";
import { usePathname } from "next/navigation";
import { getDictionary } from "@/src/app/[locale]/dictionaries/dictionaries";

const Footer = () => {
    const pathname = usePathname()
    const [translation, setTranslation] = useState({})

    useEffect(() => {
        getDictionary(pathname.split('/')[1]).then((r) => setTranslation(r))
    }, [pathname])

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);
    console.log(errors);

    return (
        <footer className="mt-16 rounded-2xl bg-dark dark:bg-accentDark/90 m-2 sm:m-10 flex flex-col items-center text-light dark:text-dark">
            <h3 className="mt-16 font-medium dark:font-bold text-center capitalize text-2xl sm:text-3xl lg:text-4xl px-4">
                {translation?.footer?.title}
            </h3>
            <p className="mt-5 px-4 text-center w-full sm:w-3/5 font-light dark:font-medium text-sm sm:text-base">
                {translation?.footer?.description}
            </p>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-6 w-fit sm:min-w-[384px] flex items-stretch bg-light dark:bg-dark p-1 sm:p-2 rounded mx04"
            >
                <input
                    type="email"
                    placeholder={translation?.footer?.inputPlaceholder}
                    {...register("email", { required: true, maxLength: 80 })}
                    className="w-full bg-transparent pl-2 sm:pl-0 text-dark focus:border-dark focus:ring-0 border-0 border-b mr-2 pb-1"
                />

                <input
                    type="submit"
                    value={translation?.footer?.buttonText}
                    className="bg-dark text-light dark:text-dark dark:bg-light cursor-pointer font-medium rounded px-3 sm:px-5 py-1"
                />
            </form>

            <div className="w-full  mt-16 md:mt-24 relative font-medium border-t border-solid border-light py-6 px-8 flex  flex-col md:flex-row items-center justify-between">
                <span className="text-center">
                    {translation?.footer?.copyRight}
                    {/* &copy;2024 Vice News. All rights reserved. */}
                </span>

            </div>
        </footer>
    );
};

export default Footer;
