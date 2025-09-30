import React from "react"

import FoundingStory from "../Asset/Image/FoundingStory.png"
import BannerImage1 from "../Asset/Image/aboutus1.webp"
import BannerImage2 from "../Asset/Image/aboutus2.webp"
import BannerImage3 from "../Asset/Image/aboutus3.webp"
import Footer from "../Component/Common/Footer"
import ReviewSlider from "../Component/Common/ReviewSlider"
import ContactFormSection from "../Component/Core/AboutPage/ContactFormSection"
import LearningGrid from "../Component/Core/AboutPage/LearningGrid"
import Quote from "../Component/Core/AboutPage/Quote"
import StatsComponenet from "../Component/Core/AboutPage/Stats"
import HighlightText from "../Component/Core/HomePage/HighlightText"

const About = () => {
  return (
    <div>
      <section className="bg-richblack-700">
        <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-center text-white">
          <header className="mx-auto py-20 text-4xl font-semibold lg:w-[70%]">
          Shaping the Future of 
            <HighlightText text={"Learning with Innovation"} />
            <p className="mx-auto mt-3 text-center text-base font-medium text-richblack-300 lg:w-[95%]">
              ApniCoaching is at the forefront of driving innovation in online
              education. We're passionate about creating a brighter future by
              offering cutting-edge courses, leveraging emerging technologies,
              and nurturing a vibrant learning community.
            </p>
          </header>
          <div className="sm:h-[70px] lg:h-[150px]"></div>
          <div className="absolute bottom-0 left-[50%] grid w-[100%] translate-x-[-50%] translate-y-[30%] grid-cols-3 gap-3 lg:gap-5">
            <img src={BannerImage1} alt="" />
            <img src={BannerImage2} alt="" />
            <img src={BannerImage3} alt="" />
          </div>
        </div>
      </section>

      <section className="border-b border-richblack-700">
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          <div className="h-[100px] "></div>
          <Quote />
        </div>
      </section>

      <section>
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          <div className="flex flex-col items-center gap-10 lg:flex-row justify-between">
            <div className="my-24 flex lg:w-[50%] flex-col gap-10">
              <h1 className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                Our Founding Story
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
              ApniCoaching was founded with a shared passion for transforming the way education is delivered in the digital age. It began with a group of educators, technologists, and lifelong learners who saw the need for a more accessible, flexible, and high-quality learning experience in an increasingly fast-paced world.
              </p>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
              As seasoned educators, we understood the challenges and limitations of traditional education. We believed learning shouldn’t be limited to physical classrooms or constrained by location. Our vision was to create a platform that transcends these barriers, empowering individuals from diverse backgrounds to realize their full potential through education.
              </p>
            </div>

            <div>
              <img
                src={FoundingStory}
                alt=""
                className="shadow-[0_0_20px_0] shadow-[#FC6767] rounded-lg"
              />
            </div>
          </div>
          <div className="flex flex-col items-center lg:gap-10 lg:flex-row justify-between">
            <div className="my-24 flex lg:w-[40%] flex-col gap-10">
              <h1 className="bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                Our Vision
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
              Driven by our mission to reshape education, we embarked on a journey to create an e-learning platform that would transform how people learn. Our team of passionate experts has worked relentlessly to build a powerful and user-friendly platform that integrates advanced technology with immersive content, delivering a dynamic and interactive learning experience for all.
              </p>
            </div>
            <div className="my-24 flex lg:w-[40%] flex-col gap-10">
              <h1 className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-4xl font-semibold lg:w-[70%] ">
                Our Mission
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
              Our mission extends beyond providing online courses. We aim to build a thriving community of learners where individuals can connect, collaborate, and grow together. We believe that knowledge flourishes in an environment of open dialogue and sharing, which is why we cultivate this collaborative spirit through interactive forums, live sessions, and networking opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <StatsComponenet /> */}
      <section className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white">
        <LearningGrid />
        <ContactFormSection />
      </section>

      <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
        {/* Reviws from Other Learner */}
        <h1 className="text-center text-4xl font-semibold mt-8">
          Reviews from other learners
        </h1>
        <ReviewSlider />
      </div>
      <Footer />
    </div>
  )
}

export default About
