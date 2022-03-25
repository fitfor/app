import express from "express";
const router = express.Router();

const obj = {
  act1: "Focus excercise",
  act2: "Sleeping excercise",
  act3: "Flexibility excercise",
  act4: "",
  act5: "",
  act6: "",
  act7: "",
  act8: "",
};

router.get("/", callGet_recommendations);

async function callGet_recommendations(req: any, res: any) {
  const axios = require("axios").default;

  const response = await axios({
    method: "post",
    url: "https://recomm-microservice.herokuapp.com/get-recomm/",
    data: {
      obj,
    },
  });

  res.send(response.data);
}

export default router;
