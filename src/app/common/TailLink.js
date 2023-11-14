import Link from "next/link";

export default function TailLink({href, title }) {
    return (
        <Link href={href} className=" text-slate-700 p-2 hover:text-slate-50 hover:bg-slate-700 rounded-lg">
            {title}
        </Link>
    );
}