import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MyBio from './MyBio';
import MyBioEdit from './MyBioEdit';

function App() {
  return (
    <>
      {/* <MyBio /> */}
      {/* <MyBioEdit /> */}
      <BrowserRouter basename='/my-bio'>
        <Routes>
          <Route path="/my-bio" element={<MyBio />} />            
          <Route path="/my-bio-edit" element={<MyBioEdit />} />          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
