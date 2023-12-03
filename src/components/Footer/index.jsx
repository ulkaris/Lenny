import "./footer.module.scss";
import styles from "./footer.module.scss";
import { Logo } from "../../components/Logo";

export const Footer = () => {
  return (
    <>
      <footer>
        <div className={styles.footerPart1}>
          <div className={styles.footerLogoSaver}>
            <Logo />
            <div>
              The biggest marketplace managed by Ideologist corp, which provides
              various kinds of daily needs and hobbies.
            </div>
          </div>
          <div className={styles.footUl}>
            <ul>
              <h1 className={styles.footerUlH1}>About Lenny</h1>
              <li>Information</li>
              <li>Store Lactor</li>
              <li>Bulk Purchase</li>
              <li>Alteration Services</li>
              <li>Gift Delivery Service</li>
              <li>Live Station</li>
            </ul>
            <ul>
              <h1 className={styles.footerUlH1}>About Lenny</h1>
              <li>FAQ</li>
              <li>Return Policy</li>
              <li>Privacy Policy</li>
              <li>Accessibillity</li>
              <li>Contact Us</li>
            </ul>
            <ul>
              <h1 className={styles.footerUlH1}>Account</h1>
              <li>Membership</li>
              <li>Address</li>
              <li>Cupons</li>
            </ul>
            <ul>
              <h1 className={styles.footerUlH1}>Contact Us</h1>
              <li>For Lenny Consumer Complaint Services</li>
              <li>(684) 555-0102 and curtis.weaver@example.com</li>
              <li>Customers Complaint Service</li>
              <li>Directorate Generate of the Republic of Indonesia</li>
              <li>(480) 555-0103</li>
            </ul>
          </div>
        </div>
      </footer>
      <div className={styles.footerPart2}>
        <div className={styles.copyright}>
          COPYRIGHT © LENNY CO., LTD. ALL RIGHTS RESERVED.
        </div>
        <div className={styles.termsAndPrivacy}>
          <div>Terms of use</div>
          <div>Privacy Policy</div>
        </div>
      </div>
    </>
  );
};
