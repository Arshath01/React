import React from 'react';
import reactDom from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import Counter from './Counter';



const app =reactDom.createRoot(document.getElementById('root'));
app.render(<Counter/>);