import "./App.css";
import { Navbar } from "./components/Navbar";
import DriveFolderView from "./views/DriveFolderView";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <h1 className='text-3xl font-bold underline text-red-600'>
        Hello World!
      </h1>

      <DriveFolderView/>
    </div>
  );
}

export default App;
