"use client";
import NoTimeline from "@/components/NoTimeline/NoTimeline";
import { ButtonContext } from "@/context/ButtonContext";
import { useContext } from "react";

function TimelinePage() {
  const { friendData } = useContext(ButtonContext);
  const currentDate = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = currentDate.toLocaleDateString("en-US", options);

  return (
    <div className="bg-[#F8FAFC] dark:bg-gray-900">
      <div className="max-w-285 mx-auto my-10 px-5">
        <h1 className="text-3xl font-bold text-[#244D3F] dark:text-gray-200 mb-5">
          Timeline
        </h1>

        {friendData.length > 0 ? (
          <div>
            <select
              defaultValue="Pick a Timeline"
              className="select select-success dark:text-gray-200 w-full max-w-xs "
            >
              <option disabled={true}>Pick a Timeline</option>
              <option>Call</option>
              <option>Text</option>
              <option>Video</option>
            </select>

            <div className="mt-5">
              {friendData.map((friend, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 shadow-md rounded-md p-4 mb-4 flex items-center gap-4"
                >
                  <div className="w-20 h-20 bg-amber-200">

                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#244D3F] dark:text-gray-200">
                      Meet up With <span className="text-gray-400">{friend.name} </span>
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {formattedDate}
                    </p>
                  </div>
                </div>
              ))}
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
