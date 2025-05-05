import React from 'react';
import Signup from 'pages/Siginup';
import Login from 'pages/login';
import Forgot_password  from '../forgot_password/forgot_password';
import Resetpassword  from '../reset-password';
import StudentDashboard from 'pages/Student';
import StaffDashboard from "pages/Staff";




const Dashboard: React.FC = () => {
  return (
    <div>
      <section>
        <StaffDashboard />
      </section>
    </div>
  );
};

export default Dashboard;
