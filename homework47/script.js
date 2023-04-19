const searchBtn = document.getElementById('search-button');
const postContainer = document.getElementById('post-Container');

searchBtn.addEventListener('click', () => {
  postContainer.innerHTML = '';
  const postId = document.getElementById('post-Id').value;
  if (postId < 1 && postId > 100) {
    alert('Помилка! Введіть ID від 1 до 100');
    return;
  }

  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Помилка отримання даних!');
      }

      return response.json();
    })
    .then((data) => {
      postContainer.innerHTML = `
                    <h2>${data.title}</h2>
                    <p>${data.body}</p>
                    <button id="comments-button">Коментарі</button>
                `;

      const commentsBtn = document.getElementById('comments-button');
      commentsBtn.addEventListener('click', () => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
          .then((response) => {
            if (!response.ok) {
              throw new Error('Помилка отримання даних!');
            }

            return response.json();
          })
          .then((comments) => {
            let commentsHtml = '';
            comments.forEach((comment) => {
              commentsHtml += `
                                    <div>
                                        <h3>${comment.name}</h3>
                                        <p>${comment.body}</p>
                                    </div>
                                `;
            });
            postContainer.innerHTML += commentsHtml;
          })
          .catch((error) => {
            console.error(error);
            alert('Помилка отримання коментарів!');
          });
      });
    })
    .catch((error) => {
      alert(error);
      alert('Помилка отримання поста!');
    });
});