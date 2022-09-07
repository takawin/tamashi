import { TeamRoutes } from "../features/team/routes";
import { Home } from "../tmp/Home";
import { Layout } from "../tmp/Layout";
import { Post } from "../tmp/Post";
import { Posts } from "../tmp/Posts";

export const routes = [
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/posts',
                element: <Posts />
            },
            {
                path: '/teams/*',
                element: <TeamRoutes />
            },
            {
                path: '/posts/:postId',
                element: <Post />
            }
        ]
    }
]