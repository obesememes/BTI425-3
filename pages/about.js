import Link from "next/link";
import { Card } from "react-bootstrap";
import ListingDetails from "@/pages/components/ListingDetails";
import PageHeader from "@/pages/components/PageHeader";

export async function getStaticProps() {
    const res = await fetch('https://bti-425-a1-snowy.vercel.app/api/listings/1206363')
    const data = await res.json();
    return {props: {listing:data}};
}

export default function About({listing}) {
    return (<>
    <PageHeader title = "About the Developer - Mustansir Lightwalla" />
    <Card>
        <Card.Body>
        I’m Mustansir Lightwalla, a software development student at Seneca. 
        I enjoy working with computers and learning different coding languages, 
        which has given me a strong foundation in programming. My studies also involve web development, 
        where I get to build and refine digital applications. Beyond coding, I have a deep passion for hardware
        and love building PCs from scratch. Whether it's selecting the right components, assembling a system
        for optimal performance, or troubleshooting hardware issues, I enjoy the hands-on experience of working 
        with computer hardware just as much as I do with software. Outside of tech, I like staying active by going 
        to the gym and unwinding with video games. Balancing fitness, gaming, my passion for software development, 
        and my interest in building PCs keeps me motivated and constantly learning. 
        <br /><br />
        One day I would like to visit is the: <Link href="https://www.airbnb.com/rooms/1206363">Eco Hale Hawaii in the Rainforest Lots of Aloha</Link>
        </Card.Body>
        <ListingDetails listing={listing}/>
    </Card>
        <p>About</p>
    </>)
}