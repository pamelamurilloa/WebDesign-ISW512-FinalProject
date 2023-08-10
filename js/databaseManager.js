const getUsers = async () => {
    const users = await apiRequest('users');
    console.log(users);
    return users;
}

const getUser = async (id) => {
    const user = await apiRequest(`users/${id}`);
    return user;
}

const getUserId = async (username) => {
    const user = await apiRequest(`users/search?username=${username}`);
    return user.id;
}

const getPostById = async (id) => {
    const {data: { post }} = await apiRequest(`posts/?id=${id}`);
    return post;
}

const getPostId = async (title) => {
    const post = await apiRequest(`posts/${title}`);
    return post.id;
}

const confirmLogin = async (user) => {
    const userInfo = await apiRequest(`users/login`, 
    {
        method: "POST",
        body: JSON.stringify(user)
    })

    return userInfo;
}

const insertUser = async (user) => {
    const response = await apiRequest(`users/insert-new`, 
    {
        method: "POST",
        body: JSON.stringify(user)
    })

    return response;
}

const confirmRatingExists = async (ratingInfo) => {
    const response = await apiRequest('posts/confirm-rating', 
    {
        method: "POST",
        body: JSON.stringify(ratingInfo)
    })

    console.log(response);
    return response;
}

const getTopPostsByCategory = async () => {
    const {data: { categories }} = await apiRequest('categories')
    const topPostsByCategory = [];
    for (let category of categories) {   
        const topPosts = await apiRequest(`posts/top-summary?id=${category.id}`)
        topPostsByCategory.push({name: category.name, posts:topPosts.data.posts})
    }

    return topPostsByCategory;
}

const getPostsByCategory = async () => {
    const {data: { categories }} = await apiRequest('categories')
    const topPostsByCategory = [];
    for (let category of categories) {   
        const topPosts = await apiRequest(`posts/all-summary?id=${category.id}`)
        topPostsByCategory.push({name: category.name, posts:topPosts.data.posts})
    }

    return topPostsByCategory;
}


//This will insert any post one has in the js files
// const insertPost = async (post) => {
//     const response = await apiRequest(`posts/insert-new`, 
//     {
//         method: "POST",
//         body: JSON.stringify(post)
//     })

//     return response;
// }


// for (let category of categories) {

//     for (let post of category.posts) {
//         const categoryindex = categories.indexOf(category) + 2;
//         insertPost({
//             id: post.id, 
//             img_source: post.imgSource,
//             title: post.title,
//             author: post.author,
//             date: post.date, 
//             summary: post.summary,
//             complete_information: post.completeInformation, 
//             category_id: categoryindex
//             }).then(({response}) => console.log(response));
//     }
// }