import Link from "next/link";
import { BackgroundIcon, GitHubIcon, TextIcon, TwitterIcon } from "./Icons";

export default function Header() {
  return (
    <header className="fixed top-16 z-10 flex w-full items-center justify-center text-center">
      <div>
        <div className="m-4 flex items-center gap-4 text-sm">
          <Link href="/">
            <BackgroundIcon />
          </Link>
          <Link href="/text">
            <TextIcon />
          </Link>
          |<h1>UI Gradient</h1> |
          <Link href="https://github.com/narmanguebraun">
            <GitHubIcon />
          </Link>
          <Link href="https://x.com/narmanguebraun">
            <TwitterIcon />
          </Link>
        </div>
      </div>
    </header>
  );
}
