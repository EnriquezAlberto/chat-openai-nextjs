"use client"
import { useChat } from 'ai/react';

function Homepage() {
const {handleInputChange, handleSubmit, messages} = useChat()

{messages.map(m => (
  <div className='bg-slate-300'
  key={m.id}>{m.content}</div>
))}

  return (
    <section className="flex justify-center items-center h-screen">
      <form className="max-w-xl w-full" onSubmit={handleSubmit}>
        {/* MENSAJE */}

        <div className="flex justify-between my-4">
          <label className="text-white block font-bold my-2">Di algo...</label>
          <button className="bg-blue-600 text-white px-3 py-2 rounded-md">
            ENVIAR
          </button>
        </div>
        <textarea
          rows={4}
          placeholder="Escriba su mensaje aqui"
          className="text-black bg-slate-300 px-3 py-2 w-full rounded-md focus:outline-none"
          onChange={handleInputChange}
        ></textarea>
      </form>
    </section>
  );
}

export default Homepage;
