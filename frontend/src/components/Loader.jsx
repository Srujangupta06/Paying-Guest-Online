import FadeLoader from "react-spinners/FadeLoader";
const Loader = () => {
  return (
    <div className="minh-screen md:min-h-[80vh] flex flex-col justify-center items-center">
      <FadeLoader color="#3498db" height={15} width={5} radius={2} margin={2} />
      <h3 className="text-2xl font-semibold my-2">
        We are fetching information for you
      </h3>
      <p className="text-sm">Thanks for your Patience</p>
    </div>
  );
};

export default Loader;
