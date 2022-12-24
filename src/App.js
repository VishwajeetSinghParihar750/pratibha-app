import "./App.css";
import { Switch, Route, Routes, BrowserRouter } from "react-router-dom";
import ResetPass from "./components/ResetPass";
import NewPass from "./components/NewPass";
import Login from "./components/Login";
import Link from "./components/Link";
import MobileOtp from "./components/MobileOtp";
import EmailOtp from "./components/EmailOtp";
import ResponsiveDrawer from "./components/Userlayout/Sidenavbar";
import Userlayout from "./components/Userlayout/Userlayout";
import Dashboard from "./components/Dashboard/Dashboard";
import Team from "./components/Team";
import Addnewmember from "./components/Addnewmember";
import Steplayout from "./components/Steplayout/Steplayout";
import First from "./components/Steps/First";
import Second from "./components/Steps/Second";
import Third from "./components/Steps/Third";
import Fourth from "./components/Steps/Fourth";
import FinalStep from "./components/Steps/FinalStep";

import Protected from "./Util/Protected";

import Homepage from "./components/Report/Homepage/Homepage";

function App() {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          // implement protected later when backend veifies login properly
          // <Protected>
          <Userlayout />
          // </Protected>
        }
      >
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="team" element={<Team />} />
        <Route path="addnewmem" element={<Addnewmember />} />
        {/* <Route path='dash2' element={<ResetPass />} /> */}
      </Route>
      <Route exact path="/steps" element={<Steplayout />}>
        <Route path="1" element={<First />} />
        <Route path="2" element={<Second />} />
        <Route path="3" element={<Third />} />
        <Route path="4" element={<Fourth />} />
        <Route path="5" element={<FinalStep />} />
        {/* <Route path='team' element={<Team />} /> */}
        {/* <Route path='addnewmem' element={<Addnewmember />} /> */}
        {/* <Route path='dash2' element={<ResetPass />} /> */}
      </Route>
      <Route path="/dashie" element={<ResponsiveDrawer />} />
      <Route path="/reset-pass" element={<ResetPass />} />
      <Route path="/login" element={<Login />} />
      <Route path="/link" element={<Link />} />
      <Route path="/reset-pass-new" element={<NewPass />} />
      <Route path="/mobileotp" element={<MobileOtp />} />
      <Route path="/emailotp" element={<EmailOtp />} />

      <Route path="/report" element={<Homepage />}></Route>
    </Routes>
  );
}

export default App;
