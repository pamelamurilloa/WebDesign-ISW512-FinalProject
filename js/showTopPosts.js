const container = document.getElementsByClassName("top-posts-section")[0];

for (let category of categories) {
    var topPosts = category.posts.filter(post => {
        return post.rating > 4;
      })

    var categoryElement = document.createElement("h2");
    categoryElement.innerHTML = category.name;
    var postContainer = document.createElement("div");
    container.appendChild(categoryElement);

    for (let post of topPosts) {

        var miniPost = document.createElement("div");
        miniPost.innerHTML = `
            <img class="post-image" alt="post-image" src="${post.imgSource}"></img>
            <div class="post-title-zone">
                <h3><a href="/html/post_page.html?id=${post.id}">${post.title}</a></h3>
                <div class="post-tile-zone-subinformation">
                    <h4>${post.author}</h4>
                    <h4>${post.date}</h4>
                </div>
            </div>
            <div class="post-desc-zone">
                ${post.summary}
            </div>
        `

        miniPost.className = "post";

        postContainer.appendChild(miniPost);
    }
    postContainer.className = "post-container";
    container.appendChild(postContainer);
}