
const showAllPosts = async () => {
    const categories = await getPostsByCategory();
    const container = document.getElementsByClassName("all-posts-section")[0];

    showPosts(container, categories);
}

showAllPosts();