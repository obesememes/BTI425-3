import { Container, Row, Col } from "react-bootstrap";

export default function ListingDetails({ listing = {} }) {
    const {
        images = {},
        neighborhood_overview = "No description available.",
        price,
        room_type = "N/A",
        bed_type = "N/A",
        beds = "N/A",
        review_scores = {},
        number_of_reviews = 0
    } = listing;

    return (
        <Container>
            <Row>
                <Col lg>
                    <img
                        onError={(event) => {
                            event.target.onerror = null;
                            event.target.src =
                                "https://placehold.co/600x400?text=Photo+Not+Available";
                        }}
                        className="img-fluid w-100"
                        src={images.picture_url || "https://placehold.co/600x400?text=Photo+Not+Available"}
                        alt="Listing Image"
                    />
                    <br />
                    <br />
                </Col>

                <Col lg>
                    <p>
                        <strong>{neighborhood_overview}</strong>
                    </p>
                    <br />

                    <p>
                        <strong>Price:</strong> {price !== undefined ? `$${price.toFixed(2)}` : "N/A"}
                        <br />
                        <strong>Room:</strong> {room_type}
                        <br />
                        <strong>Bed:</strong> {bed_type} ({beds})
                        <br />
                        <strong>Rating:</strong> {review_scores.review_scores_rating || "N/A"} / 100
                        ({number_of_reviews} Reviews)
                    </p>
                    <br />
                </Col>
            </Row>
        </Container>
    );
}