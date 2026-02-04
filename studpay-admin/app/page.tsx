

export default function Home() {
  return (
    <div className="dashboard-bg">
      <div className="banner-bg mb-8 shadow-3xl rounded-2xl p-6 pb-4 flex items-center justify-between">
        <div>
          <h1 className="text-white text-[57px] font-normal leading-10">Welcome back, Admin!</h1>
          <p className="text-lg font-normal leading-7 text-white-1000">Here's what's happening with StudPay today</p>
        </div>
        <div className="text-end">
          <span className="block text-sm font-normal leading-5 text-purple-1000">Today's Date</span>
          <h6 className="text-xl font-normal leading-7 text-white">5/24/2025</h6>
        </div>
      </div>
      <div className="flex items-center gap-2 mb-4">
        <div className="line-bg rounded-full h-8 w-1 block"></div>
        <h4 className="text-2xl font-normal leading-8 text-blue-1100">Key Performance Indicators</h4>
      </div>
      <div className="grid grid-cols-3 gap-6">
        <div className="shadow-4xl border border-gray-1600 rounded-xl bg-white p-6 flex items-start justify-between">
          <div className="">
            <h6 className="text-sm font-medium leading-5 mb-2 text-gray-1100">Total Active Students</h6>
            <span className="block text-2xl font-bold leading-8 text-blue-1200 mb-1">24,563</span>
            <h6 className="text-sm font-medium leading-5 text-green-1000">+12% from last month</h6>
          </div>
          <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gray-1300">
            <img src="/images/user-icon.svg" className="gray-icon w-6 h-6" alt=""></img>
          </div>
        </div>
        <div className="shadow-4xl border border-gray-1600 rounded-xl bg-white p-6 flex items-start justify-between">
          <div className="">
            <h6 className="text-sm font-medium leading-5 mb-2 text-gray-1100">Verified Users</h6>
            <span className="block text-2xl font-bold leading-8 text-blue-1200 mb-1">22,481</span>
            <h6 className="text-sm font-medium leading-5 text-green-1000">+8% from last month</h6>
          </div>
          <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gray-1300">
            <img src="/images/tick-circle.svg" className="gray-icon w-6 h-6" alt=""></img>
          </div>
        </div>
        <div className="shadow-4xl border border-gray-1600 rounded-xl bg-white p-6 flex items-start justify-between">
          <div className="">
            <h6 className="text-sm font-medium leading-5 mb-2 text-gray-1100">Total Amount Blocked in AVI</h6>
            <span className="block text-2xl font-bold leading-8 text-blue-1200 mb-1">€12.4M</span>
            <h6 className="text-sm font-medium leading-5 text-green-1000">+5% from last month</h6>
          </div>
          <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gray-1300">
            <img src="/images/shield-icon.svg" className="gray-icon w-6 h-6" alt=""></img>
          </div>
        </div>
        <div className="shadow-4xl border border-gray-1600 rounded-xl bg-white p-6 flex items-start justify-between">
          <div className="">
            <h6 className="text-sm font-medium leading-5 mb-2 text-gray-1100">Monthly Disbursement Volume</h6>
            <span className="block text-2xl font-bold leading-8 text-blue-1200 mb-1">€3.8M</span>
            <h6 className="text-sm font-medium leading-5 text-green-1000">+15% from last month</h6>
          </div>
          <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gray-1300">
            <img src="/images/euro-icon.svg" className="gray-icon w-6 h-6" alt=""></img>
          </div>
        </div>
        <div className="shadow-4xl border border-gray-1600 rounded-xl bg-white p-6 flex items-start justify-between">
          <div className="">
            <h6 className="text-sm font-medium leading-5 mb-2 text-gray-1100">New Subscriptions This Week</h6>
            <span className="block text-2xl font-bold leading-8 text-blue-1200 mb-1">1,247</span>
            <h6 className="text-sm font-medium leading-5 text-green-1000">+23% from last week</h6>
          </div>
          <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gray-1300">
            <img src="/images/user-plus-icon.svg" className="gray-icon w-6 h-6" alt=""></img>
          </div>
        </div>
        <div className="shadow-4xl border border-gray-1600 rounded-xl bg-white p-6 flex items-start justify-between">
          <div className="">
            <h6 className="text-sm font-medium leading-5 mb-2 text-gray-1100">Documents Pending Review</h6>
            <span className="block text-2xl font-bold leading-8 text-blue-1200 mb-1">156</span>
            <h6 className="text-sm font-medium leading-5 text-green-1000">-8% from yesterday</h6>
          </div>
          <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gray-1300">
            <img src="/images/kyc-icon.svg" className="gray-icon w-6 h-6" alt=""></img>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 mb-4 mt-8">
        <div className="line-bg rounded-full h-8 w-1 block"></div>
        <h4 className="text-2xl font-normal leading-8 text-blue-1100">Analytics Overview</h4>
      </div>
      <div className="grid grid-cols-2 gap-8">
        <div className="shadow-4xl border border-gray-1600 rounded-xl bg-white p-6 flex items-start justify-between">
          <h4 className="text-lg font-normal leading-7 tracking-[-0.45px] text-blue-1200">Monthly Transaction Volume</h4>
        </div>
      </div>
    </div>
  );
}
