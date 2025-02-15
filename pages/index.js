/*********************************************************************************
* BTI425 – Assignment 3
*
* I declare that this assignment is my own work in accordance with Seneca's
* Academic Integrity Policy:
*
* https://www.senecapolytechnic.ca/about/policies/academic-integrity-policy.html
*
* Name: Mustansir Lightwalla Student ID: 146343231 Date: 02/16/25
*
********************************************************************************/

import useSWR from "swr";
import { useState } from "react";
import { useEffect } from "react";
import { Pagination, Accordion } from "react-bootstrap";
import ListingDetails from "./components/ListingDetails";
import PageHeader from "./components/PageHeader";

export default function Home() {
  const [page,setPage] = useState(1);
  const [pageData,setPageData] = useState([]);
    const API_URL = `https://bti-425-a1-snowy.vercel.app/api/listings?page=${page}&perPage=10`;
    const { data, error } = useSWR(API_URL, async (url) => {
      try {
        console.log("Fetching:", url);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`API request failed with status: ${response.status}`);
        }
        return await response.json();
      } catch (err) {
        console.error("Error fetching data:", err);
        return null;
      }
    });

  useEffect(()=>{
    if (data) {
      setPageData(data);
    }
  }, [data]);

  const previous = () => setPage((prev) => Math.max(prev - 1, 1));
  const next = () => setPage((prev) => prev + 1);

  if (error) return <p>Error Loading Listings</p>;
  if (!data) return <p>...Loading</p>;
  return (<>
  <PageHeader title = "Browse Listings : Sorted by Number of Ratings"/>
    <Accordion>
      {pageData.map((listing) => (
        <Accordion.Item eventKey={listing._id} key={listing._id}>
          <Accordion.Header>
            <strong>{listing.name}</strong> - {listing.address?.street || "No Address Available"}
          </Accordion.Header>
          <Accordion.Body>
            <ListingDetails listing={listing} />
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
    <Pagination className="mt-4">
      <Pagination.Prev onClick={previous} disabled={page===1} />
      <Pagination.Item active>{page}</Pagination.Item>
      <Pagination.Next onClick={next} />
    </Pagination>
  </>)
}