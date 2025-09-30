import { useEffect } from "react"
import "./App.css"
import { useDispatch, useSelector } from "react-redux"
import { Route, Routes, useNavigate } from "react-router-dom"


import Navbar from "./Component/Common/Navbar"
import OpenRoute from "./Component/Core/Auth/OpenRoute"
import PrivateRoute from "./Component/Core/Auth/PrivateRoute"
import AddCourse from "./Component/Core/Dashboard/AddCourse"
import Cart from "./Component/Core/Dashboard/Cart"
import EditCourse from "./Component/Core/Dashboard/EditCourse"
import EnrolledCourses from "./Component/Core/Dashboard/EnrolledCourses"
import Instructor from "./Component/Core/Dashboard/Instructor"
import MyCourses from "./Component/Core/Dashboard/MyCourses"
import MyProfile from "./Component/Core/Dashboard/MyProfile"
import Settings from "./Component/Core/Dashboard/Settings"
import VideoDetails from "./Component/Core/ViewCourse/VideoDetails"
import About from "./pages/About"
import Catalog from "./pages/Catalog"
import Contact from "./pages/Contact"
import CourseDetails from "./pages/CourseDetails"
import Dashboard from "./pages/Dashboard"
// import Error from "./pages"
import Error from "./pages/Error"
import ForgotPassword from "./pages/ForgotPassword"
import Resources from "./pages/Resources"
import FieldPage from "./pages/FieldPage"
import Essentials from "./pages/Essentials"

import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import UpdatePassword from "./pages/UpdatePassword"
import VerifyEmail from "./pages/VerifyEmail"
import ViewCourse from "./pages/ViewCourse"
import { getUserDetails } from "./Service/Operation/profileAPI"
import { ACCOUNT_TYPE } from "./Util/constants"

function App() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.profile)

  useEffect(() => {
    if (localStorage.getItem("token")) {
      const token = JSON.parse(localStorage.getItem("token"))
      dispatch(getUserDetails(token, navigate))
    }

  },[])

  return (
    <div className="flex min-h-screen w-screen flex-col bg-richblack-900 font-inter">
      <div className="text-center text-white mt-3 pb-2 border-b-richblack-50 border-b-[1px]">No Video Courses are available right now, only Resources are available.</div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resources" element={<Resources  />} />
        <Route path="/resources/:field/:id" element={<FieldPage />} />
        <Route path="/resources/essentials/:field/:id" element={<Essentials />} />
        <Route path="courses/:courseId" element={<CourseDetails />} />
        <Route path="catalog/:catalogName" element={<Catalog />} />

        <Route
          path="login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />
        <Route
          path="forgot-password"
          element={
            <OpenRoute>
              <ForgotPassword />
            </OpenRoute>
          }
        />
        
        <Route
          // path="update-password/:id"    // want to make it reset-password/:id
          path="update-password/:id"
          element={
            <OpenRoute>
              <UpdatePassword />
            </OpenRoute>
          }
        />
        <Route
          path="signup"
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />
        <Route
          path="verify-email"
          element={
            <OpenRoute>
              <VerifyEmail />
            </OpenRoute>
          }
        />
        <Route
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route path="dashboard/my-profile" element={<MyProfile />} />
          <Route path="dashboard/Settings" element={<Settings />} />
          {user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
            <>
              <Route path="dashboard/instructor" element={<Instructor />} />
              <Route path="dashboard/my-courses" element={<MyCourses />} />
              <Route path="dashboard/add-course" element={<AddCourse />} />
              <Route
                path="dashboard/edit-course/:courseId"
                element={<EditCourse />}
              />
            </>
          )}
          {user?.accountType === ACCOUNT_TYPE.STUDENT && (
            <>
              <Route
                path="dashboard/enrolled-courses"
                element={<EnrolledCourses />}
              />
              <Route path="/dashboard/cart" element={<Cart />} />
            </>
          )}
          <Route path="dashboard/settings" element={<Settings />} />
        </Route>

        <Route
          element={
            <PrivateRoute>
              <ViewCourse />
            </PrivateRoute>
          }
        >
          {user?.accountType === ACCOUNT_TYPE.STUDENT && (
            <>
              <Route
                path="view-course/:courseId/section/:sectionId/sub-section/:subSectionId"
                element={<VideoDetails />}
              />
            </>
          )}
        </Route>

        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  )
}

export default App


// Auth -> ContactUs -> ResetPassword -> profile -> Course -> Category -> 
// Section -> Subsection -> RatingAndReview -> CourseProgress -> Payment 