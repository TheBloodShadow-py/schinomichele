"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function CurrentPageSection () {
    const pathname = usePathname().slice(1);
    return (
        <>
        <div className="bg-gray-200 px-4 py-3">
            <div className="container my-0 mx-auto transition-all">
                <div className="flex items-center justify-between">
                    <span className="text-slate-900 text-2xl capitalize">{pathname}</span>
                    <div className="flex gap-3 text-slate-500 text-md">
                        <span><Link href="/">Home</Link></span>
                        <div><FontAwesomeIcon icon={faAngleRight} /></div>
                        <span className=" capitalize">{pathname}</span>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}