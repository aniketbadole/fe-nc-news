import axios from "axios";

const baseUrl = "https://aniket-nc-news.herokuapp.com/api/";

export const getAllArticles = () => {
  return axios.get(baseUrl + "/articles").then(({ data }) => {
    return data;
  });
};

export const getArticleByID = article_id => {
  console.log(article_id, "in api.jsx getArticleByID");
  return axios.get(baseUrl + `/articles/${article_id}`).then(({ data }) => {
    return data;
  });
};
