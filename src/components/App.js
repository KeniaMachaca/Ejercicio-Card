import '../styles/App.css';
import { CardHeader } from './CardHeader';
import { CardBody } from './CardBody';
import { ProfileImage } from './ProfileImage';

function App() {
  return (
    <div className="App">
      
      <CardHeader/>
      <CardBody/>
      <ProfileImage/>
    </div>
  );
}

export default App;
