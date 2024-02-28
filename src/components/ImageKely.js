function ImageKely(props) {
    return (
        <img src={props.imgKely} onClick={props.onClick} style={{
            height: '70px',
        }}/>
    );
}

export default ImageKely;
