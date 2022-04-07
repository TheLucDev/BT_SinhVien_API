import React, { Component } from "react";
import ReactLoading from "react-loading";
import { connect } from "react-redux";

class LoadingComponent extends Component {
  render() {
    return this.props.isLoading ? (
      <div className=" d-flex justify-content-center">
        <ReactLoading type={"spin"} color={"#333"} height={150} width={150} />
      </div>
    ) : (
      <></>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    isLoading: state.loadingReducer.isLoading,
  };
};
export default connect(mapStateToProps, null)(LoadingComponent);
