import styles from "../styles/components/Navbar.module.css";
import { useRouter } from "next/router";
import { FC } from "react";

interface CustomLinkProps {
	href:string;
}

const CustomLink: FC<CustomLinkProps> = props => {
	const router = useRouter();
	const onclick = () => {
		console.log(`pusing to: ${props.href}`)
		router.push(props.href);
	}
	return (
		<div className={styles.item} onClick={() => onclick()}>
		    <h3 className={styles.text}>{props.children}</h3>
		</div>
		);
	}
	
	const Navbar = function() {
		return (
			<div className={styles.navbar}>
			    <CustomLink href="/">home</CustomLink>
			    <CustomLink href="/blogs">blogs</CustomLink>
			    <CustomLink href="/projects">projects</CustomLink>
			</div>
			);
		}
		
		export default Navbar;
		