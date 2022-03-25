import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import AvatarImage from "../components/AvatarImage";
import { withBottomNavigation } from "../components/BottomNavigation";
import PageTitle from "../components/PageTitle";
import RecommendationTile from "../components/RecommendationTile";

function Home() {
  const [recommendation, setRecommendation] = useState([]);
  useEffect(() => {
    const axios = require("axios").default;

    axios({
      method: "get",
      url: "https://fitfor.herokuapp.com/recommendations/",
    }).then((response: any) => {console.log(response.data.consequent); setRecommendation(response.data.consequent)});
  }, []);

  const recCards = (recommendation).map((k: any) => (
    <RecommendationTile key={k} categoryId={k}></RecommendationTile>
  ));
  return (
    <Container>
      <PageTitle style={{ textAlign: "center" }}>Welcome back, John!</PageTitle>
      <Row
        className=""
        style={{
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <AvatarImage src="https://source.unsplash.com/random/300x300" />
        <p className="mt-5">You can do this, I believe in you.</p>
      </Row>
      <Row xs={2} justifyContent="center">
        {recCards}
      </Row>
    </Container>
  );
}

export default withBottomNavigation(Home);
