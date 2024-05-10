"use client"
import { usePathname } from "next/navigation";
import { getDictionary } from "@/src/app/[locale]/dictionaries/dictionaries";
import { useEffect, useState } from "react";


export default function Login({ params }) {
    const pathname = usePathname()
    const [translation, setTranslation] = useState({})

    useEffect(() => {
        getDictionary(pathname.split('/')[1]).then((r) => setTranslation(r))
    }, [pathname])

    return (
        <>
            <article>
                <div className="flex-row basis-1/8 flex justify-center">

                    <div className="w-full mx-auto dark:bg-current rounded-lg  shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0 0 " style={{ marginTop: 100, marginBottom: 100, }} >
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8" style={{ paddingTop: 80, paddingBottom: 80, }}>
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                                {translation?.login?.title}
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{translation?.login?.emailLabel}</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{translation?.login?.passwordLabel}</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label className="text-white dark:text-white-300">{translation?.login?.rememberMe}</label>
                                        </div>
                                    </div>
                                    <a href="#" className="text-sm font-medium text-primary-600 hover:underline text-white dark:text-primary-500">{translation?.login?.forgotPass}</a>
                                </div>
                                <button type="submit" className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">{translation?.login?.buttonText}</button>
                                <p className="text-sm font-light text-gray-500 dark:text-white">
                                    {translation?.login?.helperText} <a href="#" className="font-medium text-primary-600 hover:underline dark:text-white">{translation?.login?.signUpText}</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </article>
        </>

    );
}
