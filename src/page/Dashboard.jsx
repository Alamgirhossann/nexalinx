import { useState } from "react";
import Card from "../components/Card";
import LargeCard from "../components/LargeCard";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div>
        <h3 className="ms-5 mt-3 text-lg">Start New</h3>
        <Card text={"scripts"} />
      </div>
      <div>
        <h3 className="ms-5 mt-3 text-lg">Recent Projects</h3>
        <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 ">
          <div>
            <Card text={"Paid Debts "} subtext={"total employees"} />
          </div>
          <div>
            <Card text={"Paid Debts "} subtext={"total employees"} />
          </div>
          <div>
            <Card text={"Paid Debts "} subtext={"total employees"} />
          </div>
          <div>
            <Card text={"Paid Debts "} subtext={"total employees"} />
          </div>
        </div>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-3  ">
        <div>
          {" "}
          <LargeCard
            text={"Note Pad "}
            subtext={"Starting Wrtines Note"}
            bgColor={"#F9F6D7"}
          />
        </div>
        <div>
          <LargeCard
            text={"Note Pad "}
            subtext={"Starting Wrtines Note"}
            bgColor={"#E2F1FF"}
          />
        </div>
        <div>
          <LargeCard
            text={"Note Pad "}
            subtext={"Starting Wrtines Note"}
            bgColor={"#F2E8F5"}
          />
        </div>
        <div onClick={() => setIsOpen(!isOpen)} className=" cursor-pointer">
          <LargeCard
            text={"Note Pad "}
            subtext={"Starting Wrtines Note"}
            bgColor={"#CDF6CE"}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
