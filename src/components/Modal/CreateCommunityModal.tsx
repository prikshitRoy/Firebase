import React, { useState } from "react";
import { DropdownMenuLabel } from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@chakra-ui/react";
import { doc, runTransaction, serverTimestamp } from "firebase/firestore";
import { auth, firestore } from "@/firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth";
import { Icons } from "@/components/ui/icons";

type CreateCommunityModalProps = {
  open: boolean;
  handleClose: () => void;
};

const CreateCommunityModal: React.FC<CreateCommunityModalProps> = ({
  open,
  handleClose,
}) => {
  const [communityName, setCommunityName] = useState("");
  const [charsRemaning, setCharsRemaning] = useState(21);
  const [communityType, setCommunityType] = useState("public");
  const [error, setError] = useState("");
  const [user] = useAuthState(auth);
  const [loading, setLoading] = useState(false);

  // Checking if Community Name is grater or less then 21 Character
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length > 21) return;
    setCommunityName(event.target.value);
    setCharsRemaning(21 - event.target.value.length);
  };

  // Taking user input for Community Type
  const onCommunityTypeChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setCommunityType(event.target.name);
  };

  // Funtion to create Community
  const handleCreateCommuinity = async () => {
    if (error) setError("");

    // Checking if username community name contains any special character
    const format = /[ `!@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (format.test(communityName) || communityName.length < 3) {
      setError(
        "Community name must be between 3-21 characters, and only can contain letters, numbers or Underscores",
      );
      return;
    }

    setLoading(true);

    try {
      const communityDocRef = doc(firestore, "communities", communityName);

      // Transaction
      await runTransaction(firestore, async (transaction) => {
        // Check if the community name is available
        const communityDoc = await transaction.get(communityDocRef);
        if (communityDoc.exists()) {
          throw new Error(`Sorry ${communityName} is taken.`);
        }

        // Create the community document
        transaction.set(communityDocRef, {
          creatorId: user?.uid,
          createdAt: serverTimestamp(),
          numberOfMembers: 1,
          privacyType: communityType,
        });

        // create communitySnippit on User
        transaction.set(
          doc(firestore, `users/${user?.uid}/communitySnippets`, communityName),
          {
            communityId: communityName,
            isModerator: true,
          },
        );
      });
    } catch (error: any) {
      console.log(
        "Error in Creating Community - handleCreateCommuinity:",
        error,
      );
      setError(error.message);
    }

    setLoading(false);
  };

  return (
    <>
      <Dialog open={open} onOpenChange={handleClose}>
        <DropdownMenuLabel>Comunity Modal</DropdownMenuLabel>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="flex-col p-3 text-xl">
              Create a Community
            </DialogTitle>
          </DialogHeader>
          <div className="px-3">
            <div className="flex-col px-0 py-10">
              <div>Name</div>
              <Input
                value={communityName}
                className=" text-black"
                onChange={handleChange}
              />
              <div
                className={
                  charsRemaning === 0 ? "text-red-500" : "text-zinc-500"
                }
              >
                {charsRemaning} Character remaning
              </div>
              <div className="text-red-500 ">{error}</div>
              <div className="mb-4 mt-4">
                <div className="mb-3 text-lg">Community Type</div>
                <div className="flex flex-col space-y-2">
                  {/* CheckBox */}

                  <Checkbox
                    name="Public"
                    isChecked={communityType === "Public"}
                    onChange={onCommunityTypeChange}
                  >
                    Public
                  </Checkbox>
                  <Checkbox
                    name="Restrected"
                    isChecked={communityType === "Restrected"}
                    onChange={onCommunityTypeChange}
                  >
                    Restrected
                  </Checkbox>
                  <Checkbox
                    name="Private"
                    isChecked={communityType === "Private"}
                    onChange={onCommunityTypeChange}
                  >
                    Private
                  </Checkbox>

                  {/* CheckBox */}
                </div>
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button variant={"outline"} onClick={handleClose}>
              Close
            </Button>
            <Button
              variant={"outline"}
              onClick={handleCreateCommuinity}
              disabled={loading}
            >
              {loading && (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              )}
              Create Community
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
export default CreateCommunityModal;
