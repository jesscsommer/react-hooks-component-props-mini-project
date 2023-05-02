import Article from "./Article"

const ArticleList = ({posts}) => {
    return (
        <main>
            {posts.map(post => <Article {...post} key={post.id}/>)}
        </main>
    )
}

export default ArticleList