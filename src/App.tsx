import { Routes, Route } from "react-router-dom"
import Layout from "./layout/Layout"
import Home from "./pages/Home"
import { useEffect } from "react"

function App() {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'light')
  }, [])

  return (
    <Routes>
        <Route element={<Layout/>}>
          <Route index element={<Home/>}/>
        </Route>
    </Routes>
  )
}

export default App
