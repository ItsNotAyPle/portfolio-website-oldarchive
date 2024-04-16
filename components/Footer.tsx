import Link from 'next/link';
import styles from '../styles/components/Footer.module.css';
import { FC } from "react";
const ytLink = "https://www.youtube.com/channel/UCCXvk9SYHGSNtvRyE2sXvng";
const tvLink = "https://www.twitch.tv/ayplelive";

interface RedirectLinkProps {
    href:string;
}

const RedirectLink:FC<RedirectLinkProps> = (props) => {
    return (
        <div className={styles.redirectLink}>
            <Link href={props.href}>{props.children}</Link>
        </div>
    );
}

const Footer = function() {
    return (
        <div className={styles.footer}>
            <div className={styles.socialMediaWrapper}>
                <Link href={ytLink}>Youtube</Link>
                <Link href={tvLink}>Twitch</Link>
            </div>
        </div>
    );
}

export default Footer;
