const container = document.getElementsByClassName("all-posts-section")[0];

//This for will go through the categories and their posts to show them in the categories zone


const showAllPosts = async () => {

    const categories = await getPostsByCategory();

    for (let category of categories) {
        var categoryElement = document.createElement("h2");
        categoryElement.innerHTML = category.name;
        var postContainer = document.createElement("div");
        container.appendChild(categoryElement);
    
        for (let post of category.posts) {
    
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
            miniPost.id = post.id;
    
            postContainer.appendChild(miniPost);
        }
        
        postContainer.className = "post-container";
        container.appendChild(postContainer);
    }
}

showAllPosts();