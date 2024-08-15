import {
  Navbar,
  Header,
  About,
  Connection,
  Fold,
  Vision,
  Room,
  WhereAndWhen,
  CTA,
  Footer,
} from "../../components";
export default function Home() {
  return (
    <main className="overflow-hidden">
      <div className="relative bg-[#1a1a1a]">
        <Navbar />
        <Header />
      </div>
      <div className="bg-[#1a1a1a]">
        <Fold bg1="bg-[#262626]" bg2="bg-[#00A99D]" text="text-white" />
      </div>
      <div className="bg-[#1a1a1a] px-[1rem] md:px-[2rem] lg:px-[4rem] py-4">
        <About />
      </div>
      <div className="bg-[#F3FFFE]">
        <Connection />
      </div>
      <div className="bg-[#1a1a1a]">
        <Vision />
        <Room />
      </div>
      <WhereAndWhen />
      <div className="bg-[#1a1a1a]">
        <Fold bg1="bg-[#004080]" bg2="bg-white" text="text-[#004080]" />
        <CTA />
      </div>
      <div className="border-t border-[#262626]">
        <div className="bg-[#1a1a1a] px-[1rem] md:px-[2rem] lg:px-[4rem] py-8">
          <Footer />
        </div>
      </div>
    </main>
  );
}
