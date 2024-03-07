function CardComponent(props) {
    return (
    <div id="container" className="flex flex-col bg-white shadow-xl w-36 h-36 items-center justify-center align-middle">
    {props.children}
    <h1 className="text-1xl text-[#3A8CB1] font-bold">{props.number}</h1>
    <h1 className="text-xs">{props.description}</h1>
    </div>
    );
}

export default CardComponent;