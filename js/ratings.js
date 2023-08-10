const ratingChanges = async (ratingNumber) => {
    const username = localStorage.getItem('username');
    const ratingExists = await confirmRatingExists({postid:parseInt(idPost), username:username, rating:ratingNumber});
}


