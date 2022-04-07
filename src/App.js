import "./App.css";
import "antd/dist/antd.css";
import AxiosQuanLySinhVien from "./Axios-QuanLySinhVien/AxiosQuanLySinhVien";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ChiTietSinhVien from "./Page-QLSV/ChiTietSinhVien/ChiTietSinhVien";
import Home from "./Page-QLSV/Home/Home";
import NavRouter from "./Component/NavRouter/NavRouter";
import LoadingComponent from "./Component/LoadingComponent/LoadingComponent";
function App() {
  return (
    <BrowserRouter>
      <NavRouter />
      <LoadingComponent />
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route path={"/dssv"} component={AxiosQuanLySinhVien} />
        <Route path={"/detail/:id"} component={ChiTietSinhVien} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
