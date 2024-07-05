# React + Vite

project start date: 13.02.2024

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
