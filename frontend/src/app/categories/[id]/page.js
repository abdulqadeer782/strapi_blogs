"use client"
import Categories from "@/src/components/Blog/Categories";
import { apiClient } from "@/src/utils/apiClient";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";




const CategoryPage = ({ }) => {
    const { id } = useParams();
    const [categories, setCategories] = useState([])

    useEffect(() => {
        apiClient.get('categories').then((res) => {
            if (res.data) setCategories(res.data?.data)
        }).catch((err) => console.log('errrrrrr', err))

    }, [])

    useEffect(() => {
        apiClient.get(`articles/${id}`)
    }, [id])

    return (
        <article className="mt-12 flex flex-col text-dark dark:text-light">
            {/* <div className=" px-5 sm:px-10  md:px-24  sxl:px-32 flex flex-col">
        <h1 className="mt-6 font-semibold text-2xl md:text-4xl lg:text-5xl">#{params.slug}</h1>
        <span className="mt-2 inline-block">
          Discover more categories and expand your knowledge!
        </span>
      </div> */}
            <Categories categories={categories || []} currentSlug={id} />

            {/* <div className="grid  grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 grid-rows-2 gap-16 mt-5 sm:mt-10 md:mt-24 sxl:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32">
                {blogs.map((blog, index) => (
                    <article key={index} className="col-span-1 row-span-1 relative">
                        <BlogLayoutThree blog={blog} />
                    </article>
                ))}
            </div> */}
        </article>
    );
};

export default CategoryPage;
