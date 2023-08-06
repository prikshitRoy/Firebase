import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "firebase/auth";
import { firestore } from "@/firebase/clientApp";
import { doc, getDoc } from "firebase/firestore";

import React, { useEffect, useState } from "react";

type NavbarRightUserProps = {
  user?: User | null; // User from Firebase auth
};

const NavbarRightUser: React.FC<NavbarRightUserProps> = ({ user }) => {
  const [profilePicture, setProfilePicture] = useState<string | null>(null);

  const fetchUserProfilePicture = async (user: User) => {
    const profilePictureDocRef = doc(firestore, "users", user.uid);
    const profilePictureDoc = await getDoc(profilePictureDocRef);
    const data = profilePictureDoc.data();
    if (data && data.photoURL) {
      setProfilePicture(data.photoURL);
    }
  };

  useEffect(() => {
    if (user) {
      fetchUserProfilePicture(user);
    }
  }, [user]);

  return (
    <Avatar>
      {profilePicture ? (
        <AvatarImage src={profilePicture} />
      ) : (
        <AvatarFallback>SN</AvatarFallback>
      )}
    </Avatar>
  );
};

export default NavbarRightUser;
