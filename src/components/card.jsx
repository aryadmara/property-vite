function CardComponent(props) {
    return (
    <div id="container" className="flex flex-col bg-white shadow-xl w-56 h-56 items-center justify-center align-middle">
    {props.children}
    <h1 className="text-2xl text-[#3A8CB1] font-bold">{props.number}</h1>
    <h1>{props.description}</h1>
    </div>
    );
}

export default CardComponent;