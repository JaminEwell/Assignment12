import logo from './logo.svg';
import './App.css';
import Products from './Product'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <Container className="App-container">
      <section>
        <Products />
      </section>
    </Container>
  )
}

export default App;
