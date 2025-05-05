import React from "react";
import Forgot_password from "assets/Forgot password.gif";

const ForgotPassword = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="w-full max-w-4xl bg-white shadow-xl rounded-3xl overflow-hidden flex flex-col md:flex-row">
        <div className="md:w-1/2 bg-gradient-to-br from-blue-300 to-indigo-900 p-8 flex flex-col justify-center items-center text-white">
          <img
            src={Forgot_password}
            alt="Forgot Password Illustration"
            className="w-full h-auto max-h-80 object-contain mb-8"
          />
          <h2 className="text-3xl font-bold mb-2">Forgot Password?</h2>
          <p className="text-blue-100 text-center">
            No worries, we'll help you reset it in no time.
          </p>
        </div>
        <div className="md:w-1/2 p-10 flex flex-col justify-center">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-blue-700 mb-2">
              Check Your Email
            </h1>
            <p className="text-gray-500">
              We've sent password reset instructions to your email
            </p>
          </div>

          <div className="bg-blue-50 rounded-lg p-6 mb-6">
            <div className="flex items-start">
              <div className="flex-shrink-0"></div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-blue-800">
                  Reset link sent successfully
                </h3>
                <div className="mt-2 text-sm text-blue-700">
                  <p>
                    If an account exists with the email you entered, you'll find
                    the password reset link in your inbox.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center text-sm text-gray-600 mb-6">
            <p>Didn't receive the email?</p>
            <button className="font-medium text-blue-600 hover:text-blue-500 hover:underline mt-1">
              Click to resend
            </button>
          </div>

          <div className="mt-6">
            <a
              href='/'
              className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200">
              <span>Back to Sign In</span>
            </a>
          </div>
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>
              Need help?{" "}
              <a
                href="#"
                className="font-medium text-blue-600 hover:text-blue-500 hover:underline">
                Contact support
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
