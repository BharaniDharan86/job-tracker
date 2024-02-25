/* eslint-disable react/prop-types */
import { Button } from "../../ui/Button";
import { Modal } from "../../ui/Modal";
import { JobForm } from "./JobForm";

export const JobHeader = ({ filter, setFilter, sortBy, setSortBy }) => {
  return (
    <Modal>
      <div className="px-6 pt-6">
        <h1 className="text-3xl font-semibold  tracking-wide">MY JOBS</h1>
      </div>

      <div className="flex justify-end mb-4 px-3 gap-3 font-medium text-stone-900">
        <select
          className="select  select-md select-bordered w-full max-w-xs text-lg"
          value={sortBy}
          onChange={(e) => {
            setSortBy(e.target.value);
          }}
        >
          <option value="date-asc">date-asc</option>
          <option value="date-desc">date-desc</option>
        </select>
        <select
          className="select select-bordered w-full max-w-xs text-lg"
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
          }}
        >
          <option value="All">All</option>
          <option value="Pending">Pending</option>
          <option value="Rejected">Rejected</option>
          <option value="Interviewed">Interviewed</option>
          <option value="Offered">Offered</option>
        </select>
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
