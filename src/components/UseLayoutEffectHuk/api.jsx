const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

export const loadMessages = () => {
  return fetch(BASE_URL).then((response) => response.json());
};

export const sendMessage = (newMessage) => {
  return fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newMessage)
  }).then((response) => response.json());
};
