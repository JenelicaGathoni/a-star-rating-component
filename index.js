 const star= document.querySelectorAll(".fa");
 let starRating = 0;
 const rating = document.querySelector(".rating")


function clickStar(event){
    const valueOfClickedStar = parseInt(event.target.getAttribute('data-value'));
    star.forEach(star =>{
        const starValue = parseInt(star.getAttribute('data-value'));
        if(starValue <= valueOfClickedStar){
            star.style.color = 'gold';
        }else{
            star.style.color = 'transparent';
        }
    });
}
star.forEach(star =>{
    star.addEventListener('click', clickStar);
});
    starRating = valueOfClickedStar;
    rating.textContent = starRating;