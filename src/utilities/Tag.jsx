const Tag = ({ content }) => {
   const con = content ?? "button";
   return (
      <button className="transition duration-200 text-sm font-bold 
      px-4 py-3 uppercase rounded-full border-1 hover:text-white  hover:bg-primary  border-neutral-200 hover:cursor-pointer bg-neutral-100 ">{con}</button>
   );
};
export default Tag; 
