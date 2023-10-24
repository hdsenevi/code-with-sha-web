import NavBar from "@/components/NavBar";
import Posts from "@/components/Posts";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="p-24">
      <NavBar />
      <section className="py-12 flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold">Welcome to code with Sha 🎉</h1>
        <p className="text-s  text-muted-foreground">
          Articles and news about application development, by Sha Senevirathne
        </p>
        <div></div>
      </section>
      <div className="flex gap-6 items-center justify-center">
        <Button>Learn more</Button>
        <Button>Eroll Now</Button>
      </div>
      <div>
        <Posts />
      </div>
    </main>
  );
}
