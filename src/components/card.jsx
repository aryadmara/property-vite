import { LuBedDouble } from "react-icons/lu";

function CardComponent() {
    return (
    <div id="container" className="flex flex-col bg-white shadow-xl w-56 h-56 items-center justify-center align-middle">
        <LuBedDouble className="w-12 h-12 font-light" />
    <h1 className="text-2xl text-[#3A8CB1] font-bold">5 Bedrooms</h1>
    </div>
    );
}

export default CardComponent;