import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogLayoutThree = ({ blog, id, pathname }) => {
    const imageUrl = 'http://localhost:1337' + blog?.cover_image?.data?.attributes?.url;
    return (
        <div className="group flex flex-col items-center text-dark dark:text-light">
            <Link href={`${pathname}/blog/${id}`} className="h-full rounded-xl overflow-hidden">
                {console.log('ffffffffff', 'http://localhost:1337' + imageUrl)}
                {/* <Image
                    src={blog.attributes && `http://localhost:1337/${blog?.cover_image?.data?.attributes?.url}`}
                    placeholder="blur"
                    blurDataURL={blog.image.blurhashDataUrl}
                    alt={blog.title}
                    width={400}
                    height={300}
                    className=" aspect-[4/3] w-full h-full object-cover object-center  group-hover:scale-105 transition-all ease duration-300 "
                    sizes="(max-width: 640px) 100vw,(max-width: 1024px) 50vw, 33vw"
                /> */}
                <Image
                    src={imageUrl} // Fallback image if no URL
                    alt={blog?.title}
                    width={500}
                    height={500}
                    style={{ width: '500px', height: "300px" }}
                // placeholder="blur"
                // className=" aspect-[4/3] w-full h-full object-cover object-center  group-hover:scale-105 transition-all ease duration-300 "
                // sizes="(max-width: 640px) 100vw,(max-width: 1024px) 50vw, 33vw"
                // blurDataURL={blog.image.blurhashDataUrl}
                // Add other optional props like layout, priority, etc.
                />
            </Link>

            <div className="flex flex-col w-full mt-4">
                <span className="uppercase text-accent dark:text-accentDark font-semibold text-xs sm:text-sm">
                    {blog.category?.data?.attributes?.name}
                </span>
                <Link href={`/${pathname}/blog/${id}`} className="inline-block my-1">
                    <h2 className="font-semibold capitalize  text-base sm:text-lg">
                        <span
                            className="bg-gradient-to-r from-accent/50 to-accent/50  dark:from-accentDark/50
              dark:to-accentDark/50
              bg-[length:0px_6px]
              group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 "
                        >
                            {blog.title}
                        </span>
                    </h2>
                </Link>

                <span className="capitalize text-gray dark:text-light/50 font-semibold text-sm  sm:text-base">
                    {format(new Date(blog.publishedAt), "MMMM dd, yyyy")}
                </span>
            </div>
        </div>
    );
};

export default BlogLayoutThree;
