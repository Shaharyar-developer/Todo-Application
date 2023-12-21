"use client";
import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import { Plus, X, Check } from "lucide-react";
import { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { toast } from "sonner";
export default function Navbar() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [data, setValue] = useLocalStorage("Todos", []);

  const handleSubmit = () => {
    if (name === "" || description === "") {
      toast.warning("Please fill out all fields");
    } else {
      setValue([...data, { name, description }]);
      console.log(data);
    }
  };

  return (
    <>
      <div className="flex justify-center mt-4 mb-6">
        <Button color="default" variant="faded" onPress={onOpen}>
          Add <Plus />
        </Button>
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                New Todo
              </ModalHeader>
              <ModalBody>
                <Input
                  value={name}
                  onChange={(e) => {
                    setName(e.currentTarget.value as string);
                  }}
                  label="Todo Name"
                  variant="underlined"
                />
                <Input
                  value={description}
                  onChange={(e) => {
                    setDescription(e.currentTarget.value as string);
                  }}
                  label="Todo Description"
                  variant="underlined"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancel <X />
                </Button>
                <Button
                  color="primary"
                  onPress={() => {
                    onClose();
                    handleSubmit();
                  }}
                >
                  Confirm <Check />
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
