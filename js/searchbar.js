
let keyphrase = '';
const updateSearchBar = () => {
    keyphrase = document.getElementById("to-search").value;
}


let searchResults = [];

for (let category of categories) {
    for (let post of category.posts) 
    {
        if (post.title.toLowerCase().includes(keyphrase) || post.summary.toLowerCase().includes(keyphrase) || post.author.toLowerCase().includes(keyphrase)) {
            searchResults.push(post);
        }
    }
}



console.log(searchResults);