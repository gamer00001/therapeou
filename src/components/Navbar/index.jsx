import { Grid } from "@mui/material";
import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { MENU_LINKS } from "../../constants/Menu";
import MenuLink from "../MenuLink";
import styles from "./styles.module.scss";
import CButton from "../CButton";
import { useNavigate } from "react-router-dom";

const Navbar = ({ loginRegisterCheck = true }) => {
  const navigate = useNavigate();

  const [loginTooltipOpen, setLoginTooltipOpen] = useState(false);
  const [registerTooltipOpen, setRegisterTooltipOpen] = useState(false);

  const handleRegisterTooltipAction = () => {
    setRegisterTooltipOpen(!registerTooltipOpen);
  };

  const handleLoginTooltipAction = () => {
    setLoginTooltipOpen(!loginTooltipOpen);
  };

  return (
    <>
      <Grid
        container
        direction="row"
        alignItems="center"
        spacing={3}
        sx={{ backgroundColor: "#F8F8F8" }}
      >
        <Grid item xs={3}>
          <img
            className="cursor-pointer"
            src={Logo}
            alt="logo"
            onClick={() => navigate("/")}
          />
        </Grid>
        <Grid item xs={6}>
          <Grid spacing={2} direction="row" className={styles.menuLinks}>
            {MENU_LINKS.map((listItem) => (
              <Grid
                item
                style={{
                  paddingTop: 0,
                  cursor: "pointer",
                  pointerEvents: "auto",
                }}
              >
                <MenuLink name={listItem.name} link={listItem.route} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        {loginRegisterCheck && (
          <Grid item xs={3}>
            <Grid spacing={2} direction="row" className={styles.menuLinks}>
              <Grid item style={{ paddingTop: 0 }}>
                <div
                  onMouseEnter={handleLoginTooltipAction}
                  onMouseLeave={handleLoginTooltipAction}
                >
                  <CButton
                    title="Sign In"
                    type="submit"
                    borderRadius="20px"
                    onClick={handleLoginTooltipAction}
                  />
                  <CustomTooltip
                    title="Sign In"
                    route="login"
                    navigate={navigate}
                    open={loginTooltipOpen}
                    setTooltip={handleLoginTooltipAction}
                  />
                </div>
              </Grid>
              <Grid item style={{ paddingTop: 0 }}>
                <div
                  onMouseEnter={handleRegisterTooltipAction}
                  onMouseLeave={handleRegisterTooltipAction}
                >
                  <CButton
                    title="Sign Up"
                    type="decline"
                    borderRadius="20px"
                    onClick={handleRegisterTooltipAction}
                  />
                  <CustomTooltip
                    navigate={navigate}
                    open={registerTooltipOpen}
                    setTooltip={handleRegisterTooltipAction}
                  />
                </div>
              </Grid>
            </Grid>
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default Navbar;

const CustomTooltip = ({
  open,
  title = "Sign Up",
  route = "register",
  navigate,
  setTooltip,
}) => {
  return (
    <>
      {open && (
        <div
          className={styles.signInContainer}

          // onMouseLeave={setTooltip}
        >
          <div id="tooltip" className={styles.tooltipContent}>
            <button
              className={styles.tooltipOption}
              onClick={() =>
                navigate(`/${route}`, {
                  state: { selectedType: "patient" },
                })
              }
            >
              {title} as Patient
            </button>
            <button
              className={styles.tooltipOption}
              onClick={() =>
                navigate(`/${route}`, {
                  state: { selectedType: "therapist" },
                })
              }
            >
              {title} as Therapist
            </button>
          </div>
        </div>
      )}
    </>
  );
};
