const oneStar = document.getElementById('rating-5');
const twoStars = document.getElementById('rating-4');
const threeStars = document.getElementById('rating-3');
const fourStars = document.getElementById('rating-2');
const fiveStars = document.getElementById('rating-1');


// let idPost = new URLSearchParams(location.search);
// idPost = idPost.getAll("id");

// const getIdInformation = async () => {
//     let userID = await getUserId(username);
//     let postID = await getPostId(idPost);
//     console.log();
//     return {userID, postID};
// } 


const ratingChanges = async (ratingNumber) => {
    const username = localStorage.getItem('username');
    const ratingExists = await confirmRatingExists({postid:parseInt(idPost), username:username, rating:ratingNumber});
}

oneStar.addEventListener(`click`, (e) => {
    ratingChanges(1);
})

twoStars.addEventListener(`click`, (e) => {
    ratingChanges(2);
})

threeStars.addEventListener(`click`, (e) => {
    ratingChanges(3);
})

fourStars.addEventListener(`click`, (e) => {
    ratingChanges(4);
})

fiveStars.addEventListener(`click`, (e) => {
    ratingChanges(5);
})