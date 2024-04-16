import Layout from "../components/Layout";
import styles from "../styles/pages/Projects.module.css";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
    const res = await fetch("http://localhost:3000/api/projects");  
    const projects = await res.json();

    return {   
        props: {
            projects: projects
        }
    }
}

export default function Projects({ projects }) {
    if (projects == undefined) {
        return <h1>There was an error fetching the projects!</h1>
    }
    return (
        <Layout classname={styles.root}>
            <table className={styles.projects}>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>github url</th>
                        <th>date created</th>
                        <th>languages</th>
                    </tr>
                </thead>
                <tbody>
                    {projects.map(project => {
                        return (
                            <tr key={project['id']}>
                                <td>{project['name']}</td>
                                <td><a href={project['github_url']}>{project['github_url']}</a></td>
                                <td>{project['date_created']}</td>
                                <td>{project['languages']}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </Layout>
    );
}
    