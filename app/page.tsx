'use client';
import './globals.css'
import { Box,Text,Heading } from "@chakra-ui/react";
import Image from 'next/image';
import Link from 'next/link';

export default function App(){
    return(
      <Box>
      <Box className="frontend">
        <Image className="president" src="/images/president2.jpg" alt="picture of president" height='670'
    width='370'/>
        <Heading className='heading1'>Certified Web 3.0 and Metaverse Developer: A Nationwide Program in Karachi, Lahore, Islamabad, and Peshawar</Heading>
        <Text className='text2'>Getting Ready for the Next Generation and Future of the Internet - Join a 13 Trillion Dollar Industry with 5 Billion Users</Text>
      </Box><Box className='secBox'>
        <Heading className='headings'>The Program in a Nutshell: Earn While You Learn</Heading>
        <Text as='p' className='earn' color='black'>In this brand-new type of curriculum, students will learn how to make money and boost exports in the classroom and will begin doing so within six months of the program's beginning. It resembles a cross between a corporate venture and an educational project.
</Text>
<Image className='dollar' src='/images/dollar.jpg' alt="picture of dollar" height='350' width='350'/>
<Heading className='heading2'>Program of Studies</Heading>
<Text as='p' className='program'>This curriculum is intended for beginners who want to learn software development from the ground up. The first three quarters are shared by all specialties and are dedicated to studying Object-Oriented Programming and cutting-edge Full-Stack Web 2.0 development. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects. To accommodate everyone, courses will be held primarily on weekends or after 6:00 p.m. (Pakistan Time) on weekdays. It employs a hybrid teaching format, with core onsite classes complemented by online Zoom laboratories and recorded videos.
</Text>
<Image className='laptop' src="/images/laptop.jpg" alt='picture of laptop' height='500' width='650'/>
<Heading className='heading3'>Relevant Information Links</Heading>
<Text><Link className='links' href="https://www.piaic.org/">Addmission Website</Link></Text>
<Text><Link className='links1' href="https://web.facebook.com/groups/panaverse?_rdc=1&_rdr">Facebook Group</Link></Text>
<Text><Link className='links2' href="https://www.youtube.com/@panaverse/streams">YouTube Live Channel</Link></Text>
<Text><Link className='links3' href="https://twitter.com/Panaverse_edu">Twitter</Link></Text>
<Text><Link className='links4' href="https://github.com/panaverse">Github Repos</Link></Text>
<Heading className='heading4'>The Outcome for Participants of the Program</Heading>
<Text className='texts' as='p'>The graduates of this program will own products (Full-Stack App Templates, AR and VR Experiences, and APIs) that are marketed globally by the Panaverse DAO and, if they like, will also be able to start off by offering services at a rate of $50 per hour ($96,000 per year). This would give Pakistani professionals and students a fantastic opportunity to better their financial situation while also giving the economy a much-needed boost by expanding software exports.</Text>
<Text><Link className='name1' href="https://content.techgig.com/hiring/top-5-metaverse-jobs-that-will-rule-the-future-of-tech-industry/articleshow/87581325.cms">Top 5 Metaverse jobs that will rule the future of tech industry</Link></Text>
<Text><Link className='name2' href="https://web3.career/web3-salaries/blockchain-developer">Blockchain Developer Salary - Feb 2023</Link></Text>
<Text><Link className='name3' href="https://thedefiant.io/web3-soaring-salaries">Web3 Salaries Soar to $750,000 for Rank-and-File Devs</Link></Text>
<Text><Link className='name4' href="https://newzoo.com/insights/trend-reports/newzoo-report-on-metaverse-blockchain-gaming-nft-2022">The Metaverse, Blockchain Gaming, and NFTs: Navigating the Internet’s Uncharted Waters</Link></Text>
<Text><Link className='name5' href="https://www.blockchain-council.org/metaverse/how-to-become-metaverse-developer/">How To Become Metaverse Developer: Scope, Skills, and Salary</Link></Text>
</Box></Box>
    )
}