import React, { useState } from "react";
const axios = useAxios();

type Event = {
  target: {
    value: string;
  };
};

export const Signup: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [domain, setDomain] = useState("");

  const handleEmailChange = (event: Event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: Event) => {
    setPassword(event.target.value);
  };

  const handleDomainChange = (event: Event) => {
    setDomain(event.target.value);
  }; 

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('hello')
  }

  return (
    <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto h-12 w-auto"
          src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
          alt="Workflow"
        />
        <h2 className="mt-6 text-center text-3xl tracking-tight font-bold text-gray-900">
          Sign up as a domain author
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={handleEmailChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  onChange={handlePasswordChange}
                  value={password}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Domain
              </label>
              <div className="mt-1">
                <input
                  id="domain"
                  name="domain"
                  type="domain"
                  autoComplete="current-password"
                  required
                  onChange={handleDomainChange}
                  value={domain}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={handleSubmit}
              >
                Signup
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};
