import { Button } from "../ui/Button";
const VerifyEmail = () => {
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Enter the 6 digit code"
          className="input w-full max-w-xs"
        />
        <Button>Submit</Button>
      </form>
    </div>
  );
};

export default VerifyEmail;
