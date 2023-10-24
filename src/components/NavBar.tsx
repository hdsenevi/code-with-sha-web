import Image from "next/image";
import { ModeToggle } from "./ModeToggle";

export default function NavBar() {
  return (
    <header>
      <nav className="sticky drop-shadow-xl z-10 bg-primary/10">
        <ul className="prose prose-xl mx-auto flex items-center justify-between">
          <li>
            <a
              className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
              href="https://codewithsha.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/code-with-sha-logo.svg"
                alt="Code with Sha Logo"
                className="dark:invert"
                width={150}
                height={25}
                priority
              />
            </a>
          </li>
          <li>
            <ModeToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
}
