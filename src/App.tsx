import {BrowserRouter, Route, Routes} from 'react-router-dom';

import './App.scss';
import {BikeEditor} from './bike-editor';
import {Task, TaskList} from './task-list';

function App() {
  return (
    <BrowserRouter basename="holyJS2023">
      <Routes>
        <Route path="/" element={<BikeEditor />}></Route>
        <Route path="/tasks" element={<TaskList />}></Route>
        <Route path="/tasks/:taskId" element={<Task />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
