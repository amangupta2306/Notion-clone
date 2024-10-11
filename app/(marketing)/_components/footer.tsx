import { Button } from "@/components/ui/button";
import { Logo } from "./logo";

export const Footer = () => {
  return (
    <div className="flex items-center justify-between w-full bg-background z-50 p-4 dark:bg-[#1F1F1F]">
      <Logo />
      <div>
        <Button variant={"ghost"} size={"sm"}>
            Privacy Policy
        </Button>
        <Button variant={"ghost"} size={"sm"}>
            Terms & Conditons
        </Button>
      </div>
    </div>
  );
};
