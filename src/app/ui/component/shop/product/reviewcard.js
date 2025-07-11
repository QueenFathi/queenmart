import { StarIcon } from "@heroicons/react/20/solid";
import { IoPersonCircleOutline } from "react-icons/io5";

export default function ReviewCard({ data }) {
  return (
    <div className="mt-5 flex gap-5 g:gap-10 items-start shadow p-5">
      <div className="flex items-center space-x-4">
        {/* <Image src="/heel.jpg" width={100} height={100} className="w-12 h-12" alt="user avatar" /> */}
        <span className="text-5xl">
          <IoPersonCircleOutline />
        </span>
      </div>
      <div className="">
        <div>
          <h4 className="font-medium text-stone-700">{data.name}</h4>
          <p className="text-sm text-stone-500">{data.date}</p>
        </div>
        <div className="flex space-x-1 mt-2">
          {[0, 1, 2, 3, 4].map((rating) => (
            <StarIcon
              key={rating}
              aria-hidden="true"
              className={
                data.rating > rating
                  ? "text-yellow-400 size-5 shrink-0"
                  : "text-gray-200 size-5 shrink-0"
              }
            />
          ))}
        </div>
        <p className="mt-2">{data.review}</p>
      </div>
    </div>
  );
}
