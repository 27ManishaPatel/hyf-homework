import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import './Todo.css';
import './App.css'

export default function App() {
    return <div className='wrapper'>
        <Header />
        <Main />
        <Footer />
    </div>
}