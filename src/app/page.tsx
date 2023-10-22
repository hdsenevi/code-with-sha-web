import Nav from "@/components/Nav";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="p-24">
      <Nav />
      <section className="py-12 flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold">Welcome to code with Sha 🎉</h1>
        <p className="text-2xl text-muted-foreground">
          {" "}
          Sha's coding blog and portfolio website.
        </p>
        <div></div>
      </section>
      <div className="flex gap-6 items-center justify-center">
        <Button>Learn more</Button>
        <Button>Eroll Now</Button>
      </div>
    </main>
  );
}
