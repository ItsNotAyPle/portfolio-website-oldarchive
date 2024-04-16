/*
    I didn't put much effort into the specific blogs page.
    The reason is that this website won't go live and this was just
    for experience. Nobody will actually read these!.
*/ 

import Layout from "../../components/Layout";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import styles from "../../styles/blog/SpecificBlog.module.css";

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.query;
    const res = await fetch(`http://localhost:3000/api/blog/${id}`);
    const blog = await res.json();
    
    return {
        props: {
            blog: blog
        }
    }
}

export default function SpecificBlog ({blog}) {
    const errMsg = "The specific blog could not be fount!";
    console.log(blog);
    if (blog === null || blog === undefined) {
        return (
            <b>
                <p className={styles.errMsg}>{errMsg}</p>
            </b>
        );
    }
    return (
        <div className={styles.root}>
            <div className={styles.blog}>
                <h1 className={styles.title}>{blog[0]['title']}</h1>
                <div className={styles.paraParent}>
                    <p className={styles.para}>{blog[0]['content']}</p>
                </div>
            </div>
        </div>
    );
}
        