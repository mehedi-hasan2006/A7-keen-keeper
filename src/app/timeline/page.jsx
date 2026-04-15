"use client";
import NoTimeline from "@/components/NoTimeline/NoTimeline";
import { ButtonContext } from "@/context/ButtonContext";
import Image from "next/image";
import { useContext, useState } from "react";
import callImg from "@/assets/call.png";
import textImg from "../../assets/text.png";
import videoImg from "../../assets/video.png";

function TimelinePage() {
  const { friendData } = useContext(ButtonContext);
  const currentDate = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = currentDate.toLocaleDateString("en-US", options);

  const [filterType, setFilterType] = useState("");

  const handleFilterChange = (event) => {
    setFilterType(event.target.value);
  };

  const fileteredData = filterType
    ? friendData.filter((friend) => friend.type === filterType)
    : friendData;

  return (
    <div className="bg-[#F8FAFC] dark:bg-gray-900">
      <div className="max-w-285 mx-auto my-10 px-5">
        <h1 className="text-3xl font-bold text-[#244D3F] dark:text-gray-200 mb-5">
          Timeline
        </h1>

        {friendData.length > 0 ? (
          <div>
            <select
              onChange={handleFilterChange}
              value={filterType}
              className="select select-success dark:text-gray-200 w-full max-w-xs "
            >
              <option value="">All</option>
              <option value="Call">Call</option>
              <option value="Text">Text</option>
              <option value="Video">Video</option>
            </select>

            <div className="mt-5">
              {fileteredData.length === 0 ? (
                <NoTimeline></NoTimeline>
              ) : (
                fileteredData.map((friend, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 shadow-md rounded-md p-4 mb-4 flex items-center gap-4"
                  >
                    <div className="w-10 h-10">
                      {friend.type === "Call" ? (
                        <Image
                          src={callImg}
                          alt={friend.name}
                          className="w-full h-full object-cover rounded-md"
                        />
                      ) : friend.type === "Text" ? (
                        <Image
                          src={textImg}
                          alt={friend.name}
                          className="w-full h-full object-cover rounded-md"
                        />
                      ) : (
                        <Image
                          src={videoImg}
                          alt={friend.name}
                          className="w-full h-full object-cover rounded-md"
                        />
                      )}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#244D3F] dark:text-gray-200">
                        {friend.type} with{" "}
                        <span className="text-gray-600">{friend.name} </span>
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {formattedDate}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        ) : (
          <NoTimeline></NoTimeline>
        )}
      </div>
    </div>
  );
}

export default TimelinePage;
