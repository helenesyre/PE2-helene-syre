import { Trash } from "lucide-react";
import Button from "../ui/Button";
import { Modal } from "../modal/Modal";
import { useState } from "react";
import { ToastType, useAuth, useToast } from "@/app/_lib/stores";
import { useMutation } from "@tanstack/react-query";
import { deleteVenue } from "@/app/_lib/api";
import { useRouter } from "next/navigation";

export default function DeleteVenue({ venueId }: { venueId: string }) {
  const { addMessage } = useToast();
  const { data } = useAuth();
  const router = useRouter();
  const [modalState, setModalState] = useState(false);
  const handleModal = () => {
    setModalState(!modalState);
  };

  const mutation = useMutation({
    mutationFn: deleteVenue,
    onSuccess: () => {
      addMessage({
        message: "Successfully deleted venue",
        duration: 10000,
        type: ToastType.SUCCESS,
      });
      router.push("/venues/");
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
    <section className="flex flex-col gap-6 p-6 bg-cloud-white-50 border border-red-200 rounded-2xl">
      <Modal
        title="Delete Venue?"
        content="Are you sure you want to delete this venue? Once you delete your
  venue, it cannot be recovered."
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
                  venueId: venueId,
                })
              }
            >
              <Trash size={20} strokeWidth={1.5} />
              Delete
            </Button>
          </>
        }
        modalState={modalState}
        toggleModal={handleModal}
      />
      <div className="flex flex-col gap-2">
        <h2>Delete Venue</h2>
        <p className="text-deep-forest-400">
          Once you delete your venue, it cannot be recovered.
        </p>
      </div>
      <Button
        variant="medium"
        color="delete"
        width="fit"
        type="button"
        className="mx-auto"
        onClick={handleModal}
      >
        <Trash size={20} strokeWidth={1.5} />
        Delete Venue
      </Button>
    </section>
  );
}
