// const oneStar = document.getElementById('rating-1');
// const twoStars = document.getElementById('rating-4');
// const threeStars = document.getElementById('rating-3');
// const fourStars = document.getElementById('rating-2');
// const fiveStars = document.getElementById('rating-5');

// oneStar.addEventListener(`click`, (e) => {
// ratingChanges(1);
// })

// twoStars.addEventListener(`click`, (e) => {
// ratingChanges(2);
// })

// threeStars.addEventListener(`click`, (e) => {
// ratingChanges(3);
// })

// fourStars.addEventListener(`click`, (e) => {
// ratingChanges(4);
// })

// fiveStars.addEventListener(`click`, (e) => {
// ratingChanges(5);
// })



const ratingChanges = async (ratingNumber) => {
    const username = localStorage.getItem('username');
    const ratingExists = await confirmRatingExists({postid:parseInt(idPost), username:username, rating:ratingNumber});
}

