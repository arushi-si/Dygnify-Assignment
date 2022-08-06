function Tab1(props) {
  const { setActiveTab, formData, setFormData } = props;
  const { fullname, email, age, phonenumber } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // name:fullname , value:Arushi

    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <>
      <h1 className="text-2xl text-gray-500 font-bold tracking-tight text-center self-start">
        Personal Details
      </h1>
      <span className="flex flex-col justify-start mt-8">
        <label
          className="font-semibold tracking-tight text-gray-600"
          htmlFor="fullname"
        >
          Full Name
        </label>
        <input
          className="p-4 mt-2 border-gray-200 rounded-md outline-none border-[1px] tracking-tight w-[28rem]"
          type="text"
          name="fullname"
          value={fullname}
          placeholder="Steve Job"
          required
          onChange={handleInputChange}
        />
      </span>
      <span className="flex flex-col justify-start mt-8">
        <label
          className="font-semibold tracking-tight text-gray-600"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="p-4 mt-2 border-gray-200 rounded-md outline-none border-[1px] tracking-tight w-[28rem]"
          type="email"
          name="email"
          value={email}
          placeholder="xyz@gmail.com"
          required
          onChange={handleInputChange}
        />
      </span>
      <span className="flex flex-col justify-start mt-8">
        <label
          className="font-semibold tracking-tight text-gray-600"
          htmlFor="age"
        >
          Age
        </label>
        <input
          className="p-4 mt-2 border-gray-200 rounded-md outline-none border-[1px] tracking-tight w-[28rem]"
          type="number"
          name="age"
          value={age}
          placeholder="27"
          required
          onChange={handleInputChange}
        />
      </span>
      <span className="flex flex-col justify-start mt-8">
        <label
          className="font-semibold tracking-tight text-gray-600"
          htmlFor="phonenumber"
        >
          Phone Number
        </label>
        <input
          className="p-4 mt-2 border-gray-200 rounded-md outline-none border-[1px] tracking-tight w-[28rem]"
          type="tel"
          name="phonenumber"
          value={phonenumber}
          placeholder="7281950171"
          required
          onChange={handleInputChange}
        />
      </span>
      <button
        className="py-4 mx-auto mt-8 text-white rounded-md bg-purple-500 w-[28rem]"
        onClick={() => {
          setActiveTab("tab2");
        }}
      >
        Fill Business Details
      </button>
    </>
  );
}

export default Tab1;
