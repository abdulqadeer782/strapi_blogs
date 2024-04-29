import { format, parseISO } from "date-fns";
import Link from "next/link";
import React from "react";
import { slug } from "github-slugger";


const BlogDetails = ({ blog, slug: blogSlug }) => {
  return (
    <div className="flex flex-row justify-center">
      <div className="basis-1/2 mb-5 flex-row flex">
        <time className="mr-3 text-white"> 
          {format(parseISO(blog.publishedAt), "LLLL d, yyyy")}
        </time>
      
      <div className="mr-3 text-white">{blog.readingTime.text}</div>
        <Link href={`/categories/${slug(blog.tags[0])}`} className="mr-3 text-white">
          {blog.tags[0]}
        </Link>
      </div>
    </div>
  );
};

export default BlogDetails;
