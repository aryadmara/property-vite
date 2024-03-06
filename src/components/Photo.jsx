function PhotoComponent(props) {
    return ( 
            <img className="h-52 w-36 object-cover"src={props.url} alt="" />
     );
}

export default PhotoComponent;