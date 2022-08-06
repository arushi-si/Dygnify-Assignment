import { useState } from "react";
import Tab1 from "./components/Tab1";
import Tab2 from "./components/Tab2";
import Tab3 from "./components/Tab3";
import Tab4 from "./components/Tab4";

function App() {
  const [activeTab, setActiveTab] = useState("tab1");
  const initialFormData = {
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
  };
  const sampleFormData = {
    fullname: "John Doe",
    email: "johndoe@email.com",
    age: "50",
    phonenumber: "1231231230",
    // tab2
    gst_no: "123456",
    business: "Sample Business",
    // tab3
    loan_amount: "5000000",
    interest: "5",
    loan_tenure: "10",
  };
  const [formData, setFormData] = useState(initialFormData);

  return (
    <div className="flex flex-col items-center w-[28rem] mx-auto mt-16">
      {/* <img
        className="h-20"
        src="https://www.pngitem.com/pimgs/m/495-4957155_finance-icon-loan-approval-icon-png-transparent-png.png"
      /> */}
      <span className="flex gap-x-8">
        <h1 className="text-6xl font-bold text-purple-500 mb-10">Get a Loan</h1>
        <button
          className="h-16 bg-purple-500 text-white p-4 font-bold rounded-lg"
          onClick={() => setFormData(sampleFormData)}
        >
          Prefill
        </button>
      </span>
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
      {getActiveTab(
        activeTab,
        setActiveTab,
        formData,
        setFormData,
        initialFormData
      )}
    </div>
  );
}

function getActiveTab(
  activeTab,
  setActiveTab,
  formData,
  setFormData,
  initialFormData
) {
  const props = { activeTab, setActiveTab, formData, setFormData };
  const allTabs = {
    tab1: <Tab1 {...props} />,
    tab2: <Tab2 {...props} />,
    tab3: <Tab3 {...props} initialFormData={initialFormData} />,
    tab4: <Tab4 {...props} />,
  };

  return allTabs[activeTab] || <Tab1 {...props} />;
}

export default App;
