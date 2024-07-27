function uploadImage() {
    const input = document.getElementById('imageUpload');
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const imgSrc = e.target.result;
            createPost(imgSrc);
        };
        reader.readAsDataURL(input.files[0]);
    }
}

function createPost(imgSrc) {
    const feed = document.getElementById('feed');
    const post = document.createElement('div');
    post.classList.add('post');
    post.innerHTML = `
        <img src="${imgSrc}" alt="Post Image">
        <div class="actions">
            <button onclick="likePost(this)">❤️ Like</button>
            <button onclick="commentPost(this)">💬 Comment</button>
        </div>
    `;
    feed.appendChild(post);
}

function likePost(button) {
    button.textContent = '❤️ Liked';
}

function commentPost(button) {
    const comment = prompt('Enter your comment:');
    if (comment) {
        const commentSection = document.createElement('div');
        commentSection.textContent = comment;
        button.parentElement.parentElement.appendChild(commentSection);
    }
}