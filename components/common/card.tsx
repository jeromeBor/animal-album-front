import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { memo } from 'react';
import { Animal } from '@/types/animal';

type Props = {
  animal: Animal;
  onEdit?: (id: string | number) => void;
  onDelete?: (id: string | number) => void;
  customClassNames?: {
    cardClassName?: string;
    editButtonClassName?: string;
    deleteButtonClassName?: string;
  };
};

export const CommonCard = memo(
  ({
    animal,
    onEdit = () => {},
    onDelete = () => {},
    customClassNames = {},
  }: Props) => {
    const {
      cardClassName = '',
      editButtonClassName = '',
      deleteButtonClassName = '',
    } = customClassNames;

    return (
      <Card className={cardClassName}>
        <CardHeader>
          <CardTitle>{animal.name}</CardTitle>
          <CardDescription>{animal.species}</CardDescription>
        </CardHeader>
        <CardContent>{animal.description}</CardContent>
        <CardFooter className="flex gap-2">
          {/* Ici, la carte passe l'ID à la fonction reçue */}
          <Button
            className={editButtonClassName}
            onClick={() => onEdit(animal.id)}
          >
            Edit
          </Button>
          <Button
            variant="outline"
            className={deleteButtonClassName}
            onClick={() => onDelete(animal.id)}
          >
            Delete
          </Button>
        </CardFooter>
      </Card>
    );
  }
);

CommonCard.displayName = 'CommonCard';
