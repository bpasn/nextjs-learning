"use client";

import { EachElement } from "@/EachElement";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

const NavLinkList = () => {
    const route = useRouter();
    const searchParams = useSearchParams();
    const pathName = usePathname();
    console.log(pathName.split("/").slice(1))
    return (
        <nav className="navlink-list mt-10 container">
            <ul>
                <li className="flex items-center text-sm md:text-lg font-[600] space-x-2 text-[rgba(0,_0,_0,_.45)]">
                    <Link href={"/"} className="text-decoration ">Home</Link>
                    <ChevronRight size={18} />
                </li>
                <EachElement
                    render={(path, index) => {
                        return (
                            <li className="flex items-center text-sm md:text-lg font-[600] space-x-2 text-[rgba(0,_0,_0,_.45)]">
                                <Link href={""} className="text-decoration ">{path}</Link>
                                {(index + 1) < pathName.split("/").slice(1).length || searchParams.get("q") ? <ChevronRight size={18} /> : ""}
                            </li>
                        );
                    }}
                    of={pathName.split("/").slice(1)}
                />
                {searchParams.get("q") && (
                    <li className="flex items-center text-sm md:text-lg font-[600] space-x-2 ">
                        {searchParams.get("q")}
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default NavLinkList