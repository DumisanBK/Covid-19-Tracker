import React from "react";
import styles from './Footer.module.css';

const Footer = () => {
    const onMouseOut = (e) => {
      e.target.style.color = "#cccccc";
    };
  
    const SocialWidget = [
      {
        SocialMediaName: "LinkedIn",
        ProfileLink: "https://www.linkedin.com/in/dumisani/",
        fontAwesomeIconName: "fab fa-linkedin",
        OnMouseOverColor: "#4875B4",
      },
      {
        SocialMediaName: "Hotmail",
        ProfileLink: "mailto:dkaund1@hotmail.com",
        fontAwesomeIconName: "far fa-envelope",
        OnMouseOverColor: "#D44638",
        _comment: "OnMouseOverColor for yahoo mail: #720e9e",
      },
      {
        SocialMediaName: "WhatsApp",
        ProfileLink: "https://wa.me/+265996635520",
        fontAwesomeIconName: "fab fa-whatsapp",
        OnMouseOverColor: "#25d366",
      },
      {
        SocialMediaName: "Facebook",
        ProfileLink: "https://www.facebook.com/dumisanbrownkaunda",
        fontAwesomeIconName: "fab fa-facebook-f",
        OnMouseOverColor: "#1877f2",
      },
    ];
  
    return (
      <React.Fragment>
        <div className={styles.container}>
          <h6
            style={{
              display: "block",
              marginBottom: "0px",
              fontSize: 30,
              marginTop: "40px",
              textAlign: "center",
            }}
          >
            Created with care by{" "}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "rgba(0,0,255,0.6)", textDecoration: "none" }}
            >
              MulticSystems Tech
            </a>
          </h6>
        </div>
        <div className={styles.container}>
          <br />
          <ul className="list" style={{ listStyleType: "none" }}>
            {SocialWidget.map((data, key) => {
              return (
                <li
                  key={key}
                  style={{ display: "inline-block", marginRight: "17px" }}
                >
                  <a
                    onMouseOver={(e) => {
                      e.target.style.color = `${data.OnMouseOverColor}`;
                    }}
                    onMouseOut={onMouseOut}
                    href={data.ProfileLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#cccccc", fontSize: "40px" }}
                  >
                    <i className={`${data.fontAwesomeIconName}`}></i>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
       
      </React.Fragment>
    );
  };
  
  export default Footer;
  