import SkillCards from "@/components/SkillCards";
import React from "react";

const AllCourses = async () => {
  const res = await fetch("https://b13-a8-assignment.vercel.app/data.json");
  const skills = await res.json();
  console.log(skills);

  return (
    <div className="min-h-[60vh] my-5">
      <h2 className="text-2xl font-bold text-center">All Courses</h2>

      <div className="grid grid-cols-3 gap-3">
        {skills.map((skill) => (
          <SkillCards skill={skill} key={skill.id} />
        ))}
      </div>
    </div>
  );
};

export default AllCourses;
