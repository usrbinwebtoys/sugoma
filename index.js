$(document).ready(function () {
    $("body").on("click", function (e) {
        $(this).append(
            $("<img />")
                .attr({
                    id: "boomcircle",
                    src: "redcirlce.png",
                    style: `position: absolute; left: ${
                        e.pageX - 112.5
                    }px; top: ${e.pageY - 112.5}px`,
                })
                .hide()
                .fadeIn(100)
                .delay(10000)
                .fadeOut(1000)
        );
        new Audio("vineboom.mp3").play();
    });
});
