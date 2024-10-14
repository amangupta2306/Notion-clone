"use client";

import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useCreateBlockNote } from "@blocknote/react";
import { useTheme } from "next-themes";

// interface EditorProps {
//   onChange: (value: string) => void;
//   initialContent?: string;
// }


//   {onChange
//   ,initialContent
// }: EditorProps
export default function Editor() {
  const { resolvedTheme } = useTheme();
  const editor = useCreateBlockNote();

  return (
    <BlockNoteView
      editor={editor}
      theme={resolvedTheme === "dark" ? "dark" : "light"}
    />
  );
}
