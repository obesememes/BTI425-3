import Link from "next/link";
import { Card } from "react-bootstrap";
import ListingDetails from "@/components/ListingDetails";
import PageHeader from "@/components/PageHeader";

export default function About(props) {
    return (
        <>
            <PageHeader text="About the Developer - Mustansir Lightwalla" />

            <Card>
                <Card.Body>
                    <p>
                        Hello! I am Mustansir Lightwalla, a software development student at Seneca with experience in
                        web development and other coding languages. I enjoy working with computers, going to the gym, and playing video games.
                    </p>

                    <p>
                        Feel free to check out one of the listings I’ve highlighted from our dataset:
                        <Link href="/listing/1206363" passHref legacyBehavior>
                            <a> View Listing </a>
                        </Link>
                    </p>
                </Card.Body>

                <ListingDetails listing={props.listing} />
            </Card>
            <br />
        </>
    );
}
