"use client"
import { useEffect, useState } from "react";
import { allBlogs } from "contentlayer/generated";
import HomeCoverSection from "@/src/components/Home/HomeCoverSection";
import FeaturedPosts from "@/src/components/Home/FeaturedPosts";
import RecentPosts from "@/src/components/Home/RecentPosts";
import { usePathname } from "next/navigation";
import { getDictionary } from "@/src/app/[locale]/dictionaries/dictionaries";
import { apiClient } from "@/src/utils/apiClient";

export default function Home() {
    const pathname = usePathname()
    const [translation, setTranslation] = useState({})
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        getDictionary(pathname.split('/')[1]).then((r) => setTranslation(r))
    }, [pathname])

    useEffect(() => {
        apiClient.get('articles?populate=*').then((res) => setBlogs(res.data?.data))
    }, [])

    return (
        <main className="flex flex-col items-center justify-center">
            <HomeCoverSection blogs={allBlogs} translation={translation} pathname={pathname} />
            <FeaturedPosts blogs={allBlogs} translation={translation} pathname={pathname} />
            <RecentPosts blogs={blogs} translation={translation} pathname={pathname} />
        </main>
    )
}
