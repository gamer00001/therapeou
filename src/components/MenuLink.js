import { Link } from "@mui/material";
const MenuLink = ({ name, link }) => (
  <Link
    href={link}
    style={{
      textDecoration: "none",
      color: "#000",
      fontFamily: "Inter",
    }}
  >
    {name}
  </Link>
);

export default MenuLink;
