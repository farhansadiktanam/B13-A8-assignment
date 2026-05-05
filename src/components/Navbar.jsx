"use client";
import { Button } from "@heroui/react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="border-b shadow-md px-2 ">
      <nav className=" flex justify-between items-center  py-3 max-w-6xl mx-auto w-full">
        <div className="flex gap-2 items-center">
          <h3 className="font-black text-lg">SkillSphere</h3>
        </div>

        <ul className="flex items-center gap-5 text-sm">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/courses"}>Courses</Link>
          </li>

          <li>
            <Link href={"/profile"}>My Profile</Link>
          </li>
        </ul>

        <div className="flex gap-4">
          <ul className="flex gap-2 items-center  text-sm">
            <li>
              <Button variant="primary">
                <Link href={"/signup"}>SignUp</Link>
              </Button>
            </li>
            <li>
              <Button variant="secondary">
                <Link href={"/signin"}>SignIn</Link>
              </Button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
