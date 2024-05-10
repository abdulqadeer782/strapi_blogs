import Image from "next/image"
import Link from "next/link"


const Logo = ({ title, pathname }) => {
    return (
        <Link href={`/${pathname}`} className="flex items-center text-dark dark:text-light">
            <span className="font-bold dark:font-semibold text-lg md:text-xl">{title}</span>
        </Link>
    )
}

export default Logo