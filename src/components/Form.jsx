import Button from "./UI/Button/Button";
import { GoogleIcon } from "./icons/GoogleIcon";
import { Input } from "./UI/Input/Input";
import { Checkbox } from "./UI/Checkbox/Checkbox";

export default function Form() {
  return (
    <form className="form">
      <div className="form__title">NFT Access</div>
      <div className="form__desc">
        Please fill your detail to access your account.
      </div>

      <Input title="Email" name="email" type="email" placeholder="Your Email" />
      <Input
        title="Password"
        name="password"
        type="password"
        placeholder="Your Password"
      />

      <div className="row">
        <Checkbox label="Remember me" />
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
