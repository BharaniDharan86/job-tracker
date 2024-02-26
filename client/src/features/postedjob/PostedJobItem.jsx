/* eslint-disable react/prop-types */
import { Button } from "../../ui/Button";
import { toReadableDate } from "../../utils/toDate";
import { useNavigate } from "react-router-dom";

const PostedJobItem = ({ job }) => {
  const { _id, title, location, company, createdAt } = job;
  const navigate = useNavigate();
  const postedAt = toReadableDate(createdAt);

  return (
    <div className="w-[400px] p-2 pl-4">
      <div className="flex">
        <div className="flex justify-start items-center gap-2">
          <img
            src="https://imgs.search.brave.com/sbdVzJD4CDdh4bn2Xw_8ijNbyx2-ZX92YghKhVbCRoE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/dmVjdG9ybG9nby56/b25lL2xvZ29zL2dv/b2dsZS9nb29nbGUt/dGlsZS5zdmc.svg"
            alt=""
            className="h-11 w-11 rounded-full"
          />
          <div>
            <h1 className="text-xl font-semibold">{title}</h1>
            <h2>{company}</h2>
          </div>
        </div>
      </div>
      <div className="flex flex-col mb-2">
        <span>{location}</span>
        <p>{postedAt}</p>
      </div>
      <Button
        onClick={() => {
          navigate(`${_id}`);
        }}
      >
        View Applicants
      </Button>
    </div>
  );
};

export default PostedJobItem;
