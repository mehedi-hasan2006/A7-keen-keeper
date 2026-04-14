function ProgressNumber() {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        <div className="bg-white shadow-md p-5 rounded-md text-center">
          <h2 className="text-[32px] font-semibold mb-2 text-[#244D3F]">10</h2>
          <p className="text-[#64748B] text-[18px] ">Total Friend</p>
        </div>
        <div className="bg-white shadow-md p-5 rounded-md text-center">
          <h2 className="text-[32px] font-semibold mb-2 text-[#244D3F]">3</h2>
          <p className="text-[#64748B] text-[18px] ">On Track</p>
        </div>
        <div className="bg-white shadow-md p-5 rounded-md text-center">
          <h2 className="text-[32px] font-semibold mb-2 text-[#244D3F]">6</h2>
          <p className="text-[#64748B] text-[18px] ">Need Attention </p>
        </div>
        <div className="bg-white shadow-md p-5 rounded-md text-center">
          <h2 className="text-[32px] font-semibold mb-2 text-[#244D3F]">12</h2>
          <p className="text-[#64748B] text-[18px] ">Interactions This Month</p>
        </div>
      </div>

      <div className="divider py-5 px-5"></div>
    </div>
  );
}

export default ProgressNumber;
