import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import HighlightText from "../Component/Core/HomePage/HighlightText"
import topView from "../Asset/resourceImage/topView.jpg"
import {fields} from "../data/fields.js"
import {Link} from "react-router-dom"
import { essentials } from "../data/essentials.js"
// import IconBtn from "../Component/Common/IconBtn.jsx"
import ResourceReviewModal from "./ResourceReviewModal.jsx"
import { useState } from "react"
import IconBtn from "../Component/Common/IconBtn.jsx"


const Resources = () =>{
    const { token } = useSelector((state) => state.auth)
    const [reviewModal,setReviewModal] = useState(false);

    if(token ===  null){
        return <Navigate to="/login" />
    }

    return(
        <>
            <div className="text-white relative mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 font-inter">
                {/* <div className="text-5xl font-bold text-gray-900 leading-tight mb-4"> */}
                <div className="text-4xl my-4 text-center mx-auto font-medium text-white leading-relaxed mb-2">
                    <h1>Explore Your Engineering <HighlightText text={"Career Path"} /></h1>
                    <div className="my-10 shadow-[10px_-5px_50px_-5px] shadow-blue-200">
                        <img src={topView} alt="Robotic Generation"
                        className=" h-2/4 w-11/12 object-cover mx-auto" />
                    </div>
                    <h3 className="text-3xl font-bold text-white leading-tight mb-6 mt-4">
                        Unlock <HighlightText text={"Your Potential"} /> in Tech and Engineering</h3>
                    <p className="-mt-3 text-center text-lg font-bold text-richblack-300">
                        Discover your path in coding, engineering, and beyond with our comprehensive guide</p>
                    
                </div>

                <div className="flex flex-row flex-wrap text-black justify-center items-start gap-3  px-2">
                {fields.map((field) => (
                    <Link
                    to={`/resources/${field.name
                    .split(" ")
                    .join("-")
                    .toLowerCase()}/${field.id}`}
                    >
                        <div
                            className="flex flex-col w-96 h-[70vh]  mb-4 mx-2 bg-richblack-50  rounded-lg shadow-md px-4  hover:shadow-lg hover:shadow-richblack-5 hover:bg-white-400 hover:-translate-y-4 hover:scale-105 transition duration-300 ease-in-out"
                            key={field.id}
                            >
                            <img
                                src={field.icon}
                                alt={field.name}
                                className="h-[60%] mt-3 w-full object-cover rounded-t-lg shadow-md shadow-richblack-900 -scale-5"
                            />
                            <div className="p-4">
                                <h5 className="text-lg font-bold text-gray-900 text-center ">{field.name}</h5>
                                <p className="text-sm text-richblack-800 font-semibold">{`${field.description.substring(0, 80)}...`}</p>
                            </div>

                        </div>
                    </Link>
                ))}
                </div>

                <div>
                    <h1 className="text-3xl">Tech Career Essentials: <HighlightText text={"Resources and Advice"}/></h1>                

                </div>

                <div className="flex flex-row flex-wrap text-black justify-center items-start gap-3  px-2">
                {essentials.map((field) => (
                    <Link
                    to={`/resources/essentials/${field.name
                    .split(" ")
                    .join("-")
                    .toLowerCase()}/${field.id}`}
                    >
                        <div
                            className="flex flex-col w-96 h-[70vh]  mb-4 mx-2 bg-richblack-50  rounded-lg shadow-md px-4  hover:shadow-lg hover:shadow-richblack-5 hover:bg-white-400 hover:-translate-y-4 hover:scale-105 transition duration-300 ease-in-out"
                            key={field.id}
                            >
                            <img
                                src={field.icon}
                                alt={field.name}
                                className="h-[60%] mt-3 w-full object-cover rounded-t-lg shadow-md shadow-richblack-900 -scale-5"
                            />
                            <div className="p-4 flex flex-col ">
                                <h5 className="text-lg font-bold text-gray-900 text-center ">{field.name}</h5>
                                <p className="text-sm text-richblack-800 font-semibold">{`${field.description}.`}</p>
                            </div>

                        </div>
                    </Link>
                ))}
                </div>
                <div className="mx-auto flex flex-col gap-4 text-center ">
                    <p className="  ">Please Share Your Experience to Provide You Better Resources Next Time. </p>
                    <IconBtn
                        text="Add Review"
                        customClasses=" mb-5"
                        onClickHandler={() => setReviewModal(true)}
                        />
                </div>
                
            </div>
            {reviewModal && <ResourceReviewModal setReviewModal={setReviewModal} />}
        </>
    )
}

export default Resources