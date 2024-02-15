import { Button } from "../../ui/Button";
import { Modal } from "../../ui/Modal";
import { JobForm } from "./JobForm";

export const JobHeader = () => {
  return (
    <Modal>
      <div className="px-6 pt-6">
        <h1 className="text-3xl font-semibold  tracking-wide">MY JOBS</h1>
      </div>

      <div className="flex justify-end mb-4 px-3">
        <Modal.Open name="job-form">
          <Button>Add a New Job</Button>
        </Modal.Open>
      </div>
      <Modal.Window name="job-form">
        <JobForm />
      </Modal.Window>
    </Modal>
  );
};
