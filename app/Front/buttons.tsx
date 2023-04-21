import Link from 'next/link'

export default function ButtonsFront(){
    return(
        <div className="button">
        <Link className="b1" href='/'>
            Home </Link>
        <Link  className="b2" href='/About' >
            About</Link>
            <Link  className="b3" href='/Faculty' >
            Faculty</Link><div className="container">
            <text  className="b4" marginTop="-30px">Courses</text>
            <div className="dropdown">
            <Link className="link" href="/Web3">Web 3.0 and Metaverse developer</Link> 
                 <Link className="link" href="/Artificial">Artificial Intelligence</Link> 
                 <Link className="link" href="/Cloud">Cloud Native Computting</Link> 
                 <Link className="link" href="/Iot">Ambient Computting and Iot</Link> 
                 <Link className="link" href="/Genomics">Genomics and Bioinformatics</Link> 
                 <Link className="link" href="/Network">Network Programmability and Automation</Link> 
            </div>
                
        </div>
        <button className="piaic"><Link className="piaicweb" href="https://www.piaic.org" >Apply</Link></button></div>
    )
}
