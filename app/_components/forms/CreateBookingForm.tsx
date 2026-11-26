import { createBooking } from "@/app/_lib/api";
import { CreateBookingSchema } from "@/app/_lib/schema";
import { ToastType, useAuth, useToast } from "@/app/_lib/stores";
import {
  ApiResponse,
  CreateBookingResponseData,
  VenueResponseData,
  CreateBookingRequest,
} from "@/app/_lib/types";
import { DateRange, DayPicker } from "@daypicker/react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import z from "zod";
import { useState } from "react";
import Button from "../ui/Button";

export function CreateBookingForm({
  venueData,
}: {
  venueData: VenueResponseData;
}) {
  const { addMessage } = useToast();
  const { data: authData } = useAuth();
  const router = useRouter();
  const [selectedRange, setSelectedRange] = useState<DateRange>();

  // Reach hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof CreateBookingSchema>>({
    resolver: zodResolver(CreateBookingSchema),
    defaultValues: {
      dateFrom: selectedRange?.from?.toISOString() || "",
      dateTo: selectedRange?.to?.toISOString() || "",
      venueId: venueData?.id || "",
      guests: 1,
    },
    mode: "onChange",
  });

  const mutation = useMutation<
    ApiResponse<CreateBookingResponseData>,
    Error,
    { accessToken: string; data: CreateBookingRequest }
  >({
    mutationFn: createBooking,
    onSuccess: () => {
      addMessage({
        message: "Successfully created booking",
        duration: 10000,
        type: ToastType.SUCCESS,
      });
      router.push("/profile");
    },
    onError: (error) => {
      addMessage({
        message: error.message,
        duration: 10000,
        type: ToastType.ERROR,
      });
    },
  });

  return (
    <aside className="sticky top-10 self-start col-span-1 flex flex-col gap-6 p-6 w-fit h-fit bg-cloud-white-50 rounded-2xl">
      <div className="sr-only">
        <h2>Booking calendar</h2>
        <p>
          Select your desired dates to check availability and make a booking.
        </p>
      </div>
      <form
        className="flex flex-col gap-4 w-fit"
        onSubmit={handleSubmit((data) => {
          if (!authData?.accessToken) return;
          data.dateFrom = selectedRange?.from?.toISOString() || "";
          data.dateTo = selectedRange?.to?.toISOString() || "";
          mutation.mutate({ accessToken: authData.accessToken, data });
        })}
      >
        <DayPicker
          mode="range"
          timeZone="UTC"
          // disable dates before today + already booked dates
          disabled={[
            {
              before: new Date(),
            },
            ...(venueData.bookings?.flatMap((booking) => {
              return [
                {
                  from: new Date(booking.dateFrom),
                  to: new Date(booking.dateTo),
                },
              ];
            }) || []),
          ]}
          selected={selectedRange}
          onSelect={setSelectedRange}
        />
        <input type="hidden" {...register("venueId")} value={venueData?.id} />
        <input type="number" {...register("guests")} />
        <Button variant="medium" color="primary" type="submit">
          Book now
        </Button>
      </form>
    </aside>
  );
}
