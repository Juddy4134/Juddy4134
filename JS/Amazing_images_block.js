const galleryAddButton = $(".gallery-images-button.add-button");
const galleryHideButton = $(".gallery-images-button.remove-button");
galleryAddButton.click(function () {
    const loaderContainer = document.createElement("div");
    loaderContainer.classList.add("loader-container");
    loaderContainer.innerHTML = `<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>`;
    document.body.prepend(loaderContainer);
    setTimeout(function () {
        $(".gallery-images-item").show();
        galleryAddButton.hide();
        galleryHideButton.fadeIn(400);
        loaderContainer.remove();
    }, 2000);
});

galleryHideButton.click(function () {
        $(".gallery-images-item").hide();
        $(".gallery-images-item.active").show();
        galleryHideButton.hide();
        galleryAddButton.fadeIn(400);
        loaderContainer.remove();
});

const galleryPhotoItem = $(".gallery-images-item");

galleryPhotoItem.hover(function () {
    const hoverPicture = `<div class="gallery-item-hover">
    <p class="gallery-hover-image"><i class="fas fa-search"></i></p>
<p class="gallery-hover-image"><i class="fas fa-expand-arrows-alt"></i></p>
</div>`;
    console.log($(this));
    $(this).append($(hoverPicture));
}, function () {
    $(".gallery-item-hover").remove();
});


