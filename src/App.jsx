
import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './Routes/Routes/Routes'

function App() {

  return (
    <div data-theme='light' className='flex justify-center items-center'>
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  )
}

export default App
