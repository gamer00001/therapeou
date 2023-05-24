import { Link } from "@mui/material"
const  MenuLink = ({name}) => (
    <Link style={{
        textDecoration: "none", 
        color: "#000", 
        fontFamily: "Inter",
    }}>
        {name}
    </Link>
)

export default MenuLink;    