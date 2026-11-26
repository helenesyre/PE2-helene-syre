"use client";
import Link from "next/link";
import Image from "next/image";
import { CalendarDays, CalendarX, Trash, Users } from "lucide-react";
import { Sparkles } from "lucide-react";
import Tag from "../ui/Tags";
import Button from "../ui/Button";
import { ProfileBookingResponseData } from "@/app/_lib/types";
import { formatVenueDate } from "@/app/_lib/utils";
import { ToastType, useAuth, useToast } from "@/app/_lib/stores";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { deleteBooking } from "@/app/_lib/api";
import { Modal } from "../modal/Modal";

// Product card component
export default function BookingCard({
  booking,
  refetch,
}: {
  booking: ProfileBookingResponseData;
  refetch: () => void;
}) {
  const { addMessage } = useToast();
  const { data } = useAuth();
  const [modalState, setModalState] = useState(false);
  const handleModal = () => {
    setModalState(!modalState);
  };

  const mutation = useMutation({
    mutationFn: deleteBooking,
    onSuccess: () => {
      addMessage({
        message: "Successfully deleted booking",
        duration: 10000,
        type: ToastType.SUCCESS,
      });
      refetch();
      handleModal();
    },
    onError: (error) => {
      addMessage({
        message: error.message,
        duration: 10000,
        type: ToastType.ERROR,
      });
    },
  });

  if (!data) return;

  return (
    <div className="p-3 bg-cloud-white-50 rounded-lg flex flex-col xl:flex-row gap-4">
      <Modal
        title="Cancel Booking?"
        content="Are you sure you want to cancel this booking? Once you cancel your
  booking, it cannot be recovered."
        actions={
          <>
            <Button
              variant="small"
              color="ghost"
              width="fit"
              onClick={handleModal}
            >
              Cancel
            </Button>
            <Button
              variant="medium"
              color="delete"
              width="fit"
              type="button"
              onClick={() =>
                mutation.mutate({
                  accessToken: data.accessToken,
                  bookingId: booking.id,
                })
              }
            >
              <Trash size={20} strokeWidth={1.5} />
              Cancel Booking
            </Button>
          </>
        }
        modalState={modalState}
        toggleModal={handleModal}
      />
      {/* Image */}
      <Link
        href={`/venues/${booking.venue.id}`}
        className="relative w-full xl:w-64 2xl:w-80 h-64 md:h-50 xl:h-full shrink-0"
      >
        <Tag
          variant="medium"
          color="primary"
          className="absolute top-3 left-3 z-1"
        >
          <Sparkles size={16} strokeWidth={1.5} />
          {(booking.venue.rating ?? 0).toFixed(1)}
        </Tag>
        <Image
          src={booking.venue.media?.[0]?.url || "/images/placeholder.png"}
          alt="Venue"
          fill
          loading="eager"
          sizes="33vw, 100vw"
          className="object-cover rounded-lg"
        />
      </Link>
      <div className="w-full">
        {/* Venue details */}
        <div>
          <div>
            <span className="label-text-lowercase text-ocean-700">
              {booking.venue.location?.city}・{booking.venue.location?.country}
            </span>
            <h3 className="break-all">{booking.venue.name}</h3>
          </div>
          <div className="flex flex-col gap-2 my-4">
            <div className="flex items-center gap-2">
              <CalendarDays size={24} strokeWidth={1.5} className="shrink-0" />
              <p>
                {formatVenueDate(booking.dateFrom)} -{" "}
                {formatVenueDate(booking.dateTo)}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Users size={24} strokeWidth={1.5} className="shrink-0" />
              <p>{booking.guests} guests</p>
            </div>
          </div>
        </div>
        {/* Price and view button */}
        <div className="flex items-center gap-2 mb-4">
          <p className="price-text">NOK {booking.venue.price}</p>
          <p className="small-text text-stone-700">/ night</p>
        </div>
        {/* Card action buttons */}
        <div className="flex gap-3 pt-3 border-t border-cloud-white-600">
          <Button
            variant="small"
            color="borderPrimary"
            width="full"
            onClick={handleModal}
          >
            <CalendarX size={18} strokeWidth={2} className="shrink-0" />
            Cancel
          </Button>
          <Button
            variant="small"
            color="primary"
            width="full"
            href={`/venues/${booking.venue.id}`}
          >
            View
          </Button>
        </div>
      </div>
    </div>
  );
}
