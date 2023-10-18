import { Link, Routes, Route } from 'react-router-dom';
import { MainLayout } from './pages/MainLayout'
import { Home } from './pages/Home'
import { Book } from './pages/Book'
import './App.css'
import { NotFound } from './pages/NotFound';
import { Books } from './pages/Books';
import { Pricing } from './pages/Pricing';
import { BookPage } from './pages/BookPage';

function App() {
  return (
    <>
      
      <hr />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />}/>
          <Route path="books" element={<Books />} />
          <Route path="books/:bookId" element={<BookPage />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="*" element={<NotFound />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
