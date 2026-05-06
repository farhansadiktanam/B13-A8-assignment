import React from "react";

const SkillDetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch("https://b13-a8-assignment.vercel.app/data.json");
  const skills = await res.json();

  return <div>Skill Details Page</div>;
};

export default SkillDetailsPage;
