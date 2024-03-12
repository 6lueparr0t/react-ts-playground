import { useState } from 'react'
import DarkMode from '@/components/_common/DarkMode';
import '@/components/_main/App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <button className="m-2 bg-gray-800 text-white dark:bg-white dark:text-gray-800" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <div className="m-2 flex justify-center items-center">
          <DarkMode />
        </div>
      </div>
    </>
  )
}

export default App
