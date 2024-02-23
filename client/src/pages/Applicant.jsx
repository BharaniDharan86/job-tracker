import { useParams } from "react-router-dom";
import ViewApplicant from "../features/applicants/ViewApplicant";

function Applicant() {
  const { id } = useParams();
  return (
    <div>
      <ViewApplicant jobId={id} />
    </div>
  );
}

export default Applicant;
