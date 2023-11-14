import Link from "next/link";
import TailLink from "./TailLink";
export default function TailHeaderMenu() {
    return (
        <div className="p-5 flex justify-between items-center border-gray-200 border-b-2"> 
            <div className="text-2xl font-bold">Next Js 실습</div>
            <nav>
                <ul className="flex gap-4">
                    <li><TailLink href='/lec/clock' title="Clock"/></li>
                    <li><TailLink href='/lec/lotto' title="Lotto"/></li>
                    <li><TailLink href='/lec/boxoffice' title="BoxOffice"/></li>
                    <li><TailLink href='/lec/boxoffices' title="BoxOffice2"/></li>

                    <li><TailLink href='/' title="Home"/></li>
                </ul>
            </nav>
        </div>
    );
}

