'use client'
import {Box,Text,Heading,Image} from "@chakra-ui/react"
import Link from 'next/link'


export default function Footer(){
    return(
        <Box>
    <Box className='foot'>
        <Heading className="partners">Strategic Partners</Heading>
        <Image className="panacloud" src="/images/panacloud1.jpg" alt='panacloud logo'/>
        <Image className="saylani" src="/images/saylani.jpg" alt='saylani logo'/></Box>
        <Box className="footEnd">
        <Text className="NAVIGATION">Navigation</Text>
        <Text><Link className="foot1" href='/'>Home </Link></Text>
        <Text><Link className="foot2" href='/About'>
            About</Link></Text>
            <Text><Link className="foot3" href='/Faculty'>
            Faculty</Link></Text>
           <Text><Link className="foot4" href="/Web3">Web 3.0 and Metaverse developer</Link></Text>
           <Text> <Link className="foot5" href="/Artificial">Artificial Intelligence</Link></Text>
           <Text> <Link className="foot6" href="/Cloud">Cloud Native Computting</Link> </Text>
           <Text> <Link className="foot7" href="/Iot">Ambient Computting and Iot</Link></Text> 
           <Text> <Link className="foot8" href="/Genomics">Genomics and Bioinformatics</Link></Text> 
           <Text> <Link className="foot9" href="/Network">Network Programmability and Automation</Link></Text>
           <Text className="LOCATION">Locations</Text> 
           <Text className="helpline">PIAIC Helpline</Text>
           <Image className="phone" src="/images/phone.jpg" alt="phone pic" height={20} width={20}/>
           <Text className="TEXT">+92-308-2220203 (WhatsApp as well)</Text>
           <Text className="connection">Connect with us</Text>
            <Link href="https://web.facebook.com/groups/piaic/?_rdc=1&_rdr"><Image className="facebook" src="/images/facebook.jpg" 
            alt="facebook pic" height={30} width={30}/></Link>
            <Link href="https://www.youtube.com/channel/UC2Makv_pLAtvrjHNgg-pBLg"><Image className="youtube" src="/images/youtube.jpg"/></Link>
            <Box className="end"> <Text className="powered">Powered by</Text>
          <Link href="https://web.facebook.com/panacloud/?_rdc=1&_rdr"><Image className="pana" src="/images/panacloud.jpg" alt="panacloud logo"/></Link>
             </Box> 
        </Box></Box>
    )
}