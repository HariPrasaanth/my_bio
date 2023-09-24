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
          <Route path="/my_bio" element={<MyBio />} />            
          <Route path="/mybio_edit" element={<MyBioEdit />} />          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
