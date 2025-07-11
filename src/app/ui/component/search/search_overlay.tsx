import { fetchSearchedProducts } from "@/app/lib/queries";
import SearchOverlayClient from "./search_overlay_client"

export default async function SearchOverlay (props: {
  searchParams?: Promise<{
    query?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const results = query ? await fetchSearchedProducts(query): [];

  return (
    <SearchOverlayClient results={results} query={query}/>
  )
}