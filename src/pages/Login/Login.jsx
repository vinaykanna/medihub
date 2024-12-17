import loginHero from "@assets/images/login_hero.svg";
import TextField from "@components/TextField";
import Header from "@components/Header";
import { Link } from "react-router-dom";
import Button from "@components/Button";
import { twJoin } from "tailwind-merge";
import { useState } from "react";
import { loginTitles } from "@constants/login.constants";
import SelectField from "@components/SelectField";

function Login() {
  const [loginType, setLoginType] = useState("corporate");
  const [otpSent, setOtpSent] = useState(false);
  // const [otp, setOtp] = useState("");
  // const [state, setState] = useState({
  //   corporateEmail: "",
  //   password: "",
  //   policy: "",
  //   policyNumber: "",
  //   phoneNumber: "",
  // });

  const handleOtp = () => {
    setOtpSent(true);
  };

  const handleSubmit = () => {};
  return (
    <>
      <section
        className={twJoin(
          "w-full min-h-screen",
          "bg-gradient-to-b from-primary-light from-10%"
        )}
      >
        <Header />
        <div
          className={twJoin(
            "max-w-[1087px] px-4 w-full mx-auto mt-10",
            "flex justify-between text-center items-center gap-32"
          )}
        >
          <article className="max-[400px] w-1/2">
            <img src={loginHero} alt="" />
          </article>
          <article
            className={twJoin(
              "max-[400px] w-1/2 py-7 px-10 bg-white",
              "rounded-3xl shadow-[0_4px_20px_0px_#E77E3A33]"
            )}
          >
            <header>
              <h1 className="text-3xl leading-[40px] font-nunito-bold text-primary-solid">
                {loginTitles[loginType]}
              </h1>
              <p className="text-secondary-solid font-nunito-bold text-base mt-2 font-bold">
                Your Digital Health Hub
              </p>
            </header>
            <main className="mt-8">
              <Fields loginType={loginType} otpSent={otpSent} />
              {loginType === "phone" && !otpSent ? (
                <Button onClick={handleOtp} className="w-full mt-7">
                  Get OTP
                </Button>
              ) : (
                <Button onClick={handleSubmit} className="w-full mt-7">
                  Login
                </Button>
              )}
            </main>
            <footer className="mt-3">
              <TermsAndPrivacy />
              <div className="flex gap-2 items-center mt-5">
                <hr className="flex-1 border-secondary-medium" />
                <span className="text-secondary-solid">OR</span>
                <hr className="flex-1  border-secondary-medium" />
              </div>
              <LoginNavigationButtons
                loginType={loginType}
                setLoginType={setLoginType}
              />
            </footer>
          </article>
        </div>
      </section>
    </>
  );
}

function Fields({ loginType, otpSent }) {
  return (
    <>
      {loginType === "corporate" && (
        <>
          <TextField
            id="corporateEmail"
            placeholder="Enter your corporate email ID"
            label="Enter Corporate Email ID"
            className="text-left"
            autoFocus
            required
            type="email"
            inputClassName="placeholder:text-[#BDBDBD]"
          />
          <TextField
            id="password"
            placeholder="Enter Password"
            label="Enter Password"
            className="text-left mt-5"
            required
            type="password"
            inputClassName="placeholder:text-[#BDBDBD]"
          />
        </>
      )}
      {loginType === "phone" && (
        <>
          <TextField
            id="phoneNumber"
            placeholder="Enter phone number"
            label="Enter Phone Number"
            className="text-left"
            autoFocus
            required
            inputClassName="placeholder:text-[#BDBDBD]"
          />
          {otpSent && (
            <TextField
              id="otp"
              placeholder="Enter OTP"
              label="Enter OTP"
              className="text-left mt-5"
              required
              type="password"
              inputClassName="placeholder:text-[#BDBDBD]"
            />
          )}
        </>
      )}
      {loginType === "insurance" && (
        <>
          <SelectField
            defaultOptionLabel="Select your policy"
            className="text-left"
            selectClassName="w-full"
            label="Your Policy"
            id="policy"
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </SelectField>
          <TextField
            id="policyNumber"
            placeholder="Enter your policy number"
            label="Enter Your Policy Number"
            className="text-left mt-5"
            required
            inputClassName="placeholder:text-[#BDBDBD]"
          />
        </>
      )}
    </>
  );
}

function TermsAndPrivacy() {
  return (
    <p className="text-sm leading-6">
      By signing in you agree to our <br />{" "}
      <Link to="/terms-and-conditions" className="text-secondary-solid">
        Terms and Conditions
      </Link>{" "}
      and{" "}
      <Link to="/privacy-policy" className="text-secondary-solid">
        Privacy Policy
      </Link>
    </p>
  );
}

function LoginNavigationButtons({ loginType, setLoginType }) {
  return (
    <>
      {(loginType === "phone" || loginType === "insurance") && (
        <button
          onClick={() => setLoginType("corporate")}
          className="text-primary-solid text-base font-semibold block mt-4 mx-auto"
        >
          Login with a corporate account
        </button>
      )}
      {(loginType === "insurance" || loginType === "corporate") && (
        <button
          onClick={() => setLoginType("phone")}
          className="text-primary-solid text-base font-semibold block mt-4 mx-auto"
        >
          Login using phone number
        </button>
      )}
      {(loginType === "phone" || loginType === "corporate") && (
        <button
          onClick={() => setLoginType("insurance")}
          className="text-primary-solid text-base font-semibold block mt-4 mx-auto"
        >
          Login with a insurance account
        </button>
      )}
    </>
  );
}

export default Login;
