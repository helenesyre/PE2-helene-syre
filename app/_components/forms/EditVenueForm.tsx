"use client";
import { useAuth } from "@/app/_lib/stores";
import Button from "@/app/_components/ui/Button";
import { CreateVenueSchema } from "@/app/_lib/schema";
import { countWords } from "@/app/_lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm, useWatch } from "react-hook-form";
import { useRef, useState } from "react";
import z from "zod";
import Image from "next/image";
import { CircleAlert, X } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { updateVenue } from "@/app/_lib/api";
import { ToastType, useToast } from "@/app/_lib/stores";
import { useRouter } from "next/navigation";
import {
  ManageVenueRequest,
  ManageVenueResponse,
  VenueResponseData,
} from "@/app/_lib/types";

export default function EditVenueForm({
  venueData,
}: {
  venueData: VenueResponseData;
}) {
  const { addMessage } = useToast();
  const { data: authData } = useAuth();
  const router = useRouter();
  const srcRef = useRef<HTMLInputElement | null>(null);
  const altRef = useRef<HTMLInputElement | null>(null);
  const [isUrlValid, setIsUrlValid] = useState(true);

  // Reach hook form
  const {
    register,
    control,
    trigger,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof CreateVenueSchema>>({
    resolver: zodResolver(CreateVenueSchema),
    defaultValues: {
      ...venueData,
    },
    mode: "onTouched",
  });

  const mutation = useMutation<
    ManageVenueResponse,
    Error,
    { accessToken: string; id: string; data: ManageVenueRequest }
  >({
    mutationFn: updateVenue,
    onSuccess: (response) => {
      addMessage({
        message: "Successfully updated venue",
        duration: 10000,
        type: ToastType.SUCCESS,
      });
      router.push("/venues/" + response.data.id);
    },
    onError: (error) => {
      addMessage({
        message: error.message,
        duration: 10000,
        type: ToastType.ERROR,
      });
    },
  });

  const desc = useWatch({ control, name: "description" });
  const wordCount = countWords(desc);

  const { fields, append, remove } = useFieldArray({
    control,
    name: "media",
  });

  function isValidUrl(url: string) {
    try {
      new URL(url);
      const isValid =
        CreateVenueSchema.shape.media.element.shape.url.safeParse(url);
      if (!isValid.success) {
        setIsUrlValid(false);
        return false;
      }
      setIsUrlValid(isValid.success);
      return isValid.success;
    } catch {
      setIsUrlValid(false);
      return false;
    }
  }

  function handleAddImage() {
    if (fields.length >= 5) return;
    if (!srcRef.current?.value) return;
    if (!isValidUrl(srcRef.current?.value)) return;
    append({
      url: srcRef.current?.value,
      alt: altRef.current?.value || "",
    });
    srcRef.current.value = "";
    if (altRef.current?.value) altRef.current.value = "";
  }
  function handleRemoveImage(index: number) {
    remove(index);
    trigger("media");
  }

  return (
    <form
      className="flex flex-col gap-8 w-full"
      onSubmit={handleSubmit((data) =>
        mutation.mutate({
          accessToken: authData?.accessToken || "",
          id: venueData.id,
          data,
        }),
      )}
    >
      {/* Venue details */}
      <section className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h2>Venue details</h2>
          <p className="text-deep-forest-400">
            Enter the details of your venue.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {/* Venue name */}
          <div className="flex flex-col">
            <label htmlFor="venue-name" className="ml-4 mb-2">
              Venue name
            </label>
            <input
              type="text"
              {...register("name")}
              id="venue-name"
              placeholder="Enter the venue name"
              className="bg-cloud-white-50 border border-cloud-white-600 rounded-4xl p-4 w-full shadow-[inset_0_4px_4px_0_rgba(0,0,0,0.25)]"
            />
            <div className="flex gap-2 ml-4 mt-2">
              {errors.name?.message && (
                <CircleAlert
                  size={20}
                  strokeWidth={1.5}
                  className="text-red-800 shrink-0"
                />
              )}
              <p className="text-red-800 small-text font-medium">
                {errors.name?.message?.toString()}
              </p>
            </div>
          </div>
          {/* Description */}
          <div className="flex flex-col">
            <label htmlFor="description" className="ml-4 mb-2">
              Description
            </label>
            <textarea
              id="description"
              {...register("description")}
              placeholder="What makes your venue special? Mention the rooms, the view and what's nearby."
              className="bg-cloud-white-50 border border-cloud-white-600 rounded-4xl p-4 w-full shadow-[inset_0_4px_4px_0_rgba(0,0,0,0.25)]"
              rows={4}
            ></textarea>
            {/* Word counter */}
            <p className="text-right">
              <span
                className={wordCount > 160 ? "text-red-800 font-medium" : ""}
              >
                {wordCount}
              </span>{" "}
              / 160 words
            </p>
            <div className="flex gap-2 ml-4 mt-2">
              {errors.description?.message && (
                <CircleAlert
                  size={20}
                  strokeWidth={1.5}
                  className="text-red-800 shrink-0"
                />
              )}
              <p className="text-red-800 small-text font-medium">
                {errors.description?.message?.toString()}
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Venue images */}
      <section className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h2>Venue images</h2>
          <p className="text-deep-forest-400">
            Add 1-5 images. The first one is your cover image. Use a public
            image URL.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center md:items-end">
          {/* Image URL */}
          <div className="flex flex-col flex-1 w-full">
            <label htmlFor="image-url" className="ml-4 mb-2">
              Image URL
            </label>
            <input
              type="text"
              ref={srcRef}
              id="image-url"
              placeholder={`${fields.length >= 5 ? "Limit reached" : "https://..."}`}
              disabled={fields.length >= 5}
              className="bg-cloud-white-50 border disabled:border-cloud-white-400 border-cloud-white-600 rounded-4xl p-4 w-full shadow-[inset_0_4px_4px_0_rgba(0,0,0,0.25)]"
            />
            {!isUrlValid && (
              <div className="flex gap-2 ml-4 mt-2">
                <CircleAlert
                  size={20}
                  strokeWidth={1.5}
                  className="text-red-800 shrink-0"
                />
                <p className="text-red-800 small-text font-medium">
                  {"Invalid image URL"}
                </p>
              </div>
            )}
          </div>
          {/* Image alt */}
          <div className="flex flex-col flex-1 w-full">
            <label htmlFor="image-alt" className="ml-4 mb-2">
              Image alt text
            </label>
            <input
              type="text"
              ref={altRef}
              id="image-alt"
              placeholder={`${fields.length >= 5 ? "Limit reached" : "e.g. Villa by the lake"}`}
              disabled={fields.length >= 5}
              className="bg-cloud-white-50 border disabled:border-cloud-white-400 border-cloud-white-600 rounded-4xl p-4 w-full shadow-[inset_0_4px_4px_0_rgba(0,0,0,0.25)]"
            />
          </div>
          <Button
            variant="small"
            color="secondary"
            className="my-3 disabled:opacity-50"
            onClick={handleAddImage}
            disabled={fields.length >= 5}
          >
            Add
          </Button>
        </div>
        <div>
          {errors.media && (
            <p className="text-red-600">{errors.media.message}</p>
          )}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-4 md:grid-rows-2 gap-4 h-112 md:h-56 mt-4">
          {fields.length === 0 && (
            <>
              <div className="col-span-2 row-span-2 bg-cloud-white-700 rounded-2xl"></div>
              <div className="col-span-1 row-span-1 bg-cloud-white-600 rounded-2xl"></div>
              <div className="col-span-1 row-span-1 bg-cloud-white-600 rounded-2xl"></div>
              <div className="col-span-1 row-span-1 bg-cloud-white-600 rounded-2xl"></div>
              <div className="col-span-1 row-span-1 bg-cloud-white-600 rounded-2xl"></div>
            </>
          )}

          {fields.map((field, index) => {
            return (
              <div
                key={field.id}
                className={`relative ${index === 0 ? "col-span-2 row-span-2" : "col-span-1 row-span-1"}`}
              >
                <Image
                  src={field.url}
                  alt={field.alt}
                  width={200}
                  height={200}
                  objectFit="cover"
                  className="object-cover h-full w-full rounded-2xl"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveImage(index)}
                  className="absolute top-3 right-3 bg-red-800 text-white rounded-full z-10 w-7 h-7 flex items-center justify-center cursor-pointer"
                >
                  <X size={14} />
                </button>
              </div>
            );
          })}
          {fields.length !== 0 &&
            Array.from({ length: 5 - fields.length }).map((_, index) => (
              <div
                key={index}
                className="col-span-1 row-span-1 bg-cloud-white-600 rounded-2xl"
              ></div>
            ))}
        </div>
      </section>
      {/* Price & capacity */}
      <section className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h2>Price & capacity</h2>
          <p className="text-deep-forest-400">
            Set your nightly costs and how many guests you can host.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-start">
          {/* Price per night (NOK) */}
          <div className="flex flex-col flex-1 w-full">
            <label htmlFor="price" className="ml-4 mb-2">
              Price per night (NOK)
            </label>
            <input
              type="number"
              {...register("price", { valueAsNumber: true })}
              id="price"
              placeholder="e.g. 1500"
              className="bg-cloud-white-50 border border-cloud-white-600 rounded-4xl p-4 w-full shadow-[inset_0_4px_4px_0_rgba(0,0,0,0.25)]"
            />
            <div className="flex gap-2 ml-4 mt-2">
              {errors.price?.message && (
                <CircleAlert
                  size={20}
                  strokeWidth={1.5}
                  className="text-red-800 shrink-0"
                />
              )}
              <p className="text-red-800 small-text font-medium">
                {errors.price?.message?.toString()}
              </p>
            </div>
          </div>
          {/* Maximum guests */}
          <div className="flex flex-col flex-1 w-full">
            <label htmlFor="max-guests" className="ml-4 mb-2">
              Maximum guests
            </label>
            <input
              type="number"
              {...register("maxGuests", { valueAsNumber: true })}
              id="max-guests"
              placeholder="e.g. 4"
              className="bg-cloud-white-50 border border-cloud-white-600 rounded-4xl p-4 w-full shadow-[inset_0_4px_4px_0_rgba(0,0,0,0.25)]"
            />
            <div className="flex gap-2 ml-4 mt-2">
              {errors.maxGuests?.message && (
                <CircleAlert
                  size={20}
                  strokeWidth={1.5}
                  className="text-red-800 shrink-0"
                />
              )}
              <p className="text-red-800 small-text font-medium">
                {errors.maxGuests?.message?.toString()}
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Rating */}
      <section className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h2>Rating</h2>
          <p className="text-deep-forest-400">Set the rating for your venue.</p>
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-start">
          <div className="flex flex-col flex-1 w-full">
            <label htmlFor="rating" className="ml-4 mb-2">
              Rating
            </label>
            <input
              type="number"
              {...register("rating", {
                setValueAs: (v) => (v === "" ? undefined : Number(v)),
              })}
              id="rating"
              placeholder="e.g. 4"
              className="bg-cloud-white-50 border border-cloud-white-600 rounded-4xl p-4 w-full shadow-[inset_0_4px_4px_0_rgba(0,0,0,0.25)]"
            />
            <div className="flex gap-2 ml-4 mt-2">
              {errors.rating?.message && (
                <CircleAlert
                  size={20}
                  strokeWidth={1.5}
                  className="text-red-800 shrink-0"
                />
              )}
              <p className="text-red-800 small-text font-medium">
                {errors.rating?.message?.toString()}
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Amenities */}
      <section className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h2>Amenities</h2>
          <p className="text-deep-forest-400">
            Select everything your venue offers.
          </p>
        </div>
        {/* Amenities checkboxes */}
        <div className="flex flex-col md:flex-row flex-wrap gap-4 p-6 w-full md:w-fit bg-cloud-white-50 rounded-2xl">
          <label className="flex items-center gap-2 p-4 rounded-full border border-cloud-white-600 cursor-pointer has-checked:bg-ocean-100 has-checked:border-ocean-500">
            <input type="checkbox" {...register("meta.wifi")} />
            Wifi
          </label>
          <label className="flex items-center gap-2 p-4 rounded-full border border-cloud-white-600 cursor-pointer has-checked:bg-ocean-100 has-checked:border-ocean-500">
            <input type="checkbox" {...register("meta.parking")} />
            Parking
          </label>
          <label className="flex items-center gap-2 p-4 rounded-full border border-cloud-white-600 cursor-pointer has-checked:bg-ocean-100 has-checked:border-ocean-500">
            <input type="checkbox" {...register("meta.breakfast")} />
            Breakfast
          </label>
          <label className="flex items-center gap-2 p-4 rounded-full border border-cloud-white-600 cursor-pointer has-checked:bg-ocean-100 has-checked:border-ocean-500">
            <input type="checkbox" {...register("meta.pets")} />
            Pets allowed
          </label>
        </div>
      </section>
      {/* Location */}
      <section className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h2>Location</h2>
            <p className="text-deep-forest-400">
              Guests will see the city and country on the card. The full address
              is shared in the venue details page.
            </p>
          </div>
          {/* Address */}
          <div className="flex flex-col">
            <label htmlFor="address" className="ml-4 mb-2">
              Address
            </label>
            <input
              type="text"
              {...register("location.address")}
              id="address"
              placeholder="Street and number"
              className="bg-cloud-white-50 border border-cloud-white-600 rounded-4xl p-4 w-full shadow-[inset_0_4px_4px_0_rgba(0,0,0,0.25)]"
            />
          </div>
          {/* City and ZIP Code */}
          <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center md:items-end">
            {/* City */}
            <div className="flex flex-col flex-1 w-full">
              <label htmlFor="city" className="ml-4 mb-2">
                City
              </label>
              <input
                type="text"
                {...register("location.city")}
                id="city"
                placeholder="e.g. Oslo"
                className="bg-cloud-white-50 border border-cloud-white-600 rounded-4xl p-4 w-full shadow-[inset_0_4px_4px_0_rgba(0,0,0,0.25)]"
              />
            </div>
            {/* ZIP code */}
            <div className="flex flex-col flex-1 w-full">
              <label htmlFor="zip-code" className="ml-4 mb-2">
                ZIP code
              </label>
              <input
                type="text"
                {...register("location.zip")}
                id="zip-code"
                placeholder="e.g. 5555"
                className="bg-cloud-white-50 border border-cloud-white-600 rounded-4xl p-4 w-full shadow-[inset_0_4px_4px_0_rgba(0,0,0,0.25)]"
              />
            </div>
          </div>
          {/* Country and Continent */}
          <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center md:items-end">
            {/* Country */}
            <div className="flex flex-col flex-1 w-full">
              <label htmlFor="country" className="ml-4 mb-2">
                Country
              </label>
              <input
                type="text"
                {...register("location.country")}
                id="country"
                placeholder="e.g. Norway"
                className="bg-cloud-white-50 border border-cloud-white-600 rounded-4xl p-4 w-full shadow-[inset_0_4px_4px_0_rgba(0,0,0,0.25)]"
              />
            </div>
            {/* Continent */}
            <div className="flex flex-col flex-1 w-full">
              <label htmlFor="continent" className="ml-4 mb-2">
                Continent
              </label>
              <input
                type="text"
                {...register("location.continent")}
                id="continent"
                placeholder="e.g. Europe"
                className="bg-cloud-white-50 border border-cloud-white-600 rounded-4xl p-4 w-full shadow-[inset_0_4px_4px_0_rgba(0,0,0,0.25)]"
              />
            </div>
          </div>
        </div>
        {/* Map */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h3>Map</h3>
            <p className="text-deep-forest-400">
              If you want a map of the location to show, fill in the latitude
              and longitude. These are optional to add, but no map will show if
              not added.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-start">
            {/* Latitude */}
            <div className="flex flex-col flex-1 w-full">
              <label htmlFor="map-latitude" className="ml-4 mb-2">
                Latitude
              </label>
              <input
                type="number"
                step="any"
                {...register("location.lat", {
                  setValueAs: (v) => (v === "" ? undefined : Number(v)),
                })}
                id="map-latitude"
                placeholder="e.g. 59.9139"
                className="bg-cloud-white-50 border border-cloud-white-600 rounded-4xl p-4 w-full shadow-[inset_0_4px_4px_0_rgba(0,0,0,0.25)]"
              />
              <div className="flex gap-2 ml-4 mt-2">
                {errors.location?.lat?.message && (
                  <CircleAlert
                    size={20}
                    strokeWidth={1.5}
                    className="text-red-800 shrink-0"
                  />
                )}
                <p className="text-red-800 small-text font-medium">
                  {errors.location?.lat?.message?.toString()}
                </p>
              </div>
            </div>
            {/* Longitude */}
            <div className="flex flex-col flex-1 w-full">
              <label htmlFor="map-longitude" className="ml-4 mb-2">
                Longitude
              </label>
              <input
                type="number"
                step="any"
                {...register("location.lng", {
                  setValueAs: (v) => (v === "" ? undefined : Number(v)),
                })}
                id="map-longitude"
                placeholder="e.g. 10.7522"
                className="bg-cloud-white-50 border border-cloud-white-600 rounded-4xl p-4 w-full shadow-[inset_0_4px_4px_0_rgba(0,0,0,0.25)]"
              />
              <div className="flex gap-2 ml-4 mt-2">
                {errors.location?.lng?.message && (
                  <CircleAlert
                    size={20}
                    strokeWidth={1.5}
                    className="text-red-800 shrink-0"
                  />
                )}
                <p className="text-red-800 small-text font-medium">
                  {errors.location?.lng?.message?.toString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Form actions */}
      <div className="flex justify-center gap-4">
        <Button variant="medium" color="ghost" href="/bookings">
          Cancel
        </Button>
        <Button variant="medium" color="primary" type="submit">
          Update Venue
        </Button>
      </div>
    </form>
  );
}
