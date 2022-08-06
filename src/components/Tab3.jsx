import { toast, Toaster } from "react-hot-toast";
import { validateForm, postFormData } from "./helpers/formHelper";

function Tab3(props) {
  const { formData, setFormData } = props;

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const { loan_amount, interest, loan_tenure } = formData;

  return (
    <>
      <h1 className="text-2xl text-gray-500 font-bold tracking-tight text-center self-start">
        Loan Application
      </h1>
      <span className="flex flex-col justify-start mt-8">
        <label
          className="font-semibold tracking-tight text-gray-600"
          htmlFor="loan_amount"
        >
          Loan Amount
        </label>
        <input
          className="p-4 mt-2 border-gray-200 rounded-md outline-none border-[1px] tracking-tight w-[28rem]"
          type="text"
          name="loan_amount"
          value={loan_amount}
          placeholder="10 lacs"
          required
          onChange={handleInputChange}
        />
      </span>
      <span className="flex flex-col justify-start mt-8">
        <label
          className="font-semibold tracking-tight text-gray-600"
          htmlFor="interest"
        >
          Interest Rate
        </label>
        <input
          className="p-4 mt-2 border-gray-200 rounded-md outline-none border-[1px] tracking-tight w-[28rem]"
          type="number"
          name="interest"
          value={interest}
          placeholder="15%"
          required
          onChange={handleInputChange}
        />
      </span>
      <span className="flex flex-col justify-start mt-8">
        <label
          className="font-semibold tracking-tight text-gray-600"
          htmlFor="loan_tenure"
        >
          Loan Tenure
        </label>
        <input
          className="p-4 mt-2 border-gray-200 rounded-md outline-none border-[1px] tracking-tight w-[28rem]"
          type="number"
          name="loan_tenure"
          value={loan_tenure}
          placeholder="10 years"
          required
          onChange={handleInputChange}
        />
      </span>
      <button
        className="py-4 mx-auto mt-8 text-white rounded-md bg-purple-500 w-[28rem]"
        onClick={() => {
          const errors = validateForm(formData);
          const isFormValid = Object.keys(errors).length === 0;

          if (isFormValid) {
            console.log(formData);
            postFormData(formData);
          } else {
            toast(Object.values(errors)[0]);
            // Object.values(errors).forEach((err) => {
            //   toast(err);
            // });
          }
        }}
      >
        Submit Form
      </button>
      <Toaster />
    </>
  );
}

export default Tab3;
