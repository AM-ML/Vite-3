import { Link, Routes, Route } from 'react-router-dom';
import { MainLayout } from './pages/MainLayout'
import { Home } from './pages/Home'
import { Book } from './pages/Book'
import './App.css'

function App() {
  return (
    <>
      
      <hr />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />}/>
          <Route path=":id" element={<Book />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
