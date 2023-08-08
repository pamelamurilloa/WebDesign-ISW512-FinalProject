const optionsParent = document.getElementById("dropdown-search-options");


let keyphrase = '';

const updateSearchBar = () => {
    keyphrase = document.getElementById("to-search").value;
    optionsParent.innerHTML = "";
    let searchResults = [];

    for (let category of categories) {
        for (let post of category.posts) 
        {
            if (post.title.toLowerCase().includes(keyphrase) || post.summary.toLowerCase().includes(keyphrase) || post.author.toLowerCase().includes(keyphrase)) {
                searchResults.push(post);

                let optionElement = document.createElement("li");
                optionElement.innerHTML = `<a href="#${post.id}">${post.title}</a>`;
                optionsParent.appendChild(optionElement);
            }
        }
    }

    console.log(searchResults);
}

