import React from "react";
import signup from "assets/login2.gif";
import Microsoft from "assets/microsoft.png";
import Google from "assets/google.png";
import * as routes from "constants/routes";
const Signup = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="w-full max-w-4xl bg-white shadow-xl rounded-3xl overflow-hidden flex flex-col md:flex-row">
        <div className="md:w-1/2 bg-gradient-to-br from-blue-300 to-indigo-900 p-8 flex flex-col justify-center items-center text-white">
          <img
            src={signup}
            alt="Signup Illustration"
            className="w-full h-auto max-h-80 object-contain mb-8"
          />
          <h2 className="text-3xl font-bold mb-2">Join Us!</h2>
          <p className="text-blue-100 text-center">
            Create your account to start your journey with us
          </p>
        </div>
        <div className="md:w-1/2 p-10 flex flex-col justify-center">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-blue-700 mb-2">JOIN US</h1>
            <p className="text-gray-500">
              Enter your details to register to us
            </p>
          </div>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Student ID
              </label>
              <input
                type="text"
                placeholder="Enter your student ID"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Year & Semester
              </label>
              <input
                type="text"
                placeholder="Eg  Y1S1"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Address
              </label>
              <input
                type="text"
                placeholder="Enter your address"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                NIC Number
              </label>
              <input
                type="text"
                placeholder="Enter your NIC number"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-300 to-indigo-900 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mt-4">
              Register Now
            </button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <a
                href={routes.LOGIN}
                className="font-medium text-blue-600 hover:text-blue-500 hover:underline">
                Sign in
              </a>
            </p>
          </div>
          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Or sign up with
                </span>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <button
                type="button"
                className="w-full inline-flex justify-center items-center gap-2 py-2 px-4 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 border border-[#4285F4]">
                <img
                  src={Google}
                  alt="Google logo"
                  className="w-5 h-5 object-contain"
                />
                <span>Google</span>
              </button>
              <button
                type="button"
                className="w-full inline-flex justify-center items-center gap-2 py-2 px-4 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 border border-[#00A1F1]">
                <img
                  src={Microsoft}
                  alt="Microsoft logo"
                  className="w-5 h-5 object-contain"
                />
                <span>Microsoft</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
