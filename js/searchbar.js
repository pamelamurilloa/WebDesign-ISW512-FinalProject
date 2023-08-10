const optionsParent = document.getElementById("dropdown-search-options");

let keyphrase = '';

const updateSearchBar = async () => {
    keyphrase = document.getElementById("to-search").value;
    container.innerHTML = "";

    const categories = await getPostsByCategory();

    for (let category of categories) {
        var categoryElement = document.createElement("h2");
        categoryElement.innerHTML = category.name;
        var postContainer = document.createElement("div");
        container.appendChild(categoryElement);
        
        for (let post of category.posts) 
        {
            if (post.title.toLowerCase().includes(keyphrase) || post.summary.toLowerCase().includes(keyphrase) || post.author.toLowerCase().includes(keyphrase)) {

                var miniPost = document.createElement("div");
                miniPost.innerHTML = `
                    <img class="post-image" alt="post-image" src="${post.img_source}"></img>
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
        }

        postContainer.className = "post-container";
        container.appendChild(postContainer);
    }
}
