import Link from "next/link";
import Slogan from "./components/slogan";

export default function Page() {
  return (
    <>
      <div className="container">
        <Slogan></Slogan>
      </div>
      <p>
        <Link href={"/test"}>navigate to test page</Link>
      </p>
    </>
  );
}
