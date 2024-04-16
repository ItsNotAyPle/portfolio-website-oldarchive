import Layout from "../../components/Layout";
import styles from "../../styles/blog/BlogsPage.module.css";
import { GetServerSideProps } from "next";

interface blogProps {
	title:string;
	content:string;
	datetime:string;
}

const Blog = (props:blogProps) => {
	return (
		<div className={styles.blog}>
			<h1 className={styles.blogTitle}>{props.title}</h1>
			<p className={styles.blogPara}>{props.content}</p>
            <div className={styles.blogDatetimeParent}>
			    <p className={styles.blogDatetime}>{props.datetime}</p>
            </div>
		</div>
	);
}
	
export const getServerSideProps: GetServerSideProps = async (context) => {
	const res = await fetch("http://localhost:3000/api/blog");
	const data = await res.json();
	
	return {
		props: {
			data
		}
	}
}
	
export default function Blogs({ data }) {
    const max_length:number = 300
	return (
		<Layout classname={styles.root}>
			<div className={styles.blogs}>
				{data.map((blog:any) => {
                    const blog_content = blog['content']
                    
                    // i don't think this is particularly effecienct. 
                    // Oh well, it works :)
                    let content:string = "";
                    if (blog_content.length > max_length) {
                        for(let i = 0; i < max_length; i++) {
                            content += blog_content[i];
                        }
                        content += "..."
                    } else {
                        content = blog_content
                    }
                    

					return (
						<a key={blog['id']} className={styles.a} href={`/blogs/${blog['id']}`}>
							<Blog
								title={blog['title']}
								content={content}
								datetime={blog['datetime_created']}
							/>
						</a>
					);
				})}
			</div>
		</Layout>
	);
}
		