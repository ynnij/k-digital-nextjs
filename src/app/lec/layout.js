import Link from "next/link";

export default function LecLayout({ children }) {
    return (
        <main>
            <div className="p-10 flex h-12 justify-between items-center bg-slate-950 text-white">
               <div>리액트 수업자료</div>
               <nav>
                <ul className="flex gap-5 mx-2">
                    <li><Link href="/lec/clock">Clock</Link></li>
                    <li><Link href="/lec/lotto">Lotto</Link></li>
                    <li><Link href="/lec">Home</Link></li>
                </ul>
               </nav>
            </div>
            {children}
        </main>
    );
}

