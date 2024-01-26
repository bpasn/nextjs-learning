"use client";

import { EachElement } from "@/EachElement";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

const NavLinkList = () => {
    const searchParams = useSearchParams();
    const pathName = usePathname().split("/").filter(Boolean);
    return (
        <nav className="navlink-list mt-10 container">
            <ul>
                <li className="flex items-center text-sm md:text-lg font-[600] space-x-2 text-[rgba(0,_0,_0,_.45)]">
                    <Link href={"/"} className="text-decoration ">Home</Link>
                    <ChevronRight size={18} />
                </li>
                <EachElement
                    render={(path, index) => {
                        const pathSegment = `/${pathName.slice(0, index + 1).join("/")}`
                        return (
                            <li className="flex items-center text-sm md:text-lg font-[600] space-x-2 text-[rgba(0,_0,_0,_.45)]">
                                {pathSegment.length === usePathname().length 
                                 ? <span className="text-sm md:text-lg font-[600] text-black">{path}</span> 
                                 : (<Link href={pathSegment} className="text-decoration">{path}</Link>)}
                                {(index + 1) < pathName.length || searchParams.get("q") ? <ChevronRight size={18} /> : ""}
                            </li>
                        );
                    }}
                    of={pathName}
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