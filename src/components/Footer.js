
function Footer(props) {
  return (
    <>
        <p className='title'>{props.title}</p>
        <ul className='listeLink'>
            <li>{props.link1}</li>
            <li>{props.link2}</li>
            <li>{props.link3}</li>
            <li>{props.link4}</li>
        </ul>
    </>
  );
}

export default Footer;

