import BlogDetails from "@/src/components/Blog/BlogDetails";
import RenderMdx from "@/src/components/Blog/RenderMdx";
import Tag from "@/src/components/Elements/Tag";
import siteMetadata from "@/src/utils/siteMetaData";
import { allBlogs } from "contentlayer/generated";
import { slug } from "github-slugger";
import Image from "next/image";

export async function generateStaticParams() {
  return allBlogs.map((blog) => ({ slug: blog._raw.flattenedPath }));
}

export async function generateMetadata({ params }) {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);
  if (!blog) {
    return;
  }

  const publishedAt = new Date(blog.publishedAt).toISOString();
  const modifiedAt = new Date(blog.updatedAt || blog.publishedAt).toISOString();

  let imageList = [siteMetadata.socialBanner];
  if (blog.image) {
    imageList =
      typeof blog.image.filePath === "string"
        ? [siteMetadata.siteUrl + blog.image.filePath.replace("../public", "")]
        : blog.image;
  }
  const ogImages = imageList.map((img) => {
    return { url: img.includes("http") ? img : siteMetadata.siteUrl + img };
  });

  const authors = blog?.author ? [blog.author] : siteMetadata.author;

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      url: siteMetadata.siteUrl + blog.url,
      siteName: siteMetadata.title,
      locale: "en_US",
      type: "article",
      publishedTime: publishedAt,
      modifiedTime: modifiedAt,
      images: ogImages,
      authors: authors.length > 0 ? authors : [siteMetadata.author],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      images: ogImages,
    },
  };
}

