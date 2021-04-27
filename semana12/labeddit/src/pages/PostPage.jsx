import Comment from '../components/Comment/Comment'
import CreateComment from '../components/CreateComment/Createcomment'
import PostCard from '../components/PostCard/PostCard'


export const PostPage = () => {

    return (
        <>
        <PostCard />
        <CreateComment/>
        <h3>Comentários:</h3>
        <Comment/>
        </>
    )
}