import Image from "next/image";
import Link from "next/link";

function Friend({ friend }) {
  const {
    id,
    name,
    picture,
    email,
    status,
    tags,
    bio,
    goal,
    next_due_date,
    days_since_contact,
  } = friend;
  return (
    <Link href={`/frienddetails/${id}`}>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 text-center transition-transform transform duration-300 hover:scale-105">
        <div className="flex justify-center">
          <Image
            src={picture}
            alt={name}
            width={80}
            height={80}
            className=" object-cover w-20 h-20 rounded-full"
          />
        </div>
        <div className="mt-4">
          <h2 className="text-xl font-semibold text-[#1F2937] dark:text-gray-200">
            {name}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {days_since_contact}d ago
          </p>
          <div>
            {tags.map((tag, index) => (
              <span
                key={index}
                className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-1"
              >
                {tag.toUpperCase()}
              </span>
            ))}
          </div>
          <div>
            <p
              className={`inline-block text-white ${status === "On-Track" ? "bg-green-800" : status === "Almost Due" ? "bg-amber-500" : "bg-red-500"}  text-xs px-2 py-1 rounded-full m-2`}
            >
              {status.toWellFormed()}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Friend;
