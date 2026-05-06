"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  return (
    <div className="border-b shadow-md px-2 ">
      <nav className=" flex justify-between items-center  py-3 max-w-6xl mx-auto w-full">
        <div className="flex gap-2 items-center">
          <h3 className="font-black text-lg">
            Skill<span className="text-sky-500">Sphere</span>
          </h3>
        </div>

        <ul className="flex items-center gap-5 text-sm font-semibold">
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
          {!user && (
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
          )}

          {user && (
            <div className="flex gap-2 items-center">
              <Avatar>
                <Avatar.Image
                  alt="John Doe"
                  src={user?.image}
                  referrerPolicy="no-referrer"
                />
                <Avatar.Fallback>
                  {user?.name.slice(0, 2).toUpperCase()}
                </Avatar.Fallback>
              </Avatar>
              <Button size="sm" variant="danger" onClick={handleSignOut}>
                Sign Out
              </Button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
