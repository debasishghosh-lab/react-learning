import { useState } from 'react'


function App() {
  const [color, setColor] = useState("bg-gray-500")

  return (
    <>
      <div className={`min-h-screen w-full ${color}`}>
        <div className="flex flex-col items-center justify-center h-screen gap-4">
          <h1 className="text-4xl font-bold text-white">Change Background Color</h1>
          <div className="flex gap-4 rounded-3xl bg-white p-4">
            <button onClick={() => setColor("bg-red-500")} className="px-4 py-2 bg-red-500 text-white rounded-full">Red</button>
            <button onClick={() => setColor("bg-green-500")} className="px-4 py-2 bg-green-500 text-white rounded-full">Green</button>
            <button onClick={() => setColor("bg-blue-500")} className="px-4 py-2 bg-blue-500 text-white rounded-full">Blue</button>
            <button onClick={() => setColor("bg-yellow-500")} className="px-4 py-2 bg-yellow-500 text-white rounded-full">Yellow</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
