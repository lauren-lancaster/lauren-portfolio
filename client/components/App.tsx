import Home from './Home'
import ProjectEffect from './ProjectEffect'
import ProjectEsc from './ProjectEsc'
import ProjectRead from './ProjectRead'
import ProjectVisualiser from './ProjectVisualiser'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/esc" element={<ProjectEsc />} />
        <Route path="/project/read" element={<ProjectRead />} />
        <Route path="/project/visualiser" element={<ProjectVisualiser />} />
        <Route path="/project/effects" element={<ProjectEffect />} />
      </Routes>
    </>
  )
}
export default App
