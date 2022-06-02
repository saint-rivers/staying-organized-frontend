import "./App.css";
import { Navbar } from "./components/Navbar";
import DriveFolderView from "./views/DriveFolderView";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <DriveFolderView />
    </div>
  );
}

export default App;
