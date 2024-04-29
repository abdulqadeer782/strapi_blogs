import BlogDetails from "@/src/components/Blog/BlogDetails";
import RenderMdx from "@/src/components/Blog/RenderMdx";
import Tag from "@/src/components/Elements/Tag";
import siteMetadata from "@/src/utils/siteMetaData";
import { allBlogs } from "contentlayer/generated";
import { slug } from "github-slugger";
import Image from "next/image";


export default function Signup({ params }) {
  

  return (
    <>
    <article>
      <div className="flex-row basis-1/8 flex justify-center">
        {/* <div className="col-span-12  lg:col-span-4">
          <details
            className="border-[1px] border-solid border-dark dark:border-light text-dark dark:text-light rounded-lg p-4 sticky top-6 max-h-[80vh] overflow-hidden overflow-y-auto"
            open
          >
            <summary className="text-lg font-semibold capitalize cursor-pointer">
              Table Of Content
            </summary>
            <ul className="mt-4 font-in text-base">
              {blog.toc.map((heading) => {
                return (
                  <li key={`#${heading.slug}`} className="py-1">
                    <a
                      href={`#${heading.slug}`}
                      data-level={heading.level}
                      className="data-[level=two]:pl-0  data-[level=two]:pt-2
                                       data-[level=two]:border-t border-solid border-dark/40
                                       data-[level=three]:pl-4
                                       sm:data-[level=three]:pl-6
                                       flex items-center justify-start
                                       "
                    >
                      {heading.level === "three" ? (
                        <span className="flex w-1 h-1 rounded-full bg-dark mr-2">
                          &nbsp;
                        </span>
                      ) : null}

                      <span className="hover:underline">{heading.text}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </details>
        </div> */}
        <div className="w-full mx-auto dark:bg-current rounded-lg  shadow dark:border md:mt-0 sm:max-w-md xl:p-0 0 " style={{marginTop:100, marginBottom:100,}} >
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8" style={{paddingTop:80, paddingBottom:80,}}>
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Sign Up
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                    
                    <div>
                        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                        <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" />
                    </div>
                    <div>
                        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                        <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="username" />
                    </div>
                    <div>
                        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
                    </div>
                    <div>
                        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                              <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"  />
                          </div>
                          <div className="ml-3 text-sm">
                              <label className="text-black dark:text-white">Remember me</label>
                          </div>
                        </div>
                        <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                    </div>
                    <button type="submit" className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                    <p className="text-sm font-light text-gray-500 dark:text-white">
                        Already have an account? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-white">Sign In</a>
                    </p>
              </form>
            </div>
          </div>
      </div>
    </article>
    </>
   
  );
}
