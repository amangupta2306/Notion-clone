import { Footer } from "./_components/footer";
import { Heading } from "./_components/heading";

const MarketingPage = () => {
  return (
    <div className="min-h-full flex flex-col">
      <div className="flex items-center justify-center flex-1 text-center dark:bg-[#1F1F1F]">
        <Heading />
      </div>
      <Footer />
    </div>
  );
};

export default MarketingPage;
