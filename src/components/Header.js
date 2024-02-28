import Button from "./Button";

function Header(props) {
  return (
    <>
      <div className="logoHeader">
        <img src="img/WhiteLogo.png" alt="logo" style={{
          width: '120px',
        }} />
      </div>

      <div className="searchHeader">
        <input type="text" style={{
          border: '2px solid white',
          borderRadius: '12px',
          margin: '10px',
          padding: '12px',
          background: 'transparent',
        }} ></input>
        <Button name={props.button}></Button>
      </div>
    </>
  );
}

export default Header;

