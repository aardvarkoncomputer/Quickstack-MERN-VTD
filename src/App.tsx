import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faAppleAlt, faAnchor, faAirFreshener, faAmbulance, faAllergies } from '@fortawesome/free-solid-svg-icons'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md flex items-center mt-2 space-x-4">
        <div>
          <p className="text-slate-500">You're using Tailwind CSS!</p>
        </div>
      
      <div>
        <FontAwesomeIcon icon={faCoffee} />
      </div>
      <div>
        <button className='btn btn-neutral' onClick={() => setCount((count) => count + 1)}>
          DaisyUI Counter
        </button>
        <span className='badge badge-outline badge-accent'>{count}</span>
      </div>
      </div>
    </>
  )
}

export default App