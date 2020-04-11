const ourServicesListItems = $(".our-services-list-item");
ourServicesListItems.on("click",function () {
    ourServicesListItems.removeClass("active");
    this.classList.add("active");
    const ourServicesInfo = $(".our-services-container");
    ourServicesInfo.removeClass("active");
    const index = $.inArray(this,ourServicesListItems);
    ourServicesInfo[index].classList.add("active");
});