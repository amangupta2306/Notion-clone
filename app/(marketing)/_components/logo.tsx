import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const Logo = () => {
  return (
    <div>
      <p className={cn("font-semibold", font.className)}>Notion</p>
    </div>
  );
};
