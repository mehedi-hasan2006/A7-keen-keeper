function ProgressNumber() {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        <div className="bg-white shadow-md p-5 rounded-md text-center transition-transform transform duration-300 hover:scale-105 dark:bg-gray-800">
          <h2 className="text-[32px] font-semibold mb-2 text-green-500 dark:text-green-500">10</h2>
          <p className="text-[#64748B] text-[18px] dark:text-gray-400">Total Friend</p>
        </div>
        <div className="bg-white shadow-md p-5 rounded-md text-center transition-transform transform duration-300 hover:scale-105 dark:bg-gray-800">
          <h2 className="text-[32px] font-semibold mb-2 text-purple-500 dark:text-purple-500">3</h2>
          <p className="text-[#64748B] text-[18px] dark:text-gray-400">On Track</p>
        </div>
        <div className="bg-white shadow-md p-5 rounded-md text-center transition-transform transform duration-300 hover:scale-105 dark:bg-gray-800">
          <h2 className="text-[32px] font-semibold mb-2 text-amber-500 dark:text-amber-500">6</h2>
          <p className="text-[#64748B] text-[18px] dark:text-gray-400">Need Attention</p>
        </div>
        <div className="bg-white shadow-md p-5 rounded-md text-center transition-transform transform duration-300 hover:scale-105 dark:bg-gray-800">
          <h2 className="text-[32px] font-semibold mb-2 text-blue-500 dark:text-blue-500">12</h2>
          <p className="text-[#64748B] text-[18px] dark:text-gray-400">Interactions This Month</p>
        </div>
      </div>

      <div className="divider py-5 px-5"></div>
    </div>
  );
}

export default ProgressNumber;
