export const Logout = () => {
  return (
    <div>
      <h3 className="text-3xl font-medium text-center mb-10">
        Are you sure you want to log out?
      </h3>
      <div className="flex gap-6 justify-center">
        <button
          className="bg-gray hover:bg-lightBlack text-black text-base font-bold rounded-xl py-[14px] px-12 hover:scale-110 hover:shadow-3xl duration-300"
          type="button"
        >
          Log out
        </button>
        <button
          className="bg-black text-white hover:bg-darkYellow hover:text-black text-base font-bold rounded-xl py-[14px] px-12 hover:scale-110 hover:shadow-3xl duration-300"
          type="button"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
