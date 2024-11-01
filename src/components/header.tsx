const Header = () => {
  return (
    <header style={{
      display: "flex",
    }}>

      <ul style={{
        display: "flex",
        justifyContent: "space-evenly",
        marginLeft:"20px",
        fontSize: "20px", fontWeight: "bold"
      }}>

        <li style={{ listStyleType: "none" }}>
          <a href="./about" target="-blank" style={{ textDecoration: "none", color: "black" }}>About-us</a>
        </li>
        <li style={{ listStyleType: "none" }}>
          <a href="./contact" target="-blank" style={{ textDecoration: "none", color: "black" }}>Contact-us</a>
        </li>
        <li style={{ listStyleType: "none" }}>
          <a href="./services" target="-blank" style={{ textDecoration: "none", color: "black" }}>Services</a>
        </li>
      </ul>





    </header>
  );
};

export default Header;