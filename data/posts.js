import { Users } from "./users";

export const Posts = [
    {
        uri: "https://cdn.myanimelist.net/images/characters/5/280615.jpg",
        user_name: Users[0].name,
        user_pic: Users[0].image,
        likes: 20502,
        description: "The justice I'd championed went up in smoke, leaving a pitiful pile of ashes in its place.",
        comments: [
            {
                user: 'Sakaki Yumiko',
                comment: 'You Poor thing'
            }
        ]
    },
    {
        uri: [
            {
                id: 1,
                source: "https://cdn.myanimelist.net/images/characters/11/287902.jpg",
            },
            {
                id: 2,
                source: "https://cdn.myanimelist.net/images/characters/6/241415.jpg",
            },
            {
                id: 3,
                source: "https://cdn.myanimelist.net/images/characters/16/288705.jpg",
            }
        ],
        user_name: Users[1].name,
        user_pic: Users[1].image,
        likes: 562,
        description: "Getting ready!",
        comments: [
            {
                user: 'Lion Ryuu',
                comment: 'Hi'
            }
        ]
    },
    {
        uri: "https://cdn.myanimelist.net/images/characters/16/199467.jpg",
        user_name: Users[2].name,
        user_pic: Users[2].image,
        likes: 29,
        description: "My new photo",
        comments: [
            {
                user: 'Senjougahara Hitagi',
                comment: 'Cute'
            }
        ]
    },
]