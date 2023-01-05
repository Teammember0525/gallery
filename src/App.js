import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import {Container} from 'react-bootstrap';

import Header from "./components/layout/header/Header";
import DetailPage from "./screens/detail/DetailPage";
import HomePage from "./screens/home/HomePage";
import Footer from "./components/layout/footer/Footer";

function App() {

const Layout = () => {
  return(
    <div>
      <Header/>
        <Outlet/>
      <Footer/>
    </div>
  )
}

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/detail/" element={<DetailPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
