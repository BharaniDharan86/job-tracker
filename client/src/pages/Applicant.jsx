import { useParams } from "react-router-dom";
import ViewApplicant from "../features/applicants/ViewApplicant";

function Applicant() {
  const { id } = useParams();
  return (
    <div className="mt-[60px]">
      <ViewApplicant jobId={id} />
    </div>
  );
}

export default Applicant;
