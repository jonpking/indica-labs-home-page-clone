import './App.css';
import ContactBar from './components/ContactBar/ContactBar';
import SubscriptionBar from './components/SubscriptionBar/SubscriptionBar';

function App() {
  return (
    <div className="App">
      <SubscriptionBar />
      <ContactBar />
    </div>
  );
}

export default App;
