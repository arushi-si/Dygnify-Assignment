import axios from "axios";

export function validateForm(formData) {
  const {
    fullname,
    email,
    age,
    phonenumber,
    gst_no,
    business,
    loan_amount,
    interest,
    loan_tenure,
  } = formData;
  const errors = {};
  if (!fullname) {
    errors["fullname"] = "Full Name is required";
  } else if (
    fullname.length < 3 ||
    fullname.length > 30 ||
    !fullname.match(/^[a-zA-Z ]*$/)
  ) {
    errors["fullname"] = "Name is not valid";
  }

  const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
  if (!email) {
    errors["email"] = "Email is required";
  } else if (!emailRegex.test(email)) {
    errors["email"] = "Email is not valid";
  }

  if (!age) {
    errors["age"] = "Age is required";
  } else if (age < 18 || age > 60) {
    errors["age"] = "Age is not valid";
  }

  if (!phonenumber) {
    errors["phonenumber"] = "Phone Number is required";
  } else if (phonenumber.length < 10 || phonenumber.length > 10) {
    errors["phonenumber"] = "Phone Number is not valid";
  }

  if (!business) {
    errors["business"] = "Business is required";
  } else if (business.length < 3 || business.length > 30) {
    errors["business"] = "Business is not valid";
  }

  if (!gst_no) {
    errors["gst_no"] = "GST Number is required";
  }

  if (!loan_amount) {
    errors["loan_amount"] = "Loan Amount is required";
  }

  if (!interest) {
    errors["interest"] = "Interest is required";
  }

  if (!loan_tenure) {
    errors["loan_tenure"] = "Loan Tenure is required";
  }
  return errors;
}

export function postFormData(formData) {
  axios
    .post("http://localhost:5001/api/form", { ...formData })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  setFormData(initialFormData);
  setActiveTab("tab4");
}
