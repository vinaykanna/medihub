function Tag({ title, isActive }) {
  return isActive ? (
    <div
      className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 h-10 overflow-hidden gap-2.5 px-[18px] py-2.5 rounded-[40px] bg-[#e77e3a]"
      style={{ boxShadow: "0px 4px 4px 0 rgba(231,126,58,0.2)" }}
    >
      <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2">
        <p className="flex-grow-0 flex-shrink-0 text-lg font-bold text-left text-white">
          {title}
        </p>
      </div>
    </div>
  ) : (
    <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 h-10 overflow-hidden gap-2.5 px-[18px] py-2.5 rounded-[40px] bg-white border border-[#7baed5]">
      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
        <span className="flex-grow-0 flex-shrink-0 text-lg text-left text-[#7baed5]">
          {title}
        </span>
      </div>
    </div>
  );
}

export default Tag;
