import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-gray-900 text-white">
      <div className="flex mx-4 md:mx-8 lg:mx-32 font-bold pt-7 pb-7">
        <div className="w-1/4 text-xl">PANDUSUBEKTI</div>
        <div className="hidden md:flex w-3/6 justify-between capitalize font-bold">
          <Link href="/" passHref>
            <p className="nav-link">Home</p>
          </Link>
          <Link href="/about" passHref>
            <p className="nav-link">About Me</p>
          </Link>
          <Link href="/services" passHref>
            <p className="nav-link">Services</p>
          </Link>
          <Link href="/projects" passHref>
            <p className="nav-link">Projects</p>
          </Link>
          <Link href="/contact" passHref>
            <p className="nav-link">Contact Me</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
