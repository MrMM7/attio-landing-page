import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="md:text-5xl/15 text-[27px] md:max-w-3xl text-center mt-20 font-medium">
        Oops, It seems like you're trying to reach a page that doesn't exist
      </h1>
      <Link href="/">
        <button className="bg-base-600 px-10 py-3 text-base-100 rounded-2xl my-10 cursor-pointer active:cursor-default">
          Home
        </button>
      </Link>
    </div>
  );
}
