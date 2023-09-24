import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MyBio from './MyBio';
import MyBioEdit from './MyBioEdit';

function App() {
  return (
    <>
      {/* <MyBio /> */}
      {/* <MyBioEdit /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MyBio />} />          
          <Route path="/MyBio" element={<MyBio />} />          
          <Route path="/MyBioEdit" element={<MyBioEdit />} />          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
