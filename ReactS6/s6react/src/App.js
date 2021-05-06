
import Book from './components/book'
import llibres from './llibres.json'
function App() {
  const llibresComponent = llibres.map(llibre => <Book key={llibre.title} info={llibre} />)
  return (
    <div>
     {llibresComponent}
    </div>
  );
}

export default App;
