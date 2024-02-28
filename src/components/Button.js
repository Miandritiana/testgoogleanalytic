function Button(props) {
    return <button className="button" style={{
        padding: '10px 30px',
        backgroundColor: 'white',
        color: '#0d695b',
        borderRadius: '15px',
        border: 'none',
        fontSize: '15px',
    }} onClick={props.click}> {props.name} {props.plus} </button>
  }
  
  export default Button;