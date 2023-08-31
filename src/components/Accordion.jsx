import React, { useState } from "react"
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai"

const Accordion = ({ title, info }) => {
  const [show, setShow] = useState(false)
  return (
    <div className="flex flex-col bg-gray-900">
      <header className="flex flex-row justify-evenly items-center p-2  bg-blue-200 shadow-xl mb-2">
        <h3 className="w-full text-bold text-xl text-left mx-5 my-1 ">
          {title}
        </h3>
        <button
          className=" text-blue-900 text-3xl"
          onClick={() => setShow(!show)}
        >
          {show ? <AiOutlineMinusCircle /> : <AiOutlinePlusCircle />}
        </button>
      </header>
      {show && (
        <p className="text-md m-2 p-5 text-white font-semibold">
          <span className="text-sm text-green-200">Answer:- </span>
          {info}
        </p>
      )}
    </div>
  )
}

export default Accordion
