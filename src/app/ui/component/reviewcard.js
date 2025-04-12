"use client"

import { StarIcon } from "@heroicons/react/20/solid"
import { IoPersonCircleOutline } from "react-icons/io5"

export default function ReviewCard () {
    return (
       <div className="mt-5 flex gap-5 g:gap-10 items-start shadow p-5">
        <div className="flex items-center space-x-4">
            {/* <Image src="/heel.jpg" width={100} height={100} className="w-12 h-12" alt="user avatar" /> */}
            <span className="text-5xl"><IoPersonCircleOutline /></span>
        </div>
        <div className="">
            <div>
                <h4 className="font-medium text-stone-700">John Doe</h4>
                <p className="text-sm text-stone-500">July 7, 2025</p>
            </div>
            <div className="flex space-x-1 text-yellow-400 mt-2">
            {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        aria-hidden="true"
                        className="size-5 shrink-0"
                      />
                    ))}
            </div>
            <p className="mt-2">
            Diam amet duo labore stet elitr ea clita ipsum, tempor labore
              accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed
              sed eirmod ipsum.
            </p>
        </div>
       </div>
    )
}