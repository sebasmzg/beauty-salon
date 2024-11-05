import Link from "next/link";

export default function Home() {
  return (
    <div >
      <div>Home</div>
      <div><button><Link href={"/login"}>login</Link></button></div>
    </div>
  );
}
