import loginHero from "@assets/images/login_hero.svg";
import TextField from "@components/TextField";
import Header from "@components/Header";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { twJoin } from "tailwind-merge";

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
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
            <form onSubmit={handleSubmit}>
              <header>
                <h1 className="text-3xl leading-[40px] font-nunito-bold text-primary-solid">
                  Corporate Login
                </h1>
                <p className="text-secondary-solid font-nunito-bold text-base mt-2 font-bold">
                  Your Digital Health Hub
                </p>
              </header>
              <main className="mt-8">
                <TextField
                  id="corporate_email"
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
                <Button type="submit" className="w-full mt-7">
                  Login
                </Button>
              </main>
            </form>
            <footer className="mt-3">
              <p className="text-sm leading-6">
                By signing in you agree to our <br />{" "}
                <Link
                  to="/terms-and-conditions"
                  className="text-secondary-solid"
                >
                  Terms and Conditions
                </Link>{" "}
                and{" "}
                <Link to="/privacy-policy" className="text-secondary-solid">
                  Privacy Policy
                </Link>
              </p>
              <div className="flex gap-2 items-center mt-5">
                <hr className="flex-1 border-secondary-medium" />
                <span className="text-secondary-solid">OR</span>
                <hr className="flex-1  border-secondary-medium" />
              </div>
              <Link
                to="/login"
                className="text-primary-solid text-base font-semibold block mt-4"
              >
                Login using phone number
              </Link>
              <Link
                to="/login"
                className="text-primary-solid text-base font-semibold block mt-4"
              >
                Login with a insurance account
              </Link>
            </footer>
          </article>
        </div>
      </section>
    </>
  );
}

export default Login;
