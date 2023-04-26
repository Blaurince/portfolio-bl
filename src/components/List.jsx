import { Container, Row } from "react-bootstrap";
import Card from "./Gallery/GalleryCard";
import data from "./data/data.json";
import GalleryCard from "./Gallery/GalleryCard";

export default function List() {
    console.log(data)
  return (
    <>
      <Container>
        <Row>
          {data.map((element) => {
            return element ? <GalleryCard data={element} /> : <p>Loading</p>;
          })}

          <Card />
        </Row>
      </Container>
    </>
  );
}
