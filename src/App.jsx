import "./App.css";
import Homepage from "./pages/home.page.jsx";
import LoginPage from "./pages/login.page.jsx";
import NotFoundPage from "./pages/notfound.page.jsx";
import RegisterPage from "./pages/register.page.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import { Toaster } from "react-hot-toast";



function App() {
  return (
    <main className="h-screen min-w-full tracking-wider">
      <BrowserRouter>
        <Routes>
          {/* home page */}
          <Route path="/" element={<Homepage/>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          {/* dynamic route */}
          {/* <Route path="/product/:slug/:id" element={<div>Product page</div>} /> */}

          {/* notfound */}
          <Route path="*"  element={<NotFoundPage/>}/>
        </Routes>
      </BrowserRouter>
      <Toaster/>
    </main>
  );
}

export default App;

// {"":""}
// xml
// user ={name : 'abc'}
// <user>
//  <name>abc</name>
// </user>
