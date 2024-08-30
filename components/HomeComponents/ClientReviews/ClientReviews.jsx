import ReviewCard from "./ReviewCard";
import axios from "axios";
import { useQuery } from "react-query";
import ParagraphSkeleton from "../../Common/ParagraphSkeleton";

const review = [
  {
    id: 0,
    clientName: "Lucas Araujo",
    clientLocation: "Ireland",
    clientSource: "Fiverr",
    clientReview:
      "Extremally professional, very good communication skills and completely understood my needs. I highly recommend.",
  },
  {
    id: 2,
    clientName: "salehthani",
    clientLocation: "Saudi Arabia",
    clientSource: "Fiverr",
    clientReview:
      "Great seller, great communication and quick response times, definitely going to work with them again",
  },
  {
    id: 3,
    clientName: "slyphid",
    clientLocation: "Singapore",
    clientSource: "Fiverr",
    clientReview:
      "Very excellent person to work with, was willing to edit and improve on the code whenever needed. Highly recommended.",
  },
  {
    id: 4,
    clientName: "yosefwolday",
    clientLocation: "United States",
    clientSource: "Fiverr",
    clientReview:
      "Amazing communication and very clean code! The final product was exactly what I was looking for. I had an amazing experience working with Ali Akbar. I would recommend his services to anyone looking for work to be done.",
  },
];

const ClientReviews = () => {
  // const { isLoading, error, data } = useQuery('review', () =>
  //     axios.get('api/review')
  //         .then(({ data }) => data)
  //         .catch(error => console.error('Error fetching testimonials:', error)))

  return (
    <>
      <div className="px-2 md:px-8 py-4 text-lg font-bold text-Snow">
        Clients Reviews
      </div>
      <div className="overflow-x-auto w-full grid  justify-items-center grid-flow-col gap-4 px-2 md:px-8 pt-2 pb-4">
        {
          // isLoading ?
          //     [1, 2, 3, 4, 5].map(() => (
          //         <ParagraphSkeleton className="w-80 md:w-96 h-full p-4 md:p-8" />
          //     ))
          //     :
          review?.map((data, key) => (
            <ReviewCard key={key} data={data} />
          ))
        }
      </div>
    </>
  );
};

export default ClientReviews;
