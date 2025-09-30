import React from "react"
import { useSelector } from "react-redux"
import { Link, Navigate,useParams } from "react-router-dom"
import { useEffect , useState } from "react"
import {essentials} from "../data/essentials.js"
import { TypeAnimation } from "react-type-animation";
import CourseReviewModal from "../Component/Core/ViewCourse/CourseReviewModal.jsx"
import IconBtn from "../Component/Common/IconBtn.jsx"
import ResourceReviewModal from "./ResourceReviewModal.jsx"



const Essentials = ()=>{
    const { token } = useSelector((state) =>state.auth)

    const {id} = useParams();
    const [field,setField] = useState([])
    const [reviewModal,setReviewModal] = useState(false);

    // console.log(id)

    useEffect(() => {
        const fetchField = () => {
          const res = essentials.filter((field) => {
            return field.id === parseInt(id);
          });
          setField(res[0]);
        };
        fetchField();
      }, [id, essentials]);

      // console.log(field)


    if(token ===  null){
        return <Navigate to="/login" />
    }
    const codeblock = field.name
    
      return (
        <>
          <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 font-inter text-white">
            <div className="bg-richblack-900 rounded-lg shadow-md p-4">
              <h1 className="text-3xl font-bold mb-4" >
                
              {
                codeblock ? 
                (
                <div className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text font-bold">{
                    <TypeAnimation
                    sequence={[ codeblock , 1000, ""]}
                    cursor={true}
                    repeat={Infinity}
                    style={{
                      whiteSpace: "pre-line",  
                      display: "block",
                    }}
                    omitDeletionAnimation={true}
                  />
                }</div>
                ) :
                (
                  <p>Loading...</p> 
                )
              }
              </h1>
              
              <p className="text-lg font-medium text-gray-300 ">{`${field.description}.`}</p>
              <div className="text-white flex flex-col gap-3 mt-5 mb-5 text-xl">
                { field.links ?
                  (
                    field.links.map((link,index) => (
                      <Link to ={`${link.url}`} key={index} target="_blank"
                      rel="noopener noreferrer"> {`${index+1}. `} {`${link.text}`} </Link>
                    ))
                  ) : null
                }
              </div>
              <p className="">Note: To Know about the resources Click on the Name</p>
            </div>
            <div className="mx-auto flex flex-col gap-4 text-center mt-10 ">
              <p className="  ">Please Share Your Experience to Provide You Better Resources Next Time. </p>
              <IconBtn
                  text="Add Review"
                  customClasses=" mb-5"
                  onClickHandler={() => setReviewModal(true)}
                  />
            </div>
          </div>
          {
            reviewModal && <ResourceReviewModal setReviewModal={setReviewModal} />
          }
        </>
      );
}
export default Essentials