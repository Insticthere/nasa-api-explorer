import React, { useState, useEffect} from "react";
import { Box, Image, Text, Link    } from '@chakra-ui/react'
import style from './style.module.css'
const axios = require("axios");



// eslint-disable-next-line
const api_key = process.env.NASA_KEY || "DEMO_KEY";

function Apod(props) { 
  const [data, setData] = useState(new Date());
  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${api_key}`) // date=2022-05-9
    .then(res => {
      setData(res.data);
    })
  }, []);

  return (
    <Box margin="auto" pt="10px" bg={"#141621"} color="white" h={"100%"} minHeight="100vh">
      <Text fontSize={["1.4em", "1.6rem", "2em" , null]} textAlign="center" pb="initial">Astronautical picture of the day</Text>
      <Text fontSize={["1.2em", "1.4rem", "1.8  em" , null]} textAlign="center">{data.title}</Text>
        <Box>
          <Box width="80%" margin="5px auto">
              {data.hdurl ? 
              <Box margin="15px auto" width={["100%","80%", null, '40%']} height="auto">
                <Link href={data.hdurl} target="_blank" rel="noreferrer noopener" width={["100%","60%", "40%"]}>
                  <Image src={data.hdurl} alt="Astronomical Picture of the Day" borderRadius="25px" width="100%" height="100%" href={data.hdurl} />
                </Link>
              </Box>
              :
              <Box className={style['video-div']}>
                  <iframe width="1170" height="658" src={data.url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className={style['video']}></iframe>
              </Box>
              }
          </Box>
          <Box width={["95%", "80%", "75%", "60%"]} margin="auto auto" p={"1%"}> 
            <Text fontSize={["1em", "1.2rem", "1.5em" , null]} letterSpacing="tight">{data.explanation}</Text>
          </Box>
      </Box>
    </Box>
  );
}

export default Apod;