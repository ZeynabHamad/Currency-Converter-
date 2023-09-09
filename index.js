// const postList = document.getElementById("post-list");

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((posts) => {
//     posts.forEach((post) => {
//       const listItem = document.createElement("li");
//       listItem.textContent = post.title;
//       postList.appendChild(listItem);
//     });
//   })
//   .catch((error) => {
//     console.error("Error fetching data:", error);
//   });


const postList = document.getElementById("post-list");

const fetchPosts = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.c");
    const posts = await response.json();

    if (!response.ok) {
      throw new Error("Network Error");
    }

    posts.forEach((post) => {
      const listItem = document.createElement("li");
      listItem.textContent = post.title;
      postList.appendChild(listItem);
    });
  } catch (e) {
    alert(e);
  }
};

fetchPosts();