export default function BlogPage({ params }) {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);

  let imageList = [siteMetadata.socialBanner];
  if (blog.image) {
    imageList =
      typeof blog.image.filePath === "string"
        ? [siteMetadata.siteUrl + blog.image.filePath.replace("../public", "")]
        : blog.image;
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": blog.title,
    "description": blog.description,
    "image": imageList,
    "datePublished": new Date(blog.publishedAt).toISOString(),
    "dateModified": new Date(blog.updatedAt || blog.publishedAt).toISOString(),
    "author": [{
        "@type": "Person",
        "name": blog?.author ? [blog.author] : siteMetadata.author,
        "url": siteMetadata.twitter,
      }]
  }

  return (
    <>
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
       <article>
      <div className="mb-8 text-center relative  h-[70vh] bg-dark">
        <div className="w-full z-10 flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Tag
            name={blog.tags[0]}
            link={`/categories/${slug(blog.tags[0])}`}
            className="px-6 text-sm py-2"
          />
          <h1
            className="inline-block mt-6 font-semibold capitalize text-light text-2xl md:text-3xl lg:text-5xl !leading-normal relative w-5/6"
          >
            {blog.title}
          </h1>
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 h-full bg-dark/60 dark:bg-dark/40" />
        <Image
          src={blog.image.filePath.replace("../public", "")}
          placeholder="blur"
          blurDataURL={blog.image.blurhashDataUrl}
          alt={blog.title}
          width={blog.image.width}
          height={blog.image.height}
          className="aspect-square w-full h-full object-cover object-center"
          priority
          sizes="100vw"
        />
      </div>
      <BlogDetails blog={blog} slug={params.slug} />

      <div className="flex-column  flex justify-center">
        <RenderMdx blog={blog} />
      </div>
      <section className="bg-white dark:bg-dark  py-8 lg:py-16 antialiased">
        <div className="max-w-5xl mx-auto px-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">Discussion (20)</h2>
          </div>
          <form className="mb-6">
              <div className=" mb-4 bg-white rounded-lg rounded-t-lg border border-slate-900  dark:bg-dark dark:border-white">
                  <label for="comment" className="sr-only">Your comment</label>
                  <textarea id="comment" rows="6"
                      className="py-2 px-4 w-full text-sm  border-0 focus:ring-0 focus:outline-none text-black dark:text-white bg-transparent dark:placeholder-gray-400 "
                      placeholder="Write a comment..." required></textarea>
              </div>
              <button type="submit"
                  className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-slate-600 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                  Post comment
              </button>
          </form>
          <article className="p-6 mb-3 text-base bg-slate-100 shadow-md rounded-lg dark:bg-slate-900">
              <footer className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                      <p className="inline-flex items-center mr-3 text-sm text-black  dark:text-white font-semibold">
                        <img
                              className="mr-2 w-6 h-6 rounded-full"
                              src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                              alt="Michael Gough"/>Michael Gough</p>
                      <p className="text-sm text-black dark:text-white"><time pubdate datetime="2022-02-08"
                              title="February 8th, 2022">Feb. 8, 2022</time></p>
                  </div>
                  <button id="dropdownComment1Button" data-dropdown-toggle="dropdownComment1"
                      className="inline-flex items-center p-2 text-sm font-medium text-center text-black dark:text-white bg-transparent rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 bg-transparent dark:bg-transparent dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                      type="button">
                      <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                          <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                      </svg>
                      <span className="sr-only">Comment settings</span>
                  </button>
                 
                  <div id="dropdownComment1"
                      className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                      <ul className="py-1 text-sm text-gray-700 dark:text-gray-200"
                          aria-labelledby="dropdownMenuIconHorizontalButton">
                          <li>
                              <a href="#"
                                  className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                          </li>
                          <li>
                              <a href="#"
                                  className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>
                          </li>
                          <li>
                              <a href="#"
                                  className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>
                          </li>
                      </ul>
                  </div>
              </footer>
              <p className="text-black dark:text-white">Very straight-to-point article. Really worth time reading. Thank you! But tools are just the
                  instruments for the UX designers. The knowledge of the design tools are as important as the
                  creation of the design strategy.</p>
              
          </article>
          <article className="p-6 mb-3 text-base bg-slate-100 shadow-md rounded-lg dark:bg-slate-900">
              <footer className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                      <p className="inline-flex items-center mr-3 text-sm text-black  dark:text-white font-semibold">
                        <img
                              className="mr-2 w-6 h-6 rounded-full"
                              src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                              alt="Michael Gough"/>Michael Gough</p>
                      <p className="text-sm text-black dark:text-white"><time pubdate datetime="2022-02-08"
                              title="February 8th, 2022">Feb. 8, 2022</time></p>
                  </div>
                  <button id="dropdownComment1Button" data-dropdown-toggle="dropdownComment1"
                      className="inline-flex items-center p-2 text-sm font-medium text-center text-black dark:text-white bg-transparent rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 bg-transparent dark:bg-transparent dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                      type="button">
                      <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                          <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                      </svg>
                      <span className="sr-only">Comment settings</span>
                  </button>
                 
                  <div id="dropdownComment1"
                      className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                      <ul className="py-1 text-sm text-gray-700 dark:text-gray-200"
                          aria-labelledby="dropdownMenuIconHorizontalButton">
                          <li>
                              <a href="#"
                                  className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                          </li>
                          <li>
                              <a href="#"
                                  className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>
                          </li>
                          <li>
                              <a href="#"
                                  className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>
                          </li>
                      </ul>
                  </div>
              </footer>
              <p className="text-black dark:text-white">Very straight-to-point article. Really worth time reading. Thank you! But tools are just the
                  instruments for the UX designers. The knowledge of the design tools are as important as the
                  creation of the design strategy.</p>
              
          </article>
          <article className="p-6 mb-3 text-base bg-slate-100 shadow-md rounded-lg dark:bg-slate-900">
              <footer className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                      <p className="inline-flex items-center mr-3 text-sm text-black  dark:text-white font-semibold">
                        <img
                              className="mr-2 w-6 h-6 rounded-full"
                              src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                              alt="Michael Gough"/>Michael Gough</p>
                      <p className="text-sm text-black dark:text-white"><time pubdate datetime="2022-02-08"
                              title="February 8th, 2022">Feb. 8, 2022</time></p>
                  </div>
                  <button id="dropdownComment1Button" data-dropdown-toggle="dropdownComment1"
                      className="inline-flex items-center p-2 text-sm font-medium text-center text-black dark:text-white bg-transparent rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 bg-transparent dark:bg-transparent dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                      type="button">
                      <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                          <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                      </svg>
                      <span className="sr-only">Comment settings</span>
                  </button>
                 
                  <div id="dropdownComment1"
                      className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                      <ul className="py-1 text-sm text-gray-700 dark:text-gray-200"
                          aria-labelledby="dropdownMenuIconHorizontalButton">
                          <li>
                              <a href="#"
                                  className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                          </li>
                          <li>
                              <a href="#"
                                  className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>
                          </li>
                          <li>
                              <a href="#"
                                  className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>
                          </li>
                      </ul>
                  </div>
              </footer>
              <p className="text-black dark:text-white">Very straight-to-point article. Really worth time reading. Thank you! But tools are just the
                  instruments for the UX designers. The knowledge of the design tools are as important as the
                  creation of the design strategy.</p>
              
          </article>
        </div>
      </section>
    </article>
    </>
   
  );
}
