import * as React from "react"


const NotFoundPage = (props) => {
  return (
    <div className="bg-gray-50 md:py-56 py-60 px-5">
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        <span className="block text-center">404 Error</span>
        <span className="mt-3 block text-center text-indigo-600">
          {props.message}
        </span>
      </h2>
    </div>
  )
}

export default NotFoundPage
