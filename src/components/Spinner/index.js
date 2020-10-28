import React from "react";
import css from './Spinner.scss';
import BeatLoader from "react-spinners/BeatLoader";

const Spinner = ({ loading }) => {
  return (
    <div className="spinner">
      <BeatLoader
        css={css}
        size={50}
        color={"#D78833"}
        loading={loading}
      />
    </div>
  );
}

export default Spinner;