/* eslint-disable react/prop-types */

export const Button = ({ children, type, onClick, rounded, disabled }) => {
  console.log(disabled);
  const btnType = {
    full: "w-full",
    small: "w-fit",
  };

  const btnRounded = {
    full: "rounded-full",
  };

  if (onClick)
    return (
      <button
        onClick={onClick}
        className={`btn btn-wide ${btnType[type]} ${btnRounded[rounded]}  bg-[#1e40af]  px-4 py-2 text-slate-100 hover:bg-[#1d4ed8] transition-all `}
      >
        {children}
      </button>
    );

  return (
    <button
      disabled={true}
      className={`btn btn-wide ${btnType[type]} disabled:cursor-not-allowed  bg-[#1e40af]  px-4 py-2 text-slate-100  hover:bg-[#1d4ed8] transition-all `}
    >
      {children}
    </button>
  );
};
