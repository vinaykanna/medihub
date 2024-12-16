const initialState = {

    package: [], // Array to hold multiple packages
    labTest: [], // Array to hold multiple lab tests
  

    currentStep: "preferenceSelection", // Possible values: 'preferenceSelection', 'addPatient', 'selectAddress', 'payment'
    steps: [
      { name: "preferenceSelection", active: true, completed: false },
      { name: "addPatient", active: false, completed: false },
      { name: "selectAddress", active: false, completed: false },
      { name: "payment", active: false, completed: false }
    ],
  
    // Data for preference selection (first part of the form)
    preferenceSelection: {
      visitType: "", // Can be 'home' or 'center'
      inputFields: {
        field1: "", // Example field for input 1
        field2: "", // Example field for input 2
        field3: "", // Example field for input 3
        field4: ""  // Example field for input 4
      }
    },
  
    // Data for add patient step (second part of the form)
    addPatient: {
      patients: [] // Array to hold multiple patient IDs
    },
  
    // Data for select address step (if home visit is selected)
    selectAddress: {
      state: "",
      city: "",
      landmark: "",
      streetName: "",
      pincode: ""
    },
  
    // Payment-related data (fourth part of the form)
    payment: {
      paymentMethod: "", // Example values: 'creditCard', 'debitCard', 'netBanking', 'UPI', etc.
      transactionId: "", // To store the transaction ID if applicable
      paymentStatus: "pending" // Possible values: 'pending', 'success', 'failed'
    }
  };
  
  export default initialState;
  