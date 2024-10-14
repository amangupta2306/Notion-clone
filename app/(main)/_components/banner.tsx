"use client";

import { ConfirmModal } from "@/components/modals/confirm-modal";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useMutation } from "convex/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface BannerProps {
  documentId: Id<"documents">;
}

export const Banner = ({ documentId }: BannerProps) => {
  const router = useRouter();
  const restore = useMutation(api.documents.restore);
  const remove = useMutation(api.documents.remove);

  const onRestore = () => {
    const promise = restore({ id: documentId });

    toast.promise(promise, {
      loading: "Restoring note...",
      success: "Note restored!",
      error: "Failed to restore note.",
    });
  };

  const onRemove = () => {
    const promise = remove({ id: documentId });

    toast.promise(promise, {
      loading: "Deleting note...",
      success: "Note deleted!",
      error: "Failed to delete note.",
    });

    router.push("/documents");
  };

  return (
    <div className="w-full bg-red-600 text-white flex items-center justify-center p-2 gap-x-2">
      <p>This page is in the trash.</p>

      <Button
        size={"sm"}
        onClick={onRestore}
        variant={"outline"}
        className="bg-transparent border-white hover:bg-primary/5 hover:text-white font-normal p-1 px-2 h-auto"
      >
        Restore Page
      </Button>
      <ConfirmModal onConfirm={onRemove}>
        <Button
          size={"sm"}
          variant={"outline"}
          className="bg-transparent border-white hover:bg-primary/5 hover:text-white font-normal p-1 px-2 h-auto"
        >
          Delete forever
        </Button>
      </ConfirmModal>
    </div>
  );
};
