import views from "../views/projects.html?raw";

const getPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return await response.json();
};

export default async () => {
  const container = document.createElement("div");
  container.className = "container";
  container.innerHTML = views;

  const posts = await getPosts();
  console.log(posts);

  const postcontainer = container.querySelector("#posts");
  const total = container.querySelector("#total");
  total.textContent = posts.length;
  posts.forEach((post) => {
    postcontainer.innerHTML += `
      <li>
        <h5>${post.title}</h5>
        <p>
          ${post.body}
        </p>
      </li>
    `;
  });

  return container;
};
