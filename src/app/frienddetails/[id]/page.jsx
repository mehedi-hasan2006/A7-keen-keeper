import Image from "next/image";
import { FiArchive } from "react-icons/fi";
import { MdOutlineNotificationsPaused } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { TbPhoneCall } from "react-icons/tb";
import { BsChatText } from "react-icons/bs";
import { IoVideocamOutline } from "react-icons/io5";

async function FriendDetailsPage({ params }) {
  const { id } = await params;

  const res = await fetch("http://localhost:3000/friends.json");
  const data = await res.json();
  const friend = data.find((f) => f.id === parseInt(id));

  const {
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
    <div className="bg-[#F8FAFC] dark:bg-gray-900">
      {friend && (
        <div className="max-w-285 mx-auto my-10 grid grid-cols-1 md:grid-cols-12 gap-6 px-5">
          <div className=" col-span-12 md:col-span-4">
            <div className="bg-white dark:bg-gray-800 shadow-md rounded-md  py-5">
              <div className="flex flex-col items-center space-y-4">
                <Image
                  src={picture}
                  alt={name}
                  height={80}
                  width={80}
                  className="w-20 h-20 rounded-full"
                />
                <div className="text-center">
                  <h1 className="text-2xl font-semibold text-[#1F2937] dark:text-gray-200">
                    {name}
                  </h1>
                  <div>
                    <p
                      className={`inline-block text-white ${status === "On-Track" ? "bg-green-800" : status === "Almost Due" ? "bg-amber-500" : "bg-red-500"}  text-xs px-2 py-1 rounded-full m-2`}
                    >
                      {status}
                    </p>
                  </div>
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
                    <p className="text-gray-600 dark:text-gray-400 font-medium italic">{`"${bio}"`}</p>
                    <p className="text-gray-600 dark:text-gray-400">
                      {" "}
                      {`Email: ${email}`}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 mt-5">
              <button className="btn bg-white dark:bg-gray-800">
                {" "}
                <MdOutlineNotificationsPaused /> Primary
              </button>
              <button className="btn bg-white dark:bg-gray-800">
                {" "}
                <FiArchive /> Primary
              </button>
              <button className="btn bg-white dark:bg-gray-800 text-red-500">
                {" "}
                <MdDeleteOutline /> Delete{" "}
              </button>
            </div>
          </div>

          <div className="col-span-12 md:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              <div className="bg-white dark:bg-gray-800 shadow-md text-center p-4 rounded-lg">
                <p className="text-2xl font-bold text-[#1F2937] dark:text-gray-200">
                  {days_since_contact}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Day Since Contact
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 shadow-md text-center p-4 rounded-lg">
                <p className="text-2xl font-bold text-[#1F2937] dark:text-gray-200">
                  {goal}
                </p>
                <p className="text-gray-600 dark:text-gray-400">Goal (Days)</p>
              </div>
              <div className="bg-white dark:bg-gray-800 shadow-md text-center p-4 rounded-lg">
                <p className="text-2xl font-bold text-[#1F2937] dark:text-gray-200">
                  {next_due_date}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Next Due Date
                </p>
              </div>
            </div>

            <div>
              <div className="bg-white dark:bg-gray-800 rounded-md shadow mt-5 py-2 px-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold text-[#244D3F] dark:text-gray-200 mt-5 mb-3">
                    Relationship Goal
                  </h2>
                  <button className="btn">Edit</button>
                </div>

                <div>
                  <p>
                    {" "}
                    <span className="text-gray-500 font-normal">
                      Connect Every
                    </span>{" "}
                    <span className="font-semibold"> {goal} Days </span>
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-md shadow mt-5 py-8 px-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold text-[#244D3F] dark:text-gray-200  mb-3">
                    Quick Check-In
                  </h2>
                </div>
                <div className="grid lg:grid-cols-3 gap-5">
                  <div className="flex flex-col items-center justify-center p-5 bg-gray-100 dark:bg-gray-700 rounded-md cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                    <p>
                      <TbPhoneCall />
                    </p>
                    <p>Call</p>
                  </div>
                  <div className="flex flex-col items-center justify-center p-5  bg-gray-100 dark:bg-gray-700 rounded-md cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                    <p>
                      <BsChatText />
                    </p>
                    <p>Text</p>
                  </div>
                  <div className="flex flex-col items-center justify-center p-5 bg-gray-100 dark:bg-gray-700 rounded-md cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                    <p>
                      <IoVideocamOutline />
                    </p>
                    <p>Video</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FriendDetailsPage;
