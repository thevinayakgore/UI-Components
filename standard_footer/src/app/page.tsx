import FooterModern from "@/components/Footer";


export default function Home() {
  return (
    <div className="relative min-h-screen">
      <main className="container m-auto px-4 py-10 w-full h-screen">
        <div className="p-10 text-xl bg-primary/5 animate-pulse rounded-2xl h-full">
          DashBoard
        </div>
      </main>
      <FooterModern />
    </div>
  );
}
