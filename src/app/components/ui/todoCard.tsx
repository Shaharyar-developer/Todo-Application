import type { Todo } from "../todos";
import { Button, Card, CardBody } from "@nextui-org/react";
import { Check, Trash } from "lucide-react";
export const TodoCard = ({ name, description, onFinished }: Todo) => {
  return (
    <Card className="container mx-auto">
      <CardBody className="flex-row gap-2">
        <h1>{name}</h1>
        <p className="flex-1">{description}</p>
        <Button
          color="success"
          onClick={() => {
            onFinished ? onFinished(name) : null;
          }}
        >
          <Check />
        </Button>
        <Button
          onClick={() => {
            onFinished ? onFinished(name) : null;
          }}
          color="danger"
        >
          <Trash />
        </Button>
      </CardBody>
    </Card>
  );
};
