import { useState } from "react";
import Edu_Card from "../components/Background/Edu_Card";
import Exp_Card from "../components/Background/Exp_Card";
import BannerLayout from "../components/Common/BannerLayout";
import Footer from "../components/Footer";
import { useQuery } from "react-query";
import axios from "axios";
import { Skeleton } from "antd";
import ParagraphSkeleton from "../components/Common/ParagraphSkeleton";

const background = [
  {
    eduCards: [
      {
        id: 0,
        title: "Islamia Collage University Peshawar",
        degree: "BS, Software engineering",
        detail: "Bachelor's Degree in Software Engineering Peshawar.",
        year: "2020-2024",
      },
      {
        id: 1,
        title: "Government Collage Peshawar",
        degree: "HSSC, Pre Engineering",
        detail:
          "Completed FSC part 1 and part 2 in Pre-Engineering from Peshawar Government Collage Peshawar",
        year: "2017-2019",
      },
      {
        id: 2,
        title: "Peshawar Modal School",
        degree: "SSC, Science Subjects",
        detail:
          "Completed SSC part 1 and part 2 in Science subjects from Peshawar Modal School",
        year: "2015-2017",
      },
    ],
  },
  {
    expCards: [
      {
        id: 1,
        title: "Culyte",
        role: "Mern Stack Developer",
        url: "https://culyte.com/",
        desc: "As a MERN stack developer, I use Mongo,Express,React,Node to build dynamic web applications.",
        year: "02/2023 - Present",
        location: "Peshawar, Pakistan",
      },
      {
        id: 2,
        title: "HauzaTech",
        role: "Internee",
        url: "no website",
        desc: "As an Internee, I learned how to use React & JavaScript to build interactive websites.",
        year: "02/2022 - 2/23",
        location: "Peshawar, Pakistan",
      },
    ],
  },
];

function Background() {
//   const { isLoading, error, data } = useQuery("background", () =>
//     axios
//       .get("api/background")
//       .then(({ data }) => data)
//       .catch((error) => console.error("Error fetching testimonials:", error))
//   );

  return (
    <BannerLayout>
      <div className="grid md:grid-cols-2 md:divide-x-4 md:divide-Green px-4 pb-2 pt-10">
        <div className="flex flex-col gap-y-4 order-2 md:order-1  md:mr-12">
          <div className="mt-10 md:mt-0 text-xl text-Snow font-semibold">
            Education
          </div>
          {
        //   isLoading
        //     ? [1, 2, 3].map(() => (
        //         <ParagraphSkeleton className={"p-8 h-full w-full relative"} />
        //       ))
        //     : 
              background[0]?.eduCards?.map((data, key) => (
                <Edu_Card key={key} data={data} />
              ))
              }
        </div>
        <div className="order-1 md:order-2">
          <div className="flex flex-col gap-y-4 md:ml-12">
            <div className=" md:pt-0 pt-4 text-xl text-Snow font-semibold">
              Experience
            </div>

            {
            // isLoading
            //   ? [1, 2, 3].map(() => (
            //       <ParagraphSkeleton className={"p-8 h-full w-full relative"} />
            //     ))
            //   : data &&
            background[1]?.expCards?.map((data, key) => (
                  <Exp_Card key={key} data={data} />
                ))}
          </div>
        </div>
      </div>
      <Footer />
    </BannerLayout>
  );
}

export default Background;
