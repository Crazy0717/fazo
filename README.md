# React + Vite

project start date: 13.02.2024

i

i = install

installation: <br/>
npm i sass <br/>
npm i react-router-dom <br/>
npm install @reduxjs/toolkit react-redux <br/>
npm i swiper <br/>
npm install antd --save <br/>
npm install @mui/material @emotion/react @emotion/styled <br/>
npm install @mui/icons-material <br/>
npm i axios <br/>

get images from api and create blob url ⬇

```js
const getImages = async (fileName) => {
   try {
     const cartImage = await fetch(`http://127.0.0.1:8000/files/${fileName}`)
     const blob = await cartImage.blob()
     const imageObjectURL = URL.createObjectURL(blob)
     return imageObjectURL
   } catch (error) {
     console.log(error)
   }
 }
```

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
