import fetch from "node-fetch";
import dotenv from "dotenv";

export const getSearch = (req, res) => {
  res.render("search", { pageTitle: "Search" });
};
export const postSearch = async (req, res) => {
  dotenv.config();
  const { keyword } = req.body;

  const baseUrl = "https://api.pexels.com/v1/search";
  const config = {
    query: keyword,
    per_page: 20,
  };
  const params = new URLSearchParams(config).toString();
  const finalUrl = `${baseUrl}?${params}`;

  const imageRequest = await (
    await fetch(finalUrl, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: process.env.API_KEY,
      },
    })
  ).json();

  let imageArray = [];
  for (let i = 0; i < 20; i++) {
    imageArray.push(imageRequest.photos[i].src.original);
  }
  return res.render("search", { pageTitle: "Search", imageArray });
};
