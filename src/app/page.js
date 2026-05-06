import Banner from "@/components/Banner";
import LearningTips from "@/components/LearningTips";
import PopularCourses from "@/components/PopularCourses";
import TopInstructors from "@/components/TopInstructor";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <div>
      <Banner />
      <PopularCourses />
      <LearningTips />
      <TopInstructors />
      <ToastContainer />
    </div>
  );
}
