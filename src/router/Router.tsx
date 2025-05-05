import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "layout";
import * as routes from "constants/routes";
import StudentDashboard from "pages/Student";
import StaffDashboard from "pages/Staff";
import Signup from 'pages/Siginup';
import Login from 'pages/login';
import Forgot_password  from 'pages/forgot_password/forgot_password';
import Resetpassword  from 'pages/reset-password';
import Dashboard from "pages/dashboard";
import { AdminDash } from "pages/admin/dashboard";







const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.HOME} element={<Layout />}>
          <Route index element={<AdminDash />} />
        </Route>
        <Route path={routes.LOGIN} element={<Login />} />
        <Route path={routes.SIGNUP} element={<Signup />} />
        <Route path={routes.FORGOT_PASSWORD} element={<Forgot_password />} />
        <Route path={routes.RESET_PASSWORD} element={<Resetpassword />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
