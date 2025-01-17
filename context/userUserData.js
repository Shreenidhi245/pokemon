import { useUser } from "@auth0/nextjs-auth0/client";
import axios from "axios";
import { useState } from "react";

export const useUserData = () => {
  const { user } = useUser();

  const [userDetails, setUserDetails] = useState(null);

  const performAction = async (userId, pokemon, action) => {
    try {
      setUserDetails((prev) => {

        return {
          ...prev,
          bookmarks: updatedBookmarks,
          liked: updatedLikes,
        };
      });

      await axios.post("/api/pokemon", {
        userId,
        pokemon,
        action,
      });
    } catch (error) {
      console.log("Error in performAction", error);
      fetchUserDetails(userId); // when error, fetch the user details again
    }
  };

  return { userDetails, performAction };
};
