import { useState } from "react";
import Tab1 from "./components/Tab1";
import Tab2 from "./components/Tab2";
import Tab3 from "./components/Tab3";

function App() {
  const [activeTab, setActiveTab] = useState("tab1");

  const [formData, setFormData] = useState({
    // tab1
    fullname: "",
    email: "",
    age: "",
    phonenumber: "",
    // tab2
    gst_no: "",
    business: "",
    // tab3
    loan_amount: "",
    interest: "",
    loan_tenure: "",
  });

  return (
    <div className="flex flex-col items-center w-[28rem] mx-auto mt-16">
      {/* <img
        className="h-20"
        src="https://www.pngitem.com/pimgs/m/495-4957155_finance-icon-loan-approval-icon-png-transparent-png.png"
      /> */}
      <h1 className="text-6xl font-bold text-purple-500 mb-10">Get a Loan</h1>
      <div className="flex self-start mb-8 w-full border-b-2 space-x-2">
        <button
          className={`${
            activeTab === "tab1" ? "active-btn" : ""
          } px-4 py-2 border-2 border-b-0`}
          onClick={() => {
            setActiveTab("tab1");
          }}
        >
          Tab1
        </button>
        <button
          className={`${
            activeTab === "tab2" ? "active-btn" : ""
          } px-4 py-2 border-2 border-b-0`}
          onClick={() => {
            setActiveTab("tab2");
          }}
        >
          Tab2
        </button>
        <button
          className={`${
            activeTab === "tab3" ? "active-btn" : ""
          } px-4 py-2 border-2 border-b-0`}
          onClick={() => {
            setActiveTab("tab3");
          }}
        >
          Tab3
        </button>
      </div>
      {getActiveTab(activeTab, setActiveTab, formData, setFormData)}
    </div>
  );
}

function getActiveTab(activeTab, setActiveTab, formData, setFormData) {
  const props = { activeTab, setActiveTab, formData, setFormData };
  const allTabs = {
    tab1: <Tab1 {...props} />,
    tab2: <Tab2 {...props} />,
    tab3: <Tab3 {...props} />,
  };

  return allTabs[activeTab] || <Tab1 {...props} />;
}

export default App;
