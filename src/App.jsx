import { 
    BrowserRouter, 
    Route, 
    Routes 
} from "react-router-dom"

import './App.css';

import Header from './components/Header/Header'
import Play from './pages/Play/Play'
import Learn from './pages/Learn/Learn'

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <div className='main-content'>
                    <Header />
                    <div className='container'>
                        <Routes>
                            <Route exact path='/' element={ <Play /> } />
                            <Route exact path='/learn' element={ <Learn /> } />
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
