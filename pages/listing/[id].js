import { useRouter } from "next/router";
import useSWR from "swr";
import Error from "next/error";
import ListingDetails from "../components/ListingDetails";
import PageHeader from "../components/PageHeader";

export default function ListingPage() {
  const router = useRouter();
  const { id } = router.query;
  const { data: listing, error, isLoading } = useSWR(
    id ? `https://bti-425-a1-eta.vercel.app/api/listings/${id}` : null
  );
  if (isLoading) return <p>Loading listing details...</p>;
  if (error || !listing) return <Error statusCode={404} />;

  return (
    <>
      <PageHeader title={`This is the Listing with ID: ${id}`} />
      <ListingDetails listing={listing} />
    </>
  );
}