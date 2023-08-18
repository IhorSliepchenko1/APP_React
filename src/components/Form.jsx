import Button from "./UI/Button";
import { GoogleIcon } from "./icons/GoogleIcon";

export default function Form() {
  return (
    <form className="form">
      <div className="form__title">NFT Access</div>
      <div className="form__desc">
        Please fill your detail to access your account.
      </div>
      <label className="forms">
        <span className="forms__title">Email</span>
        <input
          className="forms__input"
          type="email"
          name="Email"
          placeholder="Your Email"
        />
      </label>
      <label className="forms">
        <span className="forms__title">Password</span>
        <input
          className="forms__input"
          type="password"
          name="password"
          placeholder="Your Password"
        />
      </label>
      <div className="row">
        <label className="chk">
          <input type="checkbox" />
          <span>Remember me</span>
        </label>
        <a href="/">Forgot Password?</a>
      </div>
      <div className="form__btn">
        <Button className="btn _primary">Sign in</Button>
        <Button className="btn _secondary">
          <GoogleIcon />
          Sign in with Google
        </Button>
      </div>
      <div className="row _center">
        Don’t have an account? <a href="/">Sign up</a>
      </div>
    </form>
  );
}
