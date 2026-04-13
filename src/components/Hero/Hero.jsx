import { FiPlus } from "react-icons/fi";

function Hero() {
  return (
    <div className="pt-20">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">
          Friends to keep close in your life
        </h1>
        <p className="text-[#64748B]">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        <div className="flex justify-center">
            <button className="flex justify-center items-center gap-2 bg-green-800 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded cursor-pointer my-5">
          <FiPlus /> Add Friend
        </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
