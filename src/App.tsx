import { Arrow } from './components/Arrow';
import { CreateLinkButton } from './components/CreateLinkButton';
import { LinkInput } from './components/LinkInput';
import './style/main.css';

function App() {
  return (
    <div className="App">
      <Arrow />
      <LinkInput />
      <CreateLinkButton />
    </div>
  );
}

export default App;
