$(document).ready(function () {
    $(this).append(
        $("<video loop/>")
            .attr({
                id: "vjo",
                src: "",
                width: 320,
                height: 240,
                type: "video/mp4",
                style: "position: fixed; bottom: 0; left: 0;",
            })
            .hide()
            .fadeIn(100)
    );
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
                .fadeOut(1000, function () {
                    $(this).remove();
                })
        );

        if ($("#vjo").attr("src") === "") {
            $("#vjo").attr("src", "dwayne.mp4")[0].play();
        }

        new Audio("vineboom.mp3").play();
        if (Math.random() < 0.25) {
            new Audio("amongus.mp3").play();
        }
    });
});
