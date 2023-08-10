const optionsParent = document.getElementById("dropdown-search-options");

let keyphrase = '';

const updateSearchBar = () => {
    keyphrase = document.getElementById("to-search").value;
    container.innerHTML = ""


    for (let category of categories) {
        var categoryElement = document.createElement("h2");
        categoryElement.innerHTML = category.name;
        var postContainer = document.createElement("div");
        container.appendChild(categoryElement);
        
        for (let post of category.posts) 
        {
            if (post.title.toLowerCase().includes(keyphrase) || post.summary.toLowerCase().includes(keyphrase) || post.author.toLowerCase().includes(keyphrase)) {
                // searchResults.push(post);

                // let optionElement = document.createElement("li");
                // optionElement.innerHTML = `<a href="#${post.id}">${post.title}</a>`;
                // optionsParent.appendChild(optionElement);

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
        }

        postContainer.className = "post-container";
        container.appendChild(postContainer);
    }
}
