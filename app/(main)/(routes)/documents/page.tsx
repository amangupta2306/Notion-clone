"use client";

import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/clerk-react";
import { useMutation } from "convex/react";
import { PlusCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const DocumentsPage = () => {
  const router = useRouter();
  const create = useMutation(api.documents.create);
  const { user } = useUser();

  const onCreate = () => {
    const promise = create({ title: "Untitled" }).then((documentId) =>
      router.push(`/documents/${documentId}`)
    );

    toast.promise(promise, {
      loading: "Creating a new note...",
      success: "New note created!",
      error: "Failed to Create a new note.",
    });
  };
  return (
    <div className="flex items-center justify-center flex-col h-full w-full space-y-4">
      <p className="font-medium text-xl">
        Welcome {user?.fullName}&apos; in Notion.
      </p>
      <Button onClick={onCreate} className="font-medium">
        <PlusCircle className="h-4 w-4 mr-2" />
        Create a note
      </Button>
    </div>
  );
};

export default DocumentsPage;
