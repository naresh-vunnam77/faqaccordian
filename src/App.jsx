import React from "react"
import Accordion from "./components/Accordion"
import questions from "./data"
const App = () => {
  return (
    <section className="flex flex-col bg-gray-900 text-white min-h-screen min-w-screen items-center justify-center align-middle px-10">
      <article className="max-w-[500px] h-full bg-white text-black my-10 p-5">
        <h3 className="text-center text-3xl text-bold mb-5">
          Recently asked questions
        </h3>
        {questions.map((question) => {
          return <Accordion key={question.id} {...question} />
        })}
      </article>
    </section>
  )
}

export default App
