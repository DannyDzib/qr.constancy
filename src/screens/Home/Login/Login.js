import * as React from "react"
import Tucan from "assets/images/tucan.png"
import { Controller } from "react-hook-form"
import useLogin from "./useLogin"
import { useIntl } from "react-intl"

const Login = () => {
  const { formatMessage: f } = useIntl()
  const { control, formState, handleSubmit } = useLogin()

  return  (
    <div className="min-h-full flex items-center justify-center h-screen  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xs w-full space-y-8">
        <div>
          <img className="mx-auto h-28 w-auto" src={Tucan} alt="Workflow" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {f({ id: "LOGIN_FORM_TITLE" })}
          </h2>
        </div>
        <div className="mt-8 space-y-6">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <Controller
                name="email"
                control={control}
                render={({ field, fieldState }) => (
                  <input
                    {...field}
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder={f({ id: "LOGIN_FORM_EMAIL" })}
                  />
                )}
              />
            </div>
            <div>
              <Controller
                name="password"
                control={control}
                render={({ field, fieldState }) => (
                  <input
                    {...field}
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder={f({ id: "LOGIN_FORM_PASSWORD" })}
                  />
                )}
              />
            </div>
          </div>
          <div className="flex items-center flex-end">
            <div className="text-sm">
              <a
                href="/login"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                {f({ id: "LOGIN_FORM_DID_YOU_FORGET_PASSWORD" })}
              </a>
            </div>
          </div>
          <div>
            <button
              className={`${
                formState.isValid
                  ? "bg-blue-900 hover:bg-blue-800 "
                  : "bg-gray-400"
              } text-white group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
              onClick={handleSubmit}
              disabled={!formState.isValid}
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
              {f({ id: "LOGIN_FORM_BUTTION" })}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
