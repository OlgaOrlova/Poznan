var MyBanners = new Array('images/banner/banner1.jpg',
    'images/banner/banner2.jpg', 'images/banner/banner3.jpg', 'images/banner/banner4.jpg');
var banner = 0;
function ShowBanners() {
    if (document.images) {
        banner++;
        if (banner == MyBanners.length) {
            banner = 0;
        }
        document.ChangeBanner.src = MyBanners[banner];
        setTimeout("ShowBanners()", 5000);
    }
}