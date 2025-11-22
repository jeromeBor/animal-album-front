import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface CustomClassNames {
  // Chaque clé doit être un objet de style CSS valide
  cardClassName?: string;
  editButtonClassName?: string;
  deleteButtonClassName?: string;
}

type Props = {
  title?: string;
  image?: string;
  subtitle?: string;
  description?: string;
  handleEdit?: () => void;
  handleDelete?: () => void;
  editText?: string;
  deleteText?: string;
  customClassNames: CustomClassNames;
};

export function CommonCard({
  title,
  description,
  image,
  subtitle,
  handleEdit,
  handleDelete,
  editText = 'Edit',
  deleteText = 'Delete',
  customClassNames = {},
}: Props) {
  const {
    cardClassName = '',
    editButtonClassName = '',
    deleteButtonClassName = '',
  } = customClassNames;

  return (
    <Card className={`w-full max-w-sm ${cardClassName}`}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{subtitle}</CardDescription>
      </CardHeader>
      <CardContent>{description}</CardContent>
      <CardFooter className="flex-row gap-2">
        <Button className={`w-1/2 ${editButtonClassName}`} onClick={handleEdit}>
          {editText}
        </Button>
        <Button
          className={`w-1/2 ${deleteButtonClassName}`}
          variant="outline"
          onClick={handleDelete}
        >
          {deleteText}
        </Button>
      </CardFooter>
    </Card>
  );
}
