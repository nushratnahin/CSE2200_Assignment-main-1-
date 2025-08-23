import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import photo from "../assets/nazrul.gif";

export default function ProfilePage() 
{
  const user =
  {
    fullName: "Nushrat Yeasmin Nahin",
    email: "nahin4512@gmail.com",
    avatar: photo
  };

  return (
    <>
      <h1 style={{ marginBottom: 16 }}>Profile</h1>

      <Card style={{ maxWidth: 300 }}>
        <Card.Img variant="top" src={user.avatar} />
        <Card.Body>
          <Card.Title>{user.fullName}</Card.Title>
          <Card.Text className="text-muted">{user.email}</Card.Text>
        </Card.Body>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <strong>Full Name:</strong> {user.fullName}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Email:</strong> {user.email}
          </ListGroup.Item>

        </ListGroup>
      </Card>
    </>
  );
}
