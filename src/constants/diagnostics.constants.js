 const packageTags = [

    { title: "Popular", isSelected: true },
    { title: "Full Body Checkup", isSelected: false },
    { title: "Heart", isSelected: false },
    { title: "Diabetes", isSelected: false },
    { title: "Lifestyle Management", isSelected: false },
    { title: "Arthritis", isSelected: false },
    { title: "Thyroid", isSelected: false },
    { title: "Cancer", isSelected: false },
    { title: "Kids", isSelected: false },
    { title: "Dssd", isSelected: false },
    { title: "Nose", isSelected: false },
    { title: "Kiea", isSelected: false },

];


const labTestTags = [
  { title: "Tuberculosis", isSelected: false },
  { title: "Malaria", isSelected: false },
  { title: "Pneumonia", isSelected: false },
  { title: "Asthma", isSelected: false },
  { title: "HIV/AIDS", isSelected: false },
  { title: "Diabetes", isSelected: false },
  { title: "Hypertension", isSelected: false },
  { title: "Cancer", isSelected: false },
  { title: "Influenza", isSelected: false },
  { title: "Cholera", isSelected: false },
  { title: "Dengue", isSelected: false },
  { title: "Leprosy", isSelected: false },
  { title: "Hepatitis", isSelected: false },
  { title: "Zika Virus", isSelected: true },
  { title: "Rabies", isSelected: false }
];



 const packageData = [
    { availableAt: "Home", discount: '50', fastingTime: '12-14hr', isSponsor: true, name: "Medihub Gold", numberOfTest: '49', price: '4999', reportTime: '8' },
    { availableAt: "Home", discount: '30', fastingTime: '10-12hr', isSponsor: false, name: "Medihub Silver", numberOfTest: '40', price: '2999', reportTime: '6' },
    { availableAt: "Center", discount: '20', fastingTime: '8-10hr', isSponsor: true, name: "Medihub Platinum", numberOfTest: '60', price: '6999', reportTime: '12' },
    { availableAt: "Home", discount: '25', fastingTime: '10-12hr', isSponsor: false, name: "Medihub Basic", numberOfTest: '25', price: '1999', reportTime: '4' },
    { availableAt: "Center", discount: '40', fastingTime: '12-14hr', isSponsor: false, name: "Medihub Complete", numberOfTest: '70', price: '5999', reportTime: '10' },
    { availableAt: "Home", discount: '35', fastingTime: '10-12hr', isSponsor: true, name: "Medihub Essential", numberOfTest: '30', price: '2499', reportTime: '5' },
    { availableAt: "Center", discount: '15', fastingTime: '8-10hr', isSponsor: false, name: "Medihub Premium", numberOfTest: '55', price: '4999', reportTime: '7' },
    { availableAt: "Home", discount: '50', fastingTime: '12-14hr', isSponsor: true, name: "Medihub Family", numberOfTest: '90', price: '9999', reportTime: '24' },
    { availableAt: "Center", discount: '45', fastingTime: '10-12hr', isSponsor: true, name: "Medihub Diagnostic", numberOfTest: '65', price: '5499', reportTime: '8' },
    { availableAt: "Home", discount: '50', fastingTime: '12-14hr', isSponsor: true, name: "Medihub Wellness", numberOfTest: '35', price: '3499', reportTime: '6' },
    { availableAt: "Home", discount: '20', fastingTime: '8-10hr', isSponsor: false, name: "Medihub Health Plus", numberOfTest: '50', price: '4499', reportTime: '12' },
    { availableAt: "Center", discount: '60', fastingTime: '12-14hr', isSponsor: true, name: "Medihub Exclusive", numberOfTest: '80', price: '7999', reportTime: '10' },
    { availableAt: "Home", discount: '55', fastingTime: '12-14hr', isSponsor: false, name: "Medihub Supreme", numberOfTest: '100', price: '11999', reportTime: '24' },
    { availableAt: "Center", discount: '25', fastingTime: '10-12hr', isSponsor: true, name: "Medihub Diagnostic Plus", numberOfTest: '75', price: '6499', reportTime: '10' },
    { availableAt: "Home", discount: '40', fastingTime: '10-12hr', isSponsor: true, name: "Medihub Fitness", numberOfTest: '20', price: '1499', reportTime: '3' },
    { availableAt: "Center", discount: '35', fastingTime: '8-10hr', isSponsor: false, name: "Medihub Executive", numberOfTest: '45', price: '3999', reportTime: '8' }
];


