function Tab4(props) {
  const { setActiveTab } = props;

  return (
    <>
      <h1 className="text-2xl text-gray-500 font-bold tracking-tight text-center self-start">
        Form Submitted Successfully
      </h1>

      <button
        className="py-4 mx-auto mt-8 text-white rounded-md bg-purple-500 w-[28rem]"
        onClick={() => setActiveTab("tab1")}
      >
        Get Another Loan
      </button>
    </>
  );
}

export default Tab4;
