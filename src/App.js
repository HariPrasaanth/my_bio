import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MyBio from './MyBio';
import MyBioEdit from './MyBioEdit';

function App() {
  return (
    <>
      {/* <MyBio /> */}
      {/* <MyBioEdit /> */}
      <BrowserRouter basename='/mybio'>
        <Routes>
          <Route path="/mybio" element={<MyBio />} />            
          <Route path="/MyBioEdit" element={<MyBioEdit />} />          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
