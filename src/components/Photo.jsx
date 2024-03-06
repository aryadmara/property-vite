function PhotoComponent(props) {
    return ( 
            <img className="h-80 w-56 object-cover"src={props.url} alt="" />
     );
}

export default PhotoComponent;