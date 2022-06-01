import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Main from './pages/Main'
import FavoritesCats from './pages/Favorites cats'
import NotFound from './pages/NotFound'
import Header from './components/Header'
import './App.css'

function App() {
    return (
        <div className="App">
            <Router>
                <Header/>
                <Routes>
                    <Route exact path="/" element={<Main/>}/>
                    <Route exact path="/favorites-cats" element={<FavoritesCats/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </Router>
        </div>
    )
}

export default App;
