import { FaGlobeAfrica } from "react-icons/fa";

export default function Header() {
    return (
        <header className="w-full h-[80px] flex gap-4 items-center justify-center bg-orange-300 z-10">
            <FaGlobeAfrica className="text-3xl"/>
            <h1 className="text-2xl uppercase tracking-wide font-bold">Travel Journal</h1>
        </header>
    )
}