import Friend from "./Friend";

async function Friends() {
  const res = await fetch("https://keen-keeper-bay.vercel.app/friends.json", {
    cache: "no-store",
  });
  const data = await res.json();

  return (
    <div className="pb-10 px-5">
      <div className="text-2xl font-semibold pb-3 text-[#1F2937] dark:text-white">
        Your Friends
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.map((friend) => (
          <Friend key={friend.id} friend={friend} />
        ))}
      </div>
    </div>
  );
}

export default Friends;
