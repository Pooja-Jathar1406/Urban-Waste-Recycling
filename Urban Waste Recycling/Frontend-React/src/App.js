import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { RecycleTrail } from "./components/RecycleTrail";
import { EWaste } from "./components/E-Waste";
import { AboutUs } from "./components/AboutUs";
import { Login } from "./components/Login";
import { SignUp } from "./components/SignUp";
import { AdminLogin } from "./components/AdminLogin";
import { AddProduct } from "./components/AddProduct";
import { MarketPlace } from "./components/MarketPlace";
import { DomWaste } from "./components/DomWaste";
import { GreenWaste } from "./components/GreenWaste";
import { Debris } from "./components/Debris";
import { Resources } from "./components/Resources";
import { AdminView } from "./components/AdminView";
import { Feedback } from "./components/Feedback";
import { AdminSignUp } from "./components/AdminSignUp";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/recycle-trail"
            element={<RecycleTrail></RecycleTrail>}></Route>
          <Route path="/resources" element={<Resources></Resources>}></Route>
          <Route
            path="/add-product"
            element={<AddProduct></AddProduct>}></Route>
          <Route path="/admin-view" element={<AdminView></AdminView>}></Route>
          <Route path="/feedback" element={<Feedback></Feedback>}></Route>
          <Route
            path="/marketplace"
            element={<MarketPlace></MarketPlace>}></Route>
          <Route path="/e-waste" element={<EWaste></EWaste>}></Route>
          <Route
            path="/green-waste"
            element={<GreenWaste></GreenWaste>}></Route>
          <Route path="/dom-waste" element={<DomWaste></DomWaste>}></Route>
          <Route path="/debris" element={<Debris></Debris>}></Route>
          <Route path="/aboutUs" element={<AboutUs></AboutUs>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route
            path="/admin-login"
            element={<AdminLogin></AdminLogin>}></Route>
          <Route path="/sign-up" element={<SignUp></SignUp>}></Route>
          <Route
            path="/admin-sign-up"
            element={<AdminSignUp></AdminSignUp>}></Route>
          <Route path="/sign-out" element={<Login></Login>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
