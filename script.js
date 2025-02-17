document.getElementById('postButton').addEventListener('click', function () {
  const postInput = document.getElementById('postInput');
  const postText = postInput.value.trim();

  if (postText) {
    createPost(postText);
    postInput.value = ''; // Clear the input field
  } else {
    alert('Please write something to post!');
  }
});

function createPost(text) {
  const postsContainer = document.getElementById('postsContainer');

  // Create post element
  const postElement = document.createElement('div');
  postElement.classList.add('post');

  // Add post text
  const postTextElement = document.createElement('p');
  postTextElement.textContent = text;
  postElement.appendChild(postTextElement);

  // Add like button
  const likeButton = document.createElement('button');
  likeButton.classList.add('like-button');
  likeButton.textContent = 'Like';
  likeButton.addEventListener('click', function () {
    likePost(postElement);
  });
  postElement.appendChild(likeButton);

  // Add likes counter
  const likesElement = document.createElement('div');
  likesElement.classList.add('likes');
  likesElement.textContent = '0 likes';
  postElement.appendChild(likesElement);

  // Add post to the container
  postsContainer.prepend(postElement);
}

function likePost(postElement) {
  const likesElement = postElement.querySelector('.likes');
  let likes = parseInt(likesElement.textContent) || 0;
  likes++;
  likesElement.textContent = `${likes} like${likes !== 1 ? 's' : ''}`;
}
