const portfolio = [
    {
        id: 0,
        projectName: "culyte",
        url: "https://culyte.com/",
        image: "projects/culyte.png",
        projectDetail: "Culyte is a software house specializing in the development of mobile apps and web applications. They focus on creating innovative, user-friendly solutions tailored to meet the needs of businesses and individuals. With expertise in the latest technologies and industry trends, Culyte delivers high-quality software products, ranging from custom web platforms to feature-rich mobile apps. Their team is committed to providing seamless user experiences, robust functionality, and scalable solutions that help clients achieve their digital goals.",
        technologiesUsed: [
            {
                tech: "Html "
            },
            {
                tech: "CSS"
            },
        ]
    },  
    {
        id: 0,
        projectName: "Nutrition Recipies",
        url: "https://66b01c0f42913a3398a1daaf--adorable-blini-9ff5c2.netlify.app/",
        image: "projects/reciepi.jpeg",
        projectDetail: "Nutrition Recipe is a community-driven website where users can create accounts to share and discover recipes. Members can post their favorite recipes, explore nutritious meal ideas, and connect with others who share a passion for healthy cooking.",
        technologiesUsed: [
            {
                tech: "ReactJS"
            },
            {
                tech: "Ant Design"
            },
            {
                tech: "TailwindCSS"
            },
        ]
    },
    {
        id: 0,
        projectName: "FirmSanad",
        url: "https://firmsanad.invogen.co/",
        image: "projects/firmsanad.png",
        projectDetail: "Invest in Saudi Arabia, Streamline Your Business Setup Process in Saudi Arabia with FirmSanad Simplify the process of obtaining licenses and starting a business in Saudi Arabia with our streamlined platform.",
        technologiesUsed: [
            {
                tech: "ReactJS"
            },
            {
                tech: ".net"
            },
            {
                tech: "Ant Design"
            },
            {
                tech: "TailwindCSS"
            },
        ]
    },
    {
        id: 0,
        projectName: "Fateh Al Mustaqbil",
        url: "https://fatehtour.com/",
        image: "projects/fateh.png",
        projectDetail: "Fateh Al Mustaqbil is a one-of-a-kind travel agency designed to cater to the interests of travelers across the globe, founded in 2023 in Riyadh, Saudi Arabia. Their expertise lies in crafting exceptional journeys tailored to each client's unique requirements, whether it be ticketing, hotel bookings, or visa assistance.",
        technologiesUsed: [
            {
                tech: "ReactJS"
            },
            {
                tech: ".net"
            },
            {
                tech: "Ant Design"
            },
            {
                tech: "TailwindCSS"
            },
        ]
    },
    {
        id: 0,
        projectName: "Tojjar",
        url: "https://tojjar.jmmtest.com/",
        image: "projects/tojjar.png",
        projectDetail: "Tojjar is ecommerce website,  where you can open your own store and sell products of different brands!",
        technologiesUsed: [
            {
                tech: "Nextjs with SSR"
            },
            {
                tech: "Laravel"
            },
            {
                tech: "Ant Design"
            },
            {
                tech: "TailwindCSS"
            },
        ]
    },
    {
        id: 1,
        projectName: "Otawix",
        url: "https://b2c.otawix.com/",
        image: "projects/otawix.png",
        projectDetail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti aut veritatis, adipisci natus optio dolores cum rem? Aut perferendis fugit, eos rerum totam aspernatur iure alias temporibus ipsa perspiciatis!",
        technologiesUsed: [
            {
                tech: "NextJS"
            },
            {
                tech: "NodeJS"
            },
            {
                tech: "MUI"
            },
            {
                tech: "TailwindCSS"
            },
        ]
    },
    {
        id: 2,
        projectName: "Spatay",
        url: "https://spatay.com/",
        image: "projects/spatay.png",
        projectDetail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti aut veritatis, adipisci natus optio dolores cum rem? Aut perferendis fugit, eos rerum totam aspernatur iure alias temporibus ipsa perspiciatis!",
        technologiesUsed: [
            {
                tech: "ReactJS"
            },
            {
                tech: "NodeJS"
            },
            {
                tech: "Ant Design"
            },
            {
                tech: "TailwindCSS"
            },
        ]
    },
]
export default function handler(req, res) {
    res.status(200).json(portfolio)
}
