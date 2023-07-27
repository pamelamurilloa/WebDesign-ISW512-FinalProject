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

const postSpace = document.getElementsByClassName('main-content')[0];

const heroComponent = document.getElementsByClassName('hero-component')[0];
const postTitle = document.getElementsByClassName('tile-hero-component')[0];

heroComponent.style.backgroundImage = 'url('+postInformation.imgSource+')';
postTitle.innerHTML = postInformation.title;

let postContent = document.createElement('div');
postContent.innerHTML = `
            <div class="post-subinformation">
                <h4>Autor: ${postInformation.author}</h4>
                <h4>Fecha: ${postInformation.date}</h4>
                <div class="rating-distribution">
                    <img class="rating" src="../images/rating.png"></img>
                    <img class="rating" src="../images/rating.png"></img>
                    <img class="rating" src="../images/rating.png"></img>
                    <img class="rating" src="../images/rating.png"></img>
                    <img class="rating" src="../images/rating.png"></img>
                </div>
            </div>
            <div class="post-content-zone">
                ${postInformation.completeInformation}
            </div>
        `;

postSpace.className = 'post-conten';
postSpace.appendChild(postContent);
