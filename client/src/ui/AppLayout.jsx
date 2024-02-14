import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

export const AppLayout = () => {
  return (
    <div className="">
      <div className="h-screen border-3 border-red-500 relative">
        <Header />
      </div>
      <Sidebar />
    </div>
  );
};
