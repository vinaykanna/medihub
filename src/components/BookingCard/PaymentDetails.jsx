import { twMerge } from "tailwind-merge";

function PaymentDetails() {
  return (
    <div className="border-[1px] border-primary-solid rounded-2xl p-3 mt-2">
      <div className="flex justify-between gap-3 items-center mb-4">
        <div>
          <h3 className="text-xl text-secondary-solid font-nunito-bold font-bold flex-1">
            Payment
          </h3>
        </div>
        <input
          type="text"
          placeholder="Add coupon code"
          className="border-b border-[#BDBDBD] placeholder:text-[#BDBDBD] outline-none px-1"
        />
      </div>
      <PaymentDetail label="Total MRP" value="499.00" />
      <PaymentDetail label="Discount " value="- ₹ 00 /-" />
      <PaymentDetail label="Deduction from wallet" value="₹ 499.00 /-" />
      <PaymentDetail label="Total Amount" value="₹ 499.00 /-" highlighted />
    </div>
  );
}

function PaymentDetail({ label, value, highlighted }) {
  return (
    <div className="flex justify-between gap-2 items-center mt-4">
      <p
        className={twMerge(
          "text-[#656565] text-lg",
          highlighted && "font-bold font-nunito-bold text-primary-solid"
        )}
      >
        {label}
      </p>
      <h4
        className={twMerge(
          "text-[#656565] text-lg",
          highlighted && "font-bold font-nunito-bold text-primary-solid"
        )}
      >
        ₹ {value} /-
      </h4>
    </div>
  );
}

export default PaymentDetails;