const labTests = [
  {
    testName: 'Complete Blood Count (CBC)',
    testCode: 'CBC001',
    department: 'Hematology',
    method: 'Automated Analysis',
    specimen: 'Blood',
    numberOfTest: 1,
    availableAt: 'Main Lab',
    price: 500,
    discount: 10,
    fastingTime: '8 hours',
    reportsIn: '24 hours',
    isSponsor: false
  },
  {
    testName: 'Liver Function Test (LFT)',
    testCode: 'LFT002',
    department: 'Biochemistry',
    method: 'Photometric',
    specimen: 'Blood',
    numberOfTest: 7,
    availableAt: 'Main Lab, Satellite Lab',
    price: 1200,
    discount: 15,
    fastingTime: '10-12 hours',
    reportsIn: '48 hours',
    isSponsor: true
  },
  {
    testName: 'Thyroid Profile (T3, T4, TSH)',
    testCode: 'THY003',
    department: 'Endocrinology',
    method: 'Immunoassay',
    specimen: 'Serum',
    numberOfTest: 3,
    availableAt: 'Main Lab',
    price: 800,
    discount: 20,
    fastingTime: 'No fasting required',
    reportsIn: '12 hours',
    isSponsor: false
  },
  {
    testName: 'Lipid Profile',
    testCode: 'LIP004',
    department: 'Cardiology',
    method: 'Enzymatic',
    specimen: 'Serum',
    numberOfTest: 5,
    availableAt: 'Main Lab, Health Center',
    price: 1000,
    discount: 10,
    fastingTime: '8-12 hours',
    reportsIn: '24 hours',
    isSponsor: false
  },
  {
    testName: 'Kidney Function Test (KFT)',
    testCode: 'KFT005',
    department: 'Nephrology',
    method: 'Spectrophotometric',
    specimen: 'Blood, Urine',
    numberOfTest: 6,
    availableAt: 'Main Lab, Mobile Lab',
    price: 1500,
    discount: 5,
    fastingTime: '8 hours',
    reportsIn: '24-48 hours',
    isSponsor: true
  },
  {
    testName: 'Blood Sugar (Fasting)',
    testCode: 'BSF006',
    department: 'Biochemistry',
    method: 'Glucose Oxidase Method',
    specimen: 'Blood',
    numberOfTest: 1,
    availableAt: 'Health Center, Main Lab',
    price: 300,
    discount: 10,
    fastingTime: '8-12 hours',
    reportsIn: '6 hours',
    isSponsor: false
  },
  {
    testName: 'Urine Routine Examination',
    testCode: 'URE007',
    department: 'Pathology',
    method: 'Microscopic Analysis',
    specimen: 'Urine',
    numberOfTest: 1,
    availableAt: 'Main Lab',
    price: 150,
    discount: 0,
    fastingTime: 'No fasting required',
    reportsIn: '2 hours',
    isSponsor: false
  },
  {
    testName: 'COVID-19 RT-PCR Test',
    testCode: 'COV008',
    department: 'Virology',
    method: 'RT-PCR',
    specimen: 'Nasopharyngeal Swab',
    numberOfTest: 1,
    availableAt: 'Mobile Lab, Satellite Lab',
    price: 2500,
    discount: 0,
    fastingTime: 'No fasting required',
    reportsIn: '24 hours',
    isSponsor: true
  },
  {
    testName: 'HBA1C (Glycated Hemoglobin)',
    testCode: 'HBA009',
    department: 'Biochemistry',
    method: 'Chromatography',
    specimen: 'Blood',
    numberOfTest: 1,
    availableAt: 'Health Center',
    price: 700,
    discount: 10,
    fastingTime: 'No fasting required',
    reportsIn: '8 hours',
    isSponsor: false
  },
  {
    testName: 'Vitamin D Test',
    testCode: 'VITD010',
    department: 'Immunology',
    method: 'Chemiluminescence',
    specimen: 'Serum',
    numberOfTest: 1,
    availableAt: 'Main Lab',
    price: 1800,
    discount: 20,
    fastingTime: 'No fasting required',
    reportsIn: '48 hours',
    isSponsor: true
  },
  {
    testName: 'Vitamin B12 Test',
    testCode: 'VITB011',
    department: 'Immunology',
    method: 'Chemiluminescence',
    specimen: 'Serum',
    numberOfTest: 1,
    availableAt: 'Main Lab',
    price: 1400,
    discount: 15,
    fastingTime: 'No fasting required',
    reportsIn: '24 hours',
    isSponsor: true
  },
  {
    testName: 'Iron Studies',
    testCode: 'IRN012',
    department: 'Biochemistry',
    method: 'Colorimetric',
    specimen: 'Blood',
    numberOfTest: 4,
    availableAt: 'Main Lab, Satellite Lab',
    price: 900,
    discount: 10,
    fastingTime: '8 hours',
    reportsIn: '24 hours',
    isSponsor: false
  },
  {
    testName: 'Hepatitis B Surface Antigen (HBsAg)',
    testCode: 'HBS013',
    department: 'Virology',
    method: 'ELISA',
    specimen: 'Serum',
    numberOfTest: 1,
    availableAt: 'Main Lab',
    price: 600,
    discount: 5,
    fastingTime: 'No fasting required',
    reportsIn: '24 hours',
    isSponsor: false
  },
  {
    testName: 'HIV Test (ELISA)',
    testCode: 'HIV014',
    department: 'Virology',
    method: 'ELISA',
    specimen: 'Blood',
    numberOfTest: 1,
    availableAt: 'Main Lab',
    price: 1000,
    discount: 10,
    fastingTime: 'No fasting required',
    reportsIn: '24 hours',
    isSponsor: true
  },
  {
    testName: 'RA Factor',
    testCode: 'RAF015',
    department: 'Immunology',
    method: 'Latex Agglutination',
    specimen: 'Blood',
    numberOfTest: 1,
    availableAt: 'Main Lab',
    price: 700,
    discount: 10,
    fastingTime: 'No fasting required',
    reportsIn: '24 hours',
    isSponsor: false
  },
  {
    testName: 'D-Dimer Test',
    testCode: 'DD016',
    department: 'Coagulation',
    method: 'Immunoassay',
    specimen: 'Plasma',
    numberOfTest: 1,
    availableAt: 'Main Lab',
    price: 2000,
    discount: 0,
    fastingTime: 'No fasting required',
    reportsIn: '12 hours',
    isSponsor: true
  },
  {
    testName: 'Blood Grouping and Rh Typing',
    testCode: 'BGR017',
    department: 'Hematology',
    method: 'Agglutination',
    specimen: 'Blood',
    numberOfTest: 1,
    availableAt: 'Health Center, Main Lab',
    price: 150,
    discount: 0,
    fastingTime: 'No fasting required',
    reportsIn: '1 hour',
    isSponsor: false
  },
  {
    testName: 'Allergy Test (Panel 1)',
    testCode: 'ALL018',
    department: 'Immunology',
    method: 'Skin Prick Test',
    specimen: 'Skin',
    numberOfTest: 20,
    availableAt: 'Main Lab',
    price: 3500,
    discount: 10,
    fastingTime: 'No fasting required',
    reportsIn: '48 hours',
    isSponsor: true
  }
];



const PACKAGES_SWIPER_BREAKPOINTS = {
    425: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    1024: {
      slidesPerView: 2.5,
      slidesPerGroup: 3,
    },
    1440: {
      slidesPerView: 2.5,
      slidesPerGroup: 3,
    },
  };


export {packageData,labTestTags,packageTags,labTests,PACKAGES_SWIPER_BREAKPOINTS}