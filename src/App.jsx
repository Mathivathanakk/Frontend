import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Edit from './Pages/Edit';
import Create from './Pages/Create';
import Home from './Pages/Home';

const App = () => {
    const [id,setId]=useState(0)
    return (
        <div>
           <BrowserRouter>
           <Routes>
            <Route path='/' element={<Home setId={setId}/>} />
            <Route path='/editemployee/:id' element={<Edit id={id}/>} />
            <Route path='/create'element={<Create />}/>
           </Routes>
           </BrowserRouter>
        </div>
    );
};

export default App;
