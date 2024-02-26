import { JobPostForm } from "../features/jobs/JobPostForm";
import PostedJobList from "../features/postedjob/PostedJobList";
import { Button } from "../ui/Button";
import { Modal } from "../ui/Modal";
const PostedJob = () => {
  return (
    <Modal>
      <div className="flex items-center  w-[100%] justify-between p-5 mt-[60px]">
        <h1>PostedJob</h1>
        <Modal.Open name="Post-Job">
          <Button>Post New Job</Button>
        </Modal.Open>
      </div>
      <PostedJobList />
      <Modal.Window name="Post-Job">
        <JobPostForm />
      </Modal.Window>
    </Modal>
  );
};

export default PostedJob;
