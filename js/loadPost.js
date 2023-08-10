let idPost = new URLSearchParams(location.search);
idPost = idPost.getAll("id");


const loadPost = async () => {

    const postInformation = await getPostById(idPost);

    const postSpace = document.getElementsByClassName('main-content')[0];

    const heroComponent = document.getElementsByClassName('hero-component')[0];
    const postTitle = document.getElementsByClassName('tile-hero-component')[0];
    
    heroComponent.style.backgroundImage = 'url('+postInformation.img_source+')';
    postTitle.innerHTML = postInformation.title;
    
    let postContent = document.createElement('div');
    postContent.innerHTML = `
                <div class="post-subinformation">
                    <div class="author-date">
                        <h4>Autor: ${postInformation.author}</h4>
                        <h4>Fecha: ${postInformation.date}</h4>
                    </div>
                    <div class="rating-distribution">
                        <img id="rating-1" class="rating" src="../images/rating.png"></img>
                        <img id="rating-2" class="rating" src="../images/rating.png"></img>
                        <img id="rating-3" class="rating" src="../images/rating.png"></img>
                        <img id="rating-4" class="rating" src="../images/rating.png"></img>
                        <img id="rating-5"class="rating" src="../images/rating.png"></img>
                    </div>
                </div>
                <div class="post-content-zone">
                    ${postInformation.complete_information}
                </div>
            `;
    
    postSpace.className = 'post-content';
    postSpace.appendChild(postContent);
}

loadPost();