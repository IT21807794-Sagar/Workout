import './App.css';
import { Route, Routes, Link } from 'react-router-dom'; // Import Link
import HomePage from './Components/HomePage/HomePage';
import Authentication from './Components/Authentication/Authentication';
import WorkoutUpdate from './Components/WorkoutUpdate/WorkoutUpdate'; // Import WorkoutUpdate component

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/authentication" element={<Authentication />} />
        <Route path="/workout-update" element={<WorkoutUpdate />} /> {/* Add route for WorkoutUpdate */}
      </Routes>
    </div>
  );
}

export default App;
