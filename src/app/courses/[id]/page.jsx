import { Button } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

const SkillDetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch("https://b13-a8-assignment.vercel.app/data.json");
  const skills = await res.json();

  const expectedSkill = skills.find((skill) => skill.id === parseInt(id));
  console.log(expectedSkill);
  if (!expectedSkill) {
    return <p className="text-center mt-10">Skill not found</p>;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="relative w-full h-75 md:h-100 rounded-xl overflow-hidden mb-6">
        <Image
          src={expectedSkill.image}
          alt={expectedSkill.title}
          fill
          className="object-cover"
        />
      </div>

      <h1 className="text-3xl md:text-4xl font-bold mb-2">
        {expectedSkill.title}
      </h1>

      <p className="text-gray-500 mb-2">
        Instructor: {expectedSkill.instructor}
      </p>

      <div className="flex items-center gap-1 text-orange-400 mb-4">
        <FaStar />
        <span className="text-gray-600">{expectedSkill.rating}</span>
      </div>

      <p className="text-gray-700 mb-6">{expectedSkill.description}</p>

      <Button color="primary" size="lg">
        Enroll Now
      </Button>
    </div>
  );
};

export default SkillDetailsPage;
