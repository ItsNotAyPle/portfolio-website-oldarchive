import '../styles/globals.css';
import styles from "../styles/pages/Loading.module.css";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Router from 'next/router';
import { CookiesProvider } from "react-cookie";
import { useEffect, useState } from "react";

const Loading = () => {
    return (
        <div className={styles.loadingParent}>
            <div className={styles.circle}>
                
            </div>
        </div>
    );
}

function MyApp({ Component, pageProps }) {
    const [loading, setLoading] = useState(false);
    
    Router.events.on('routeChangeStart', (url) => {
        console.log("route change started...");
        setLoading(true);
    })
    Router.events.on('routeChangeComplete', (url) => {
        console.log("route change completed...");
        setLoading(false)
    })
    Router.events.on('routeChangeError', () => {
        console.log("route change error...");
        setLoading(false);
    })
    
    useEffect(() => {
        console.log(loading);
    }, [loading]); 

    return (
        <Layout>
            <CookiesProvider>
                {loading && <Loading />}
                <Navbar />
                <Component {...pageProps} />
                {/* I honestly don't need a footer but heres proof */}
                {/* I know how to do one! */}
                {/* <Footer /> */}
            </CookiesProvider>
        </Layout>
    );
}


export default MyApp;
