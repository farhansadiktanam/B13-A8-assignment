"use client";

import { UpdateUserProfile } from "@/components/UpdateUserProfile";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button, Card } from "@heroui/react";
import React from "react";

const Profile = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;
  console.log(user);
  return (
    <div className="flex justify-center items-center py-10 min-h-[55vh]">
      <Card className="w-full max-w-sm p-6 flex flex-col items-center text-center shadow-md rounded-2xl">
        {/* Avatar */}
        <Avatar className="w-20 h-20 mb-4">
          <Avatar.Image
            src={user?.image}
            alt={user?.name || "User"}
            referrerPolicy="no-referrer"
          />
          <Avatar.Fallback>
            {user?.name.slice(0, 2).toUpperCase()}
          </Avatar.Fallback>
        </Avatar>

        <h2 className="text-xl font-semibold">
          {user?.name || "Unknown User"}
        </h2>

        <p className="text-gray-500 text-sm mb-4">
          {user?.email || "No email available"}
        </p>
        <UpdateUserProfile />
      </Card>
    </div>
  );
};

export default Profile;
