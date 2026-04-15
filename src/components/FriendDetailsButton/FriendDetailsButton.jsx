"use client";
import { TbPhoneCall } from "react-icons/tb";
import { BsChatText } from "react-icons/bs";
import { IoVideocamOutline } from "react-icons/io5";
import { useContext } from "react";
import { ButtonContext } from "@/context/ButtonContext";
import { toast } from "react-toastify";

function FriendDetailsButton({ friend }) {
  const { friendData, setFriendData, selectedTimeline, setSelectedTimeline } =
    useContext(ButtonContext);

  const handleCallButton = () => {
    setFriendData([...friendData, { ...friend, type: "Call" }]);

    toast.success(`You have called ${friend.name}!`, {
      position: "top-center",
      autoClose: 3000,
    });
  };

  const handleTextButton = () => {
    setFriendData([...friendData, { ...friend, type: "Text" }]);

    toast.success(`You have texted ${friend.name}!`, {
      position: "top-center",
      autoClose: 3000,
    });
  };

  const handleVideoButton = () => {
    setFriendData([...friendData, { ...friend, type: "Video" }]);

    toast.success(`You have started a video call with ${friend.name}!`, {
      position: "top-center",
      autoClose: 3000,
    });
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-[#244D3F] dark:text-gray-200  mb-3">
          Quick Check-In
        </h2>
      </div>
      <div className="grid lg:grid-cols-3 gap-5">
        <div
          onClick={handleCallButton}
          className="flex flex-col items-center justify-center p-5 bg-gray-100 dark:bg-gray-700 rounded-md cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
        >
          <p>
            <TbPhoneCall />
          </p>
          <p>Call</p>
        </div>
        <div
          onClick={handleTextButton}
          className="flex flex-col items-center justify-center p-5  bg-gray-100 dark:bg-gray-700 rounded-md cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
        >
          <p>
            <BsChatText />
          </p>
          <p>Text</p>
        </div>
        <div
          onClick={handleVideoButton}
          className="flex flex-col items-center justify-center p-5 bg-gray-100 dark:bg-gray-700 rounded-md cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
        >
          <p>
            <IoVideocamOutline />
          </p>
          <p>Video</p>
        </div>
      </div>
    </div>
  );
}

export default FriendDetailsButton;
