import React from "react";
import Category from "./Category";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

const Categories = ({ categories, pathname }) => {
    const router = useRouter();

    const { id } = useParams()
    return (
        <div className=" px-0 md:px-10 sxl:px-20 mt-10 border-t-2 text-dark dark:text-light border-b-2 border-solid border-dark dark:border-light py-4 flex items-start flex-wrap font-medium mx-5 md:mx-10">
            {categories.map((cat) => (
                <Category
                    key={cat.id}
                    id={cat.id}
                    name={cat?.attributes?.name}
                    active={id == cat.id}
                />
            ))}
        </div>
    );
};

export default Categories;
