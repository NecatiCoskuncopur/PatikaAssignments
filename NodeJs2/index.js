const posts = [
  { postName: "Post 1", author: "author 1", content: "Post 1 Content" },
  { postName: "Post 2", author: "author 2", content: "Post 2 Content" },
  { postName: "Post 3", author: "author 3", content: "Post 3 Content" },
];

function listPost() {
  posts.map((post) => {
    const { postName, author, content } = post;
    console.log("Post Name:", postName, "Author:", author, "Content:", content);
  });
}

function addPost(value) {
  return new Promise((resolve, reject) => {
    if (value) {
      posts.push(value);
      resolve("Post Added");
    } else {
      reject("Error");
    }
  });
}

async function postHandler(newPost) {
  try {
    const add = await addPost(newPost);
    console.log(add);
    listPost();
  } catch (error) {
    console.log(error);
  }
}

postHandler({
  postName: "Post 4",
  author: "author 4",
  content: "Post 4 Content",
});
