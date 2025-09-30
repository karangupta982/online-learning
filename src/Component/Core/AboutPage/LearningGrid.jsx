import React from "react";
import HighlightText from "../../../Component/Core/HomePage/HighlightText";
import CTAButton from "../../../Component/Core/HomePage/Button";

const LearningGridArray = [
  {
    order: -1,
    heading: "Accessible Learning for ",
    highliteText: "Everyone, Everywhere",
    description:
      "At ApniCoaching, we are committed to providing flexible, affordable, and job-relevant online learning to individuals and organizations across the globe. Our platform is designed to make high-quality education accessible to all, empowering learners to gain the skills they need to succeed in today's evolving job market.",
    BtnText: "Learn More",
    BtnLink: "/",
  },
  {
    order: 1,
    heading: "Industry-Aligned Curriculum",
    description:
      "Our curriculum is designed to meet industry demands, providing clear and practical learning to help you gain job-ready skills efficiently.",
  },
  {
    order: 2,
    heading: "Learning Methods",
    description:
      "We combine expert instruction, technology, and interactive content to ensure effective, self-paced learning.",
  },
  {
    order: 3,
    heading: "Certification",
    description:
      "Receive certificates upon course completion to boost your professional profile and showcase your skills.",
  },
  {
    order: 4,
    heading: "Auto-Grading & Ratings",
    description:
      "Instant feedback through auto-grading helps you track progress and focus on areas for improvement.",
  },
  {
    order: 5,
    heading: "Job-Ready Skills",
    description:
      "Our courses equip you with real-world, practical skills to seamlessly transition into the workforce.",
  },
];

const LearningGrid = () => {
  return (
    <div className="grid mx-auto w-[350px] xl:w-fit grid-cols-1 xl:grid-cols-4 mb-12">
      {LearningGridArray.map((card, i) => {
        return (
          <div
            key={i}
            className={`${i === 0 && "xl:col-span-2 xl:h-[294px]"}  ${
              card.order % 2 === 1
                ? "bg-richblack-700 h-[294px]"
                : card.order % 2 === 0
                ? "bg-richblack-800 h-[294px]"
                : "bg-transparent"
            } ${card.order === 3 && "xl:col-start-2"}  `}
          >
            {card.order < 0 ? (
              <div className="xl:w-[90%] flex flex-col gap-3 pb-10 xl:pb-0">
                <div className="text-4xl font-semibold ">
                  {card.heading}
                  <HighlightText text={card.highliteText} />
                </div>
                <p className="text-richblack-300 font-medium">
                  {card.description}
                </p>

                <div className="w-fit mt-2">
                  <CTAButton active={true} linkto={card.BtnLink}>
                    {card.BtnText}
                  </CTAButton>
                </div>
              </div>
            ) : (
              <div className="p-8 flex flex-col gap-8">
                <h1 className="text-richblack-5 text-lg">{card.heading}</h1>

                <p className="text-richblack-300 font-medium">
                  {card.description}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default LearningGrid;
