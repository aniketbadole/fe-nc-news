import axios from "axios";

const baseUrl = "https://aniket-nc-news.herokuapp.com/api";

export const getAllArticles = query => {
  const { sort_by, order, topic } = query;

  return axios
    .get(baseUrl + "/articles", { params: { sort_by, order, topic } })
    .then(({ data }) => {
      return data;
    });
};

export const getArticleByID = article_id => {
  return axios
    .get(baseUrl + `/articles/${article_id}`)
    .then(({ data }) => {
      return data;
    })
    .catch(err => {
      return err;
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

export const postComment = (article_id, username, body) => {
  return axios
    .post(baseUrl + `/articles/${article_id}/comments`, { username, body })
    .then(({ data }) => {
      return data;
    });
};

//ongoing
export const deleteComment = comment_id => {
  console.log(comment_id, "data");

  return axios.delete(baseUrl + `/comments/${comment_id}`).then(res => {
    console.log(res, "data in api");

    return res;
  });
};

export const appendVotes = (comment_id, voteChange) => {
  return axios
    .patch(baseUrl + `/comments/${comment_id}`, { inc_votes: voteChange })
    .then(({ data }) => {
      return data;
    });
};

export const appendArticleVotes = (article_id, voteChange) => {
  return axios
    .patch(baseUrl + `/articles/${article_id}`, { inc_votes: voteChange })
    .then(({ data }) => {
      return data;
    });
};
