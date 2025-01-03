import Link from "next/link";
import {
  BackgroundIcon,
  GitHubIcon,
  TextIcon,
  TwitterIcon,
} from "@/components/Icons";

export default function Header() {
  return (
    <header className="flex items-center gap-4 p-6 text-sm">
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
    </header>
  );
}
