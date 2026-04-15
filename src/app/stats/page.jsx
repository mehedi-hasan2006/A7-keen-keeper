import NoStats from "@/components/NoStats/NoStats";

function StatsPage() {
  return (
    <div className="bg-[#F8FAFC] dark:bg-gray-900 ">
      <div className="max-w-285 mx-auto my-10">
        <h1 className="text-3xl font-bold text-[#244D3F] dark:text-gray-200 mb-5">
          Friendship Analytics
        </h1>

        <NoStats />
      </div>
    </div>
  );
}

export default StatsPage;
