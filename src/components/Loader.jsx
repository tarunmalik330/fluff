import logoimg from "../assets/images/svg/getbtnimg.svg";

const Loader = () => {
  return (
    <>
      <div className="min-vh-100 w-100 position-fixed bg_green start-0 top-0 d-flex align-items-center justify-content-center prelader">
        <div className="typewriter">
          <h1 className="ff_outfit d-flex gap_14 text-uppercase text-white overflow-hidden text-nowrap cursor_pointer lh_130 fs_xl py-4">
            <img src={logoimg} alt="logoimg" />
            Fluff
          </h1>
        </div>
      </div>
    </>
  );
};

export default Loader;
