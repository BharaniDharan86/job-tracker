import Stats from "../components/Stats";
import StatusChart from "../features/dashboard/StatusChart";

export const Dashboard = () => {
  return (
    <div className="px-8 py-4 text-slate-200 relative">
      <h1 className="font-bold text-[40px] m-0 mb-[-5px] uppercase">
        DashBoard
      </h1>
      <Stats />
      <div>
        <StatusChart />
      </div>
    </div>
  );
};
