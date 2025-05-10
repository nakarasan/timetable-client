import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from 'layout';
import Signup from 'pages/SignUp';
import Login from 'pages/login';
import Forgot_password from 'pages/forgot_password/forgot_password';
import Resetpassword from 'pages/reset-password';
import { RootState } from 'store';
import { useSelector } from 'react-redux';
import { Staffs } from 'pages/Staffs';
import { Students } from 'pages/Students';
import { Departments } from 'pages/Departments';
import { AdminDashboard } from 'pages/AdminDashboard';
import { AddTimetable } from 'pages/Timetable';
import { Batches } from 'pages/Batches';
import { Subjects } from 'pages/Subjects';
import { Users } from 'pages/Users';

const Router = () => {
  const { auth } = useSelector((state: RootState) => state.auth);
  const AdminRoute: React.FC<{ children: React.ReactNode }> = ({
    children,
  }) => {
    if (auth?.type != 'admin') {
      return (
        <Navigate
          to='/login'
          replace
        />
      );
    }
    return <>{children}</>;
  };
  const StudentRoute: React.FC<{ children: React.ReactNode }> = ({
    children,
  }) => {
    if (auth?.type != 'admin') {
      return (
        <Navigate
          to='/login'
          replace
        />
      );
    }
    return <>{children}</>;
  };
  const StaffRoute: React.FC<{ children: React.ReactNode }> = ({
    children,
  }) => {
    if (auth?.type != 'admin') {
      return (
        <Navigate
          to='/login'
          replace
        />
      );
    }
    return <>{children}</>;
  };
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route
          path='/'
          element={
            <AdminRoute>
              <Dashboard />
            </AdminRoute>
          }
        ></Route> */}
        <Route
          path='/'
          element={<Layout />}
        >
          <Route
            index
            element={<AdminDashboard />}
          />
          <Route
            path='/staffs'
            element={<Staffs />}
          />
          <Route
            path='/timetable'
            element={<AddTimetable />}
          />
          <Route
            path='/students'
            element={<Students />}
          />
          <Route
            path='/master-data/departments'
            element={<Departments />}
          />
          <Route
            path='/users'
            element={<Users />}
          />
          <Route
            path='/master-data/batches'
            element={<Batches />}
          />
          <Route
            path='/master-data/subjects'
            element={<Subjects />}
          />
          <Route
            path='/login'
            element={<Login />}
          />
          <Route
            path='/signup'
            element={<Signup />}
          />
          <Route
            path='/fogot-password'
            element={<Forgot_password />}
          />
          <Route
            path='/reset-password'
            element={<Resetpassword />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
