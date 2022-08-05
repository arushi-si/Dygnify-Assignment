function Tab2(props) {
  const { setActiveTab, formData, setFormData } = props;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // name:fullname , value:Arushi

    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const { gst_no, business } = formData;

  return (
    <>
      <h1 className="text-2xl text-gray-500 font-bold tracking-tight text-center self-start">
        Business Details
      </h1>
      <span className="flex flex-col justify-start mt-8">
        <label
          className="font-semibold tracking-tight text-gray-600"
          htmlFor="business"
        >
          Business Name
        </label>
        <input
          className="p-4 mt-2 border-gray-200 rounded-md outline-none border-[1px] tracking-tight w-[28rem]"
          type="text"
          name="business"
          value={business}
          placeholder="xyz pvt ltd"
          required
          onChange={handleInputChange}
        />
      </span>
      <span className="flex flex-col justify-start mt-8">
        <label
          className="font-semibold tracking-tight text-gray-600"
          htmlFor="gst_no"
        >
          GST Number
        </label>
        <input
          className="p-4 mt-2 border-gray-200 rounded-md outline-none border-[1px] tracking-tight w-[28rem]"
          type="text"
          name="gst_no"
          value={gst_no}
          required
          onChange={handleInputChange}
        />
      </span>
      <button
        className="py-4 mx-auto mt-8 text-white rounded-md bg-purple-500 w-[28rem]"
        onClick={() => setActiveTab("tab3")}
      >
        Fill Loan application
      </button>
    </>
  );
}

export default Tab2;
