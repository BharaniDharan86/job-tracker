import { Button } from "../../ui/Button";

export const JobHeader = () => {
  return (
    <div>
      <div className="px-6 pt-6">
        <h1 className="text-3xl font-semibold  tracking-wide">MY JOBS</h1>
      </div>
      <div className="flex justify-end mb-4 px-3">
        <Button>Add a New Job</Button>
      </div>
    </div>
  );
};
