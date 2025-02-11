const SecitonTitle = ({heading, subHeading}) => {
  return (
    <div className="mx-auto text-center md:w-1/4 my-8">
      <p className="text-green-600 mb-2 lg:text-lg">--- {subHeading} ---</p>
      <h3 className="lg:text-3xl text-xl uppercase lg:border-y-4 border-y-2 py-3 font-bold">{heading}</h3>
    </div>
  );
};

export default SecitonTitle;
