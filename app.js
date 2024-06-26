import React from "react";
import  {createRoot } from "react-dom/client";

// const parent = React.createElement(                                       
//     "div", 
//     {id: "parent"},
//     React.createElement
//     ("div", 
//     {id: "child"}, 
//     [React.createElement('h1', {}, "Hello there from h1 Tag!"),
//     React.createElement('h2', {}, "Hello there from h2 Tag!"),
//     React.createElement('h3', {}, "Hello there from h3 Tag!")
// ]) 
// );         // this is currently an object

// const heading = React.createElement('h1', {id: 'heading', className: "textHead"}, "Hello World from React");
// console.log(heading);  // object

const root = createRoot(document.getElementById('root'));
console.log(root)  // object

   // render converts heading object into h1 element and append to the root