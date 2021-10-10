$(document).ready(function () {
    $("audio").each(function () {
        this.volume = 0.8;
        this.play();
    });

    $("#krabs").on("click", function () {
        $("#mrsquidward")[0].paused
            ? $("#mrsquidward")[0].play()
            : $("#mrsquidward")[0].pause();
    });

    $("#wham").on("click", function () {
        $("#wakemeup")[0].paused
            ? $("#wakemeup")[0].play()
            : $("#wakemeup")[0].pause();
    });

    $(".bruh").each(function () {
        animateDiv($(this));
    });

    // Ensure the page always has more scrolling
    $(document)
        .scroll(function () {
            while (
                window.pageYOffset + window.innerHeight >=
                $(this).height() - window.innerHeight / 2
            ) {
                $("ul").append("<li>ligma unordered balls lmao</li>");
            }
        })
        .scroll();

    fartscroll(800);

    function makeNewPosition() {
        const inith = $(window).innerHeight() - 50;
        const initw = $(window).innerWidth() - 50;
        let nh = Math.floor(Math.random() * inith);
        let nw = Math.floor(Math.random() * initw);
        return [nh, nw];
    }

    function animateDiv(id) {
        let newq = makeNewPosition();
        id.animate({ top: newq[0], left: newq[1] }, function () {
            animateDiv(id);
        });
    }
});
