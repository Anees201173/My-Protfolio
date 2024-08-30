const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'Islamia Collage University Peshawar',
                degree: 'BS, Software engineering',
                detail: "Bachelor's Degree in Software Engineering Peshawar.",
                year: '2020-2024'
            },
            {
                id: 1,
                title: 'Government Collage Peshawar',
                degree: 'HSSC, Pre Engineering',
                detail: "Completed FSC part 1 and part 2 in Pre-Engineering from Peshawar Government Collage Peshawar",
                year: '2017-2019'
            },
            {
                id: 2,
                title: 'Peshawar Modal School',
                degree: 'SSC, Science Subjects',
                detail: "Completed SSC part 1 and part 2 in Science subjects from Peshawar Modal School",
                year: '2015-2017'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'Culyte',
                role: 'Mern Stack Developer',
                url: 'https://culyte.com/',
                desc: 'As a MERN stack developer, I use Mongo,Express,React,Node to build dynamic web applications.',
                year: '02/2023 - Present',
                location: 'Peshawar, Pakistan'
            },
            {
                id: 2,
                title: 'HauzaTech',
                role: 'Internee',
                url: 'no website',
                desc: 'As an Internee, I learned how to use React & JavaScript to build interactive websites.',
                year: '02/2022 - 2/23',
                location: 'Peshawar, Pakistan'
            },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
