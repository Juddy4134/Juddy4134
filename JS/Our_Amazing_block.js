const ourAmazingArr = $(".amazing-work-image");
ourAmazingArr.slice(12,ourAmazingArr.length).hide();
const ourAmazingList = $(".amazing-list-item");
const ourAmazzingButton = $(".amazing-work-button");

ourAmazzingButton.click(function () {
    const index = ourAmazingArr.length;
    const loaderContainer = document.createElement("div");
    loaderContainer.classList.add("loader-container");
    loaderContainer.innerHTML = `<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>`;
    if (ourAmazingArr[12].style.display === "none"){
        document.body.prepend(loaderContainer);
        setTimeout(function () {
            ourAmazingArr.slice(12,index/3*2).show();
            loaderContainer.remove();
        },2000);
    } else {
        document.body.prepend(loaderContainer);
        setTimeout(function () {
            ourAmazingArr.slice(24,index).show();
            ourAmazzingButton.hide();
            loaderContainer.remove()
        },2000);
    }
});

ourAmazingList.click(function () {
    const dataset = this.dataset.type;
    ourAmazingArr.hide();
    ourAmazingList.removeClass("active");
    if (dataset === "*"){
        ourAmazzingButton.show();
        ourAmazingArr.slice(0,12).show();
        this.classList.add("active");

    } else {
        ourAmazzingButton.hide();
        this.classList.add("active");
        for (let i = 0;i<ourAmazingArr.length;i++){
            if (ourAmazingArr[i].classList.contains(dataset)){
                ourAmazingArr[i].style.display = "block";
            }
        }
    }

});

ourAmazingArr.hover(function () {
    const hoverPicture = `<div class="amazing-work-image-hover">
                        <div class="amazing-work-image-hover-images">
                            <div class="amazing-work-image-hover-image-container">
                                <img src="images/Our-amazing-work/Forma%201@1X.png" alt="#" class="image">
                            </div>
                            <div class="amazing-work-image-hover-image-container amazing-search-icon">
                                <i class="fas fa-search"></i>
                            </div>
                        </div>
                        <p class="c-cyan amazing-work-image-hover-title">creative design</p>
                        <p class="amazing-work-image-hover-text">web design</p>
                    </div>`;
    $($(this.children)).append($(hoverPicture));
    console.log($(this.children));
}, function () {
    $(".amazing-work-image-hover").remove();
});






