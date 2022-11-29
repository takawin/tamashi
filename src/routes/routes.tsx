import { TeamRoutes } from "../features/team/routes";
import { Home } from "../tmp/Home";
import { Layout } from "../tmp/Layout";
import { Post } from "../tmp/Post";
import { Posts } from "../tmp/Posts";
import { RefTest1 } from "../tmp/RefTest1";
import { RefTest2 } from "../tmp/RefTest2";
import { RefTest3 } from "../tmp/RefTest3";
import { RefTest4 } from "../tmp/RefTest4";

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
            },
            {
                path: 'test/ref1',
                element: <RefTest1 />
            },
            {
                path: 'test/ref2',
                element: <RefTest2 />
            },
            {
                path: 'test/ref3',
                element: <RefTest3 />
            },
            {
                path: 'test/ref4',
                element: <RefTest4 />
            }
        ]
    }
]