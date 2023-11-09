import Link from "next/link";

export default function AboutLayout({ children }) {
    return (
        <main>
            <div className="p-10 flex h-12 justify-between items-center bg-slate-950 text-white">
               <div>About Layout</div>
               <nav>
                <ul className="flex gap-5 mx-2">
                    <li><Link href="/about">Home</Link></li>
                    <li><Link href="/about/test">test</Link></li>
                    <li><Link href="/about/test1">test1</Link></li>
                </ul>
               </nav>
            </div>
            {children}
        </main>
    );
}

