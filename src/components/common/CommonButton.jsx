const CommonButton = (props) => {
  return (
    <div>
      <button className="common_btn text-capitalize text-white ff_bakbak fw-normal fs_xs lh_150">
        {props.BtnName}
      </button>
    </div>
  );
};

export default CommonButton;
