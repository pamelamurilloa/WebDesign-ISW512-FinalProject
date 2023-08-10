const getUsers = async () => {
    const users = await apiRequest('users');
    console.log(users);
    return users;
}

const getUser = async (id) => {
    const user = await apiRequest(`users/${id}`);
    return user;
}

const insertUser = async (user) => {
    const response = await apiRequest(`users/insert-new`, 
    {
        method: "POST",
        body: JSON.stringify(user)
    })
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