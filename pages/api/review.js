const review = [
    {
        id: 0,
        clientName: 'Lucas Araujo',
        clientLocation: 'Ireland',
        clientSource: 'Fiverr',
        clientReview: 'Extremally professional, very good communication skills and completely understood my needs. I highly recommend.'
    },
    {
        id: 2,
        clientName: 'salehthani',
        clientLocation: 'Saudi Arabia',
        clientSource: 'Fiverr',
        clientReview: 'Great seller, great communication and quick response times, definitely going to work with them again'
    },
    {
        id: 3,
        clientName: 'slyphid',
        clientLocation: 'Singapore',
        clientSource: 'Fiverr',
        clientReview: "Very excellent person to work with, was willing to edit and improve on the code whenever needed. Highly recommended."
    },
    {
        id: 4,
        clientName: 'yosefwolday',
        clientLocation: 'United States',
        clientSource: 'Fiverr',
        clientReview: 'Amazing communication and very clean code! The final product was exactly what I was looking for. I had an amazing experience working with Ali Akbar. I would recommend his services to anyone looking for work to be done.'
    },
]
export default function handler(req, res) {
    res.status(200).json(review)
}
