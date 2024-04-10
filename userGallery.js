var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}

function addImage() {
    var input = document.getElementById('imageInput');
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            var container = document.getElementById('slideshowContainer');
            var img = document.createElement('img');
            img.src = e.target.result;
            img.style.width = "100%";
            img.className = "mySlides";
            container.insertBefore(img, container.children[container.children.length - 2]);
            showDivs(slideIndex = document.getElementsByClassName("mySlides").length);
        }

        reader.readAsDataURL(input.files[0]);
    }
}

function removeImage() {
    var x = document.getElementsByClassName("mySlides");
    if (x.length > 0) {
        x[slideIndex - 1].remove();
        // Adjust slideIndex if necessary
        if (slideIndex > x.length) {
            slideIndex = x.length;
        }
        showDivs(slideIndex);
    }
}
