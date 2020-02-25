import axios from "axios";

const baseUrl = "https://aniket-nc-news.herokuapp.com/api/";

export const getAllArticles = () => {
  return axios.get(baseUrl + "/articles").then(({ data }) => {
    return data;
  });
};

export const getArticleByID = article_id => {
  return axios.get(baseUrl + `/articles/${article_id}`).then(({ data }) => {
    return data;
  });
};

export const getUserByUsername = username => {
  return axios.get(baseUrl + `/users/${username}`).then(({ data }) => {
    return data;
  });
};

export const getCommentsByArticleId = article_id => {
  return axios
    .get(baseUrl + `/articles/${article_id}/comments`)
    .then(({ data }) => {
      return data;
    });
};

export const getTopics = () => {
  return axios.get(baseUrl + `/topics`).then(({ data }) => {
    return data;
  });
};
