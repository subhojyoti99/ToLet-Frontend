import GlassmorphismCards from "./GlassmorphismCard";

export const WeProvide = () => {
  return (
    <>
      <div className="text-center">
        <p className="text-3xl font-semibold capitalize text-headingColor relative flex items-center justify-center">
          <span className="relative inline-block">
            <span className="before:absolute before:rounded-lg before:content before:w-20 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100"></span>
            What can you explore here?
            <span className="after:absolute after:rounded-lg after:content after:w-20 after:h-1 after:-bottom-2 after:right-0 after:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100"></span>
          </span>
        </p>
        <div className="mt-12 mb-20">
          <GlassmorphismCards />
        </div>
      </div>
    </>
  );
};
