"use client";
import { useState } from "react";
import { Search } from "lucide-react";
import VenuesGrid from "../_components/grids/VenuesGrid";
import Button from "../_components/ui/Button";
import { VenuesResponse } from "../_lib/types";
import { keepPreviousData, useInfiniteQuery } from "@tanstack/react-query";
import { getVenues } from "../_lib/api";

export default function Venues() {
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("created");
  const [sortValue, setSortValue] = useState("created");
  const [order, setOrder] = useState("desc");

  const {
    isPending,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    data: venuesData,
    error,
  } = useInfiniteQuery<VenuesResponse>({
    queryKey: ["venues", { search, sortBy, order }],
    queryFn: ({ pageParam = 1 }) =>
      getVenues({
        limit: 12,
        page: pageParam as number,
        search,
        sortBy,
        sortOrder: order,
      }),
    getNextPageParam: (lastPage) => lastPage.meta.nextPage ?? undefined,
    initialPageParam: 1,
    placeholderData: keepPreviousData,
  });

  const venuesCount = venuesData?.pages[0]?.meta.totalCount ?? 0;

  function handleOnSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSearch(searchInput);
  }

  function setSortValues(value: string) {
    switch (value) {
      case "created":
        setSortBy("created");
        setOrder("desc");
        break;
      case "lowestPrice":
        setSortBy("price");
        setOrder("asc");
        break;
      case "highestPrice":
        setSortBy("price");
        setOrder("desc");
        break;
      case "rating":
        setSortBy("rating");
        setOrder("desc");
        break;
      default:
        setSortBy("created");
        setOrder("desc");
    }
  }

  function handleSortChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setSortValue(e.target.value);
    setSortValues(e.target.value);
  }

  if (isPending) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>{error?.message || "An error occurred"}</p>;
  }
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-8 mt-8">
        {/* Search */}
        <div className="w-full md:max-w-2xl flex flex-col gap-4">
          <form onSubmit={handleOnSubmit} className="relative flex">
            <label htmlFor="search" className="sr-only">
              Search for venues
            </label>
            <input
              type="text"
              id="search"
              name="search"
              placeholder="Search for venues..."
              value={searchInput}
              className="py-4 px-6 w-full bg-cloud-white-50 border border-cloud-white-600 rounded-4xl shadow-[inset_0_4px_4px_0_rgba(0,0,0,0.25)]"
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button
              type="submit"
              className="absolute right-6 top-1/2 transform -translate-y-1/2 w-fit text-deep-forest-300 cursor-pointer hover:text-deep-forest-500 transition-all duration-300"
            >
              <Search size={20} strokeWidth={2} className="shrink-0" />
            </button>
          </form>

          {/* Results count mobile */}
          <p className="md:hidden">
            <span className="font-semibold">{venuesCount}</span> venues found{" "}
            {search && `for "${search}"`}
          </p>
        </div>

        {/* Dropdown filter */}
        <div className="mb-12 md:mb-0 w-full md:w-fit">
          <select
            onChange={handleSortChange}
            value={sortValue}
            className="w-full md:w-fit bg-white border border-gray-300 rounded-md py-2 px-4 focus:outline-none"
          >
            <option value="created">Newest</option>
            <option value="lowestPrice">Lowest Price</option>
            <option value="highestPrice">Highest Price</option>
            <option value="rating">Best rating</option>
          </select>
        </div>
      </div>

      {/* Results count desktop */}
      <p className="hidden md:block mb-0 md:mb-12 mt-0 md:mt-8">
        <span className="font-semibold">{venuesCount}</span> venues found{" "}
        {search && `for "${search}"`}
      </p>

      {/* Venues grid */}
      <VenuesGrid data={venuesData.pages.flatMap((page) => page.data)} />

      {/* Load more button */}
      {hasNextPage && (
        <div className="flex justify-center mt-12 md:mt-24">
          <Button
            variant="medium"
            color="secondary"
            onClick={() => fetchNextPage()}
            disabled={!hasNextPage || isFetchingNextPage}
          >
            {isFetchingNextPage ? "Loading..." : "Load more venues"}
          </Button>
        </div>
      )}
    </>
  );
}
