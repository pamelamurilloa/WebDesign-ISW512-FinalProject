let idPost = new URLSearchParams(location.search);
idPost = idPost.getAll("id");
console.log(idPost);

let postInformation = "no info";

for (let category of categories) {
    for (let post of category.posts) {
        if (parseInt(idPost) === post.id) {
            postInformation = post;
        }
    }
}

console.log(postInformation.title);
console.log(postInformation.imgSource);

const postSpace = document.getElementsByClassName("main-content")[0];

const heroComponent = document.getElementsByClassName("hero-component")[0];
const postTitle = document.getElementsByClassName("tile-hero-component")[0];

heroComponent.style.backgroundImage = postInformation.imgSource;
postTitle.innerHTML = postInformation.title;

let postContent = document.createElement("div");
postContent.innerHTML = `
            <div class="post-subinformation">
                <h4>${postInformation.author}</h4>
                <h4>${postInformation.date}</h4>
                <h4>${postInformation.rating}</h4>
            </div>
            <div class="post-content-zone">
                ${postInformation.completeInformation}
            </div>
        `;

postSpace.className = "post-content";
postSpace.appendChild(postContent);