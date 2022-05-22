import React, { useState, useEffect} from "react";
import { Box ,Input, Image, Link,Select   } from '@chakra-ui/react'
const axios = require("axios");

const api_key = process.env.NASA_KEY || "DEMO_KEY";

const map = {
  "Opportunity": {
     FHAZ: false,
     RHAZ: false,
     MAST: true,
     CHEMCAM: true,
     MAHLI: true,
     MARDI: true,
     NAVCAM: false,
     PANCAM: false,
     MINITES: false
   },
    "Spirit": {
      FHAZ: false,
      RHAZ: false,
      MAST: true,
      CHEMCAM: true,
      MAHLI: true,
      MARDI: true,
      NAVCAM: false,
      PANCAM: false,
      MINITES: false
    },
    "Curiosity": {
      FHAZ: false,
      RHAZ: false,
      MAST: false,
      CHEMCAM: false,
      MAHLI: false,
      MARDI: false,
      NAVCAM: false,
      PANCAM: true,
      MINITES: true
    }
  }


function App(props) { 
  const [image, setImage] = useState([]);
  const [rover, setRover] = useState("Opportunity");
  const [camera, setCamera] = useState("FHAZ");
  const [sol, setSol] = useState(10);
  const [key, setKey] = useState(api_key);

  const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${api_key}`

  function change(event) {
    event.preventDefault();
    setRover(event.target.value);
  }

  function changecam(event) {
    event.preventDefault();
    setCamera(event.target.value);
  }

  function changesol(event) {
    event.preventDefault();
    setSol(event.target.value);
  }

  function changekey(event) {
    event.preventDefault();
    setKey(event.target.value);
  }
  const url1 = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&camera=${camera}&api_key=${key}`

  function getImage(event) {
    event.preventDefault();
    console.log(url1)
    axios.get(url1)
    .then(res => {
      setImage(res.data.photos);
    })
    .catch(err => {
      console.log(err);
    })  
  }

  useEffect(() => {
    axios.get(url).then((responce) => {
      const { photos } = responce.data;
      setImage(photos);
    });
  }, [url]);

  return (
    <Box margin="auto" pt="10px" bg={"#141621"} color="white" h={"100%"} minHeight="100vh">
      <Box display="flex" justifyContent="center" p="2%">
        <form style={{display: "flex"}} onSubmit={getImage}>
                      <Select id="rover" htmlFor="rover" value={rover} onChange={change} >
                          <option value="Curiosity" selected style={{backgroundColor: '#141621'}}>Curiosity</option>
                          <option value="Opportunity" style={{backgroundColor: '#141621'}}>Opportunity</option>
                          <option value="Spirit" style={{backgroundColor: '#141621'}}>Spirit</option>
                      </Select>
                      <Select id="camera" htmlFor="camera" value={camera} onChange={changecam} >
                          <option value="FHAZ" id='FHAZ' selected disabled={map[rover].FHAZ} style={{backgroundColor: '#141621'}}>FHAZ</option>
                          <option value="RHAZ" id="RHAZ" disabled={map[rover].RHAZ} style={{backgroundColor: '#141621'}}>RHAZ</option>
                          <option value="MAST" id="MAST" disabled={map[rover].RHAZ} style={{backgroundColor: '#141621'}}>MAST</option>
                          <option value="CHEMCAM" id="CHEMCAM" disabled={map[rover].CHEMCAM} style={{backgroundColor: '#141621'}}>CHEMCAM</option>
                          <option value="MAHLI" id="MAHLI" disabled={map[rover].MAHLI} style={{backgroundColor: '#141621'}}>MAHLI</option>
                          <option value="MARDI" id="MARDI" disabled={map[rover].MARDI} style={{backgroundColor: '#141621'}}>MARDI</option>
                          <option value="NAVCAM" id="NAVCAM" disabled={map[rover].NAVCAM} style={{backgroundColor: '#141621'}}>NAVCAM</option>
                          <option value="PANCAM"id="PANCAM" disabled={map[rover].PANCAM} style={{backgroundColor: '#141621'}}>PANCAM</option>
                          <option value="MINITES" id="MINITES" disabled={map[rover].MINITES} style={{backgroundColor: '#141621'}}s>MINITES</option>
                      </Select>
                      <Input borderColor="inherit" type="number" min="10" max="1000" placeholder="days (default 10)" htmlFor="days" id="days" autoComplete="off" onChange={changesol} value={sol}/>
                      <Input type="text" placeholder="API key leave for demo key" htmlFor="apikey" className="api" id="api" autoComplete="off" onChange={changekey} value={key}/>
                      <Input type="submit" />
        </form>
      </Box>
      <Box alignContent="center" textAlign="center">
        <Box display="flex" justifyContent="center">
          <Box w={["95%", "90%", '90%', "75%"]}>
            {image.length > 0 ? image.map((item, index) => {
              return (
                <Box key={index} pb="10px">
                <Link href={item.img_src} target="_blank" rel="noreferrer noopener">
                  <Image src={item.img_src} alt="mars" margin="auto" width={'100%'} h="100%"></Image>
                </Link>
                </Box>
              );
            }) : <Box>No images found :(</Box>}
          </Box>
        </Box>

      </Box>
    </Box>
  );
}

export default App;