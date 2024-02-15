/* eslint-disable react/prop-types */

export const Button = ({ children }) => {
  return (
    <button className="btn btn-wide bg-[#1e40af] px-4 py-2 text-slate-100 hover:bg-[#1d4ed8] transition-all ">
      {children}
    </button>
  );
};
