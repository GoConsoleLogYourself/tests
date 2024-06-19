import { Routes, Route } from "react-router-dom";
import MainPage from "../Pages/MainPage/MainPage";
import AboutPage from "../Pages/AboutPage/AboutPage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import User from "../Pages/User/User";
import UserDetailsPage from "../Pages/UserDetailsPage/UserDetailsPage";

const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/users" element={<User />} />
        <Route path="/users/:id" element={<UserDetailsPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
  )
}

export default AppRouter
