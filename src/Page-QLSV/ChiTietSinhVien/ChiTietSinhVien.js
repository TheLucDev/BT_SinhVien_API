import axios from "axios";
import React, { Component } from "react";
import LoadingComponent from "../../Component/LoadingComponent/LoadingComponent";

export default class ChiTietSinhVien extends Component {
  state = {
    thongTinChiTiet: null,
  };
  componentDidMount() {
    let idUrl = this.props.match.params.id;
    axios({
      method: "GET",
      url: `https://62179cc271e7672e53858103.mockapi.io/sv/${idUrl}`,
    })
      .then((res) => {
        // console.log("res", res);
        // this.setState({ isLoading: false });
        this.setState({ thongTinChiTiet: res.data });
      })
      .catch((err) => {
        // this.setState({ isLoading: false });

        console.log("err", err);
      });
  }
  render() {
    // console.log(this.props.match);
    return (
      <div className="container p-5">
        {/* {this.state.isLoading ? <LoadingComponent /> : ""} */}
        <p>Tên: {this.state.thongTinChiTiet?.name}</p>
        <p>Email: {this.state.thongTinChiTiet?.email}</p>
        <p>Phone: {this.state.thongTinChiTiet?.phone}</p>
      </div>
    );
  }
}
