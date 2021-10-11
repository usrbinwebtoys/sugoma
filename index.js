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
                .remove()
        );

        /*if (!$("#rock").length) {
            $(this).append(
                $("<video autoplay/>")
                    .attr({
                        id: "rock",
                        src: "dwayne.mp4",
                        width: 320,
                        height: 240,
                        type: "video/mp4",
                        style: "position: fixed; bottom: 0; left: 0;",
                    })
                    .hide()
                    .fadeIn(100)
            );
        }*/
        new Audio("vineboom.mp3").play();
        if (Math.random() < 0.25) {
            new Audio("amongus.mp3").play();
        }
    });
});
