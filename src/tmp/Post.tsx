import { useParams } from "react-router-dom";

export const Post = () => {
    const { postId } = useParams();
    return (
        <>
            <h2>投稿詳細</h2>
            <p>ID: { postId }</p>
        </>
    )
}