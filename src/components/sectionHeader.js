export const SectionHeader = ({ mainHeading, subHeading }) => {
  return (<>
  <div className="flex flex-col justify-center items-center leading-5 font-serif p-4 ">
    <h1 className="text-4xl text-slate-800 uppercase font-semibold ">
        {mainHeading}
    </h1>
    <h3 className="text-2xl text-gray-700 italic" >
        {subHeading}
    </h3>
  </div>
  </>);
};
