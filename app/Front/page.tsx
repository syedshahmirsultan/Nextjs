'use client'
import Image from "next/image"
import { Box } from "@chakra-ui/react"
import ButtonsFront from "./buttons"
export default function Front(){
    return(<Box className="mainbox">
        <Box className="img">
        <Image className="panaverse" src='/images/mainimage.jpg' width={190} height={150} alt='Panaverse Logo' color='black'/>
        <ButtonsFront></ButtonsFront>
    </Box></Box>
    )
}