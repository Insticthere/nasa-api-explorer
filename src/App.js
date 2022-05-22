import { extendTheme, ChakraProvider } from '@chakra-ui/react'
import Apod from './components/Apod';
import Nasa from './components/Mars';
import Simple from './components/navbar';

import { BrowserRouter,Route, Routes } from "react-router-dom";

const customeTheme = extendTheme({
    colors: {},
    fonts: {},
    fontSizes: {},
    breakpoints: {
      sm: "320px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
});

function App() {
  return (
    <ChakraProvider theme={customeTheme}>
        <BrowserRouter>
        <Simple />
            <Routes>
                <Route path="apod" element={<Apod />} />
                <Route path="mars" element={<Nasa />} />
                <Route path="/" element={<Apod />} />
            </Routes>
        </BrowserRouter>
    </ChakraProvider>
  )
}

export default App;
