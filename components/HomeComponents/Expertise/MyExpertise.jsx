import ExpertiseCard from "./ExpertiseCard";
import { useQuery } from "react-query";
import axios from "axios";
import ParagraphSkeleton from "../../Common/ParagraphSkeleton";

const expertise = [
  {
    id: 0,
    title: "Full Stack Development",
    desc: "I am a skilled MERN stack developer with extensive experience in building robust web applications using MongoDB, Express.js, React.js, and Node.js. I possess a strong understanding of server-side rendering, API integration, and database management. With my expertise, I can deliver dynamic and efficient web solutions tailored to meet the unique requirements of clients.",
  },
  // {
  //     id: 1,
  //     title: 'Scrum and Jira',
  //     desc: "As a developer, I'm proficient in Jira and Scrum methodologies. I use Jira to simplify project management tasks like task assignment, prioritization, and progress tracking. Scrum has improved my teamwork, utilizing daily stand-ups, sprint planning, and retrospectives. My expertise ensures high-quality software products are delivered promptly.",
  // },
  {
    id: 2,
    title: "Designing (UI/UX)",
    desc: "I am proficient in using design software such as Figma, Adobe XD, and Adobe Illustrator. Through participating in hackathons and freelance work, I have gained practical experience in UI/UX design and graphic design. Designing is my passion, and it has allowed me to continue to develop my creative skills and grow in the field.",
  },
  {
    id: 3,
    title: "Github",
    desc: "GitHub is essential for version control and collaboration. Its intuitive interface and features like pull requests and issue tracking simplify the process. Continuous integration ensures up-to-date code. GitHub is vital to my success as a developer.",
  },
  {
    id: 4,
    title: "Open Source Contributor",
    desc: "Open Source is the future. I usually take some time on weekend and contribute into opensource project. It gives me opportunity to learn from best developer's practices and also gives me a chance to help others and contribute into the community for the good.",
  },
];

const MyExpertise = () => {
  const { isLoading, error, data } = useQuery("expertise", () =>
    axios
      .get("api/expertise")
      .then(({ data }) => data)
      .catch((error) => console.error("Error fetching testimonials:", error))
  );

  return (
    <>
      <div className="px-2 md:px-8 py-4 text-lg font-bold text-Snow">
        My Expertise
      </div>
      <div className="grid justify items-center grid-flow-row md:grid-cols-2 lg:grid-cols-3 grid-rows-auto gap-4 px-2 md:px-8 ">
        {
        // isLoading
        //   ? [1, 2, 3, 4, 5, 6].map(() => (
        //       <ParagraphSkeleton className={"space-y-2 p-8"} />
        //     ))
        //   : 
          expertise?.map((data, key) => <ExpertiseCard key={key} data={data} />)}
      </div>
    </>
  );
};

export default MyExpertise;
