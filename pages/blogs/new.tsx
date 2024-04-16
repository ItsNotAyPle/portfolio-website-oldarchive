import styles from "../../styles/blog/NewBlog.module.css";
import Layout from "../../components/Layout";

const ContentElement = () => {
    return (
        <textarea
            className={styles.contentInput}
            placeholder="content..."
        ></textarea>
    );
}

const TitleInput = () => {
    return (
        <input
            className={styles.titleInput}
            type="text"
            name="titleInput"
            placeholder="title..."
        />
    );
}

const SubmitBtn = () => {
    return (
        <input
            className={styles.submitBtn}
            type="submit"
            value="Submit new blog!"
        />
    );
}

const sendNewBlog = async (title:string, content:string) => {
    await fetch("http://localhost:3000/api/blog/new", {
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title:title,
            content:content
        })    
    });
}

export default function NewBlog() {
    const onSubmit = event => {
        event.preventDefault();
        console.log("submitbtn pressed!");
        const content = event.target[0].value;
        const title = event.target[1].value;
        if (content != "" && title != "") {
            console.log("sending a new blog request with title as " + title + " and content as " + content);
            sendNewBlog(title, content);
        }
    }
    
    return (
        <Layout classname={styles.root}>
            <form onSubmit={onSubmit}>
                <div className={styles.inputArea}>
                    <ContentElement />
                    <div className={styles.titleAndSubmitParent}>
                        <TitleInput />
                        <SubmitBtn />
                    </div>
                </div>
            </form>
        </Layout>
    );
}

