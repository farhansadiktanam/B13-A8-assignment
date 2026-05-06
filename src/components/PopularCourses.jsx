import React from "react";
import SkillCards from "./SkillCards";

const PopularCourses = async () => {
  const res = await fetch("https://b13-a8-assignment.vercel.app/data.json");
  const skills = await res.json();
  const popularCourses = skills.slice(0, 3);
  console.log(popularCourses);

  return (
    <div className="py-10">
      <h2 className="text-2xl text-center font-bold my-4">Popular Courses</h2>

      <div className="grid grid-cols-3 gap-2">
        {popularCourses.map((skill) => (
          <SkillCards key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default PopularCourses;
