import { Button, Card, Heading, Text } from '@chakra-ui/react';
import moment from 'moment';
interface Props {
    id: number;
    title: string;
    description: string;
    createdAt: any;
    onDelete: (id: number) => void;
}

export default function Note({ id, title, description, createdAt, onDelete } : Props) {
    const handleDelete = () => {
        onDelete(id); // Передаем ID в функцию удаления
    };

    return (
        <Card.Root>
            <Card.Header bg="gray.300">
                <Heading size="md">{title}</Heading>
                <Button onClick={handleDelete} bg="red.400" color="whiteAlpha.800">
                    Delete
                </Button>
            </Card.Header>
            <Card.Body bg="gray.300">
                <Text>{description}</Text>
            </Card.Body>
            <Card.Footer bg="gray.300">
                {moment(createdAt).format('HH:mm DD MMMM')}
            </Card.Footer>
        </Card.Root>
    );
}
