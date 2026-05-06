import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { Card, Button } from "@heroui/react";
import johnDoe from "../assets/johnDoe.avif";
import sarahSmith from "../assets/sarahSmith.avif";
import davidLee from "../assets/davidLee.png";
import emmaWatson from "../assets/emmaWatson.jpg";

const instructors = [
  {
    id: 1,
    name: "John Doe",
    title: "Full Stack Developer",
    image: johnDoe,
    rating: 4.9,
    students: "12K+ Students",
  },
  {
    id: 2,
    name: "Sarah Smith",
    title: "UI/UX Designer",
    image: sarahSmith,
    rating: 4.8,
    students: "9K+ Students",
  },
  {
    id: 3,
    name: "David Lee",
    title: "Data Scientist",
    image: davidLee,
    rating: 4.7,
    students: "15K+ Students",
  },
  {
    id: 4,
    name: "Emma Watson",
    title: "Frontend Expert",
    image: emmaWatson,
    rating: 4.9,
    students: "11K+ Students",
  },
];

export default function TopInstructors() {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">Top Instructors</h2>
          <p className="text-gray-500 mt-2">
            Learn from the best professionals in the industry
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {instructors.map((ins) => (
            <Card
              key={ins.id}
              className="p-4 text-center shadow-md hover:shadow-xl transition rounded-2xl"
            >
              <div className="relative w-24 h-24 mx-auto mb-4">
                <Image
                  src={ins.image}
                  alt={ins.name}
                  fill
                  sizes="96px"
                  className="rounded-full object-cover"
                />
              </div>

              <h3 className="text-lg font-semibold">{ins.name}</h3>
              <p className="text-sm text-gray-500">{ins.title}</p>

              <div className="flex justify-center items-center gap-1 text-orange-400 mt-2">
                <FaStar />
                <span className="text-sm text-gray-600">{ins.rating}</span>
              </div>

              <p className="text-xs text-gray-500 mt-1">{ins.students}</p>

              <Button className="mt-4 w-full" color="primary">
                View Profile
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
