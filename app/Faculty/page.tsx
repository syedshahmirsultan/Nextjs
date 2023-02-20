'use client';
import Link from "next/link";
import Image from "next/image";
import{Box,Text,Heading} from "@chakra-ui/react";

export default function Faculty(){
    return(
        <Box className="sir">
        <Box className="flex1">
        <Image className="ziaullah" src="/images/ziakhanpro.jpg" alt="picture of Zia Khan" height={129} width={129}/>
        <Text className="ziaullah1">Zia Khan</Text>
        <div className="face1">
       <Link href="https://web.facebook.com/ziakhan?_rdc=1&_rdr"><Image src="/images/facebook2.jpg" alt="picture of facebook" height={40} width={40}/></Link>
       <Link href="https://www.linkedin.com/in/ziaukhan/?originalSubdomain=pk"><Image  src="/images/linkedin.jpg" alt="picture of linkedin" height={40} width={40}/></Link>
       <Link href="https://twitter.com/ziakhan?lang=en"><Image src="/images/twitter.jpg" alt="picture of twitter" height={40} width={40}/></Link>
       </div> <Heading className="ziaullah2">LEAD FACULTY MEMBER</Heading>
       <Text paddingLeft={2} color='white' fontSize={25}>Teaching Web3 and Metaverse technologies</Text>
        </Box>
        <Box className="flex2">
        <Image className="hirakhan" src="/images/hirakhanpro.jpg" alt="picture of Hira Khan" height={129} width={129}/>
        <Text className="hirakhan1">Hira Khan</Text>
        <div className="face2">
       <Link href="https://web.facebook.com/groups/piaic/permalink/669396070641508/?locale=cs_CZ&_rdc=1&_rdr"><Image src="/images/facebook2.jpg" alt="picture of facebook" height={40} width={40}/></Link>
       <Link href="https://www.linkedin.com/in/hira-khan-76523540/?originalSubdomain=pk"><Image  src="/images/linkedin.jpg" alt="picture of linkedin" height={40} width={40}/></Link>
       <Link href="https://twitter.com/ziakhan?lang=en"><Image src="/images/twitter.jpg" alt="picture of twitter" height={40} width={40}/></Link>
       </div> <Heading className="hirakhan2">DIRECTOR AT THE WOMEN EMPOWERMENT DIVISION.</Heading>
       <Text paddingLeft={2} color='white' fontSize={25}>Teaching TypeScript and Nextjs technologies
       </Text>
        </Box>
        <Box className="flex3">
        <Image className="adilaltaf" src="/images/adilaltafpro.jpg" alt="picture of Adil Altaf" height={129} width={129}/>
        <Text className="adilaltaf1">Adil Altaf</Text>
        <div className="face3">
       <Link href="https://web.facebook.com/groups/piaic/posts/519705065610610/?_rdc=1&_rdr"><Image src="/images/facebook2.jpg" alt="picture of facebook" height={40} width={40}/></Link>
       <Link href="https://www.linkedin.com/in/adilaltaf/"><Image  src="/images/linkedin.jpg" alt="picture of linkedin" height={40} width={40}/></Link>
       <Link href="https://twitter.com/ziakhan?lang=en"><Image src="/images/twitter.jpg" alt="picture of twitter" height={40} width={40}/></Link>
       </div> <Heading className="hirakhan2">FULL STACK CLOUD DEVELOPER</Heading>
       <Text paddingLeft={2} color='white' fontSize={25}>Teaching TypeScript and Nextjs technologies
       </Text>
        </Box>
        <Box className="flex4">
        <Image className="daniyalnagori" src="/images/daniyalnagoripro.jpg" alt="picture of Daniyal Nagori" height={129} width={129}/>
        <Text className="adilaltaf1">Daniyal Nagori</Text>
        <div className="face4">
       <Link href="https://web.facebook.com/daniyalnagori1237"><Image src="/images/facebook2.jpg" alt="picture of facebook" height={40} width={40}/></Link>
       <Link href="https://www.linkedin.com/in/daniyalnagori/?originalSubdomain=pk"><Image  src="/images/linkedin.jpg" alt="picture of linkedin" height={40} width={40}/></Link>
       <Link href="https://twitter.com/daniyalnagori1"><Image src="/images/twitter.jpg" alt="picture of twitter" height={40} width={40}/></Link>
       </div> <Heading className="hirakhan2">SOFTWARE DEVELOPMENT LEAD</Heading>
       <Text paddingLeft={2} color='white' fontSize={25}>Teaching TypeScript and Nextjs technologies
       </Text>
        </Box>
        </Box>

        
    )
}