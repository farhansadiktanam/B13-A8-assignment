import { Button, Card } from "@heroui/react";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const SkillCards = ({ skill }) => {
  return (
    <Card className="w-full max-w-sm mx-auto shadow-md hover:shadow-xl transition duration-300 rounded-2xl overflow-hidden">
      <div className="relative w-full h-48">
        <Image
          src={skill.image}
          alt={skill.title}
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          className="object-cover"
        />
      </div>

      <div className="p-4 flex flex-col gap-2">
        <h2 className="font-semibold text-lg line-clamp-2">{skill.title}</h2>

        <p className="text-sm text-gray-500">{skill.instructor}</p>

        <div className="flex items-center gap-1 text-orange-400">
          <FaStar />
          <span className="text-sm text-gray-600">{skill.rating}</span>
        </div>

        <Button className="mt-3 w-full" color="primary">
          <Link href={`/courses/${skill.id}`}>View Details</Link>
        </Button>
      </div>
    </Card>
  );
};

export default SkillCards;
