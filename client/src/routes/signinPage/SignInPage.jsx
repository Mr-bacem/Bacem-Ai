import { SignIn } from "@clerk/clerk-react";
import "./signInPage.css";

const SingInPage = () => {
  return (
    <div className="singInPage">
      <SignIn
        path="/sign-in"
        signUpUrl="/sign-up"
        forceRedirectUrl="dashboard"
      />
    </div>
  );
};

export default SingInPage;
