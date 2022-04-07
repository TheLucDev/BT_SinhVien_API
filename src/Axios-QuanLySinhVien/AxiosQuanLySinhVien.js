import React, { Component } from "react";
import { connect } from "react-redux";
import DanhSachSinhVien from "./DanhSachSinhVien/DanhSachSinhVien";
import ModalSinhVien from "./ModalSinhVien/ModalSinhVien";
import {
  bat_loading_action,
  tat_loading_action,
} from "./Redux/action/loadingAction";
import { SET_DANH_SACH_SV } from "./Redux/constant/quanlySvConstant";
import { sinhVienServ } from "./SinhVienServ/sinhVienServ";

class AxiosQuanLySinhVien extends Component {
  state = {
    dssv: [],
  };
  componentDidMount() {
    let isSuccess = true;
    this.props.batLoading();
    sinhVienServ
      .layDanhSachSinhVIen()
      .then((res) => {
        this.props.tatLoading();
        // console.log(res);
        // this.setState({ dssv: res.data });
        this.props.setDssv(res.data);
        //xuathongbao
      })
      .catch((err) => {
        this.props.tatLoading();
        isSuccess = false;
        console.log(err);
      });
  }
  render() {
    return (
      <div>
        <p className="display-3 pt-2 text-center">Quản lý sinh viên</p>
        <ModalSinhVien />
        <DanhSachSinhVien />
      </div>
    );
  }
}

let mapDispatchtoProps = (dispatch) => {
  return {
    setDssv: (dssv) => {
      dispatch({
        type: SET_DANH_SACH_SV,
        payload: dssv,
      });
    },
    batLoading: () => {
      dispatch(bat_loading_action());
    },
    tatLoading: () => {
      dispatch(tat_loading_action());
    },
  };
};

export default connect(null, mapDispatchtoProps)(AxiosQuanLySinhVien);

// let mapDispatch = (dispatch) => {
//   dispatch({ type: SET_DANH_SACH_SV });
// };

// let sayHello = (value) => {
//   console.log("yes", value);
// };

// mapDispatch(sayHello);
