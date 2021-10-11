const vjos = ["dwayne.mp4", "pussy.mp4"];

$(document).ready(function () {
    $("body")
        .append(
            $("<video loop/>").attr({
                src: "",
                width: 320,
                height: 240,
                type: "video/mp4",
                style: "position: fixed; bottom: 0; left: 0;",
            })
        )
        .append(
            $("<video loop/>").attr({
                src: "",
                width: 320,
                height: 240,
                type: "video/mp4",
                style: "position: fixed; top: 0; right: 0;",
            })
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
        new Audio("vineboom.mp3").play();
        if (Math.random() < 0.25) {
            new Audio("amongus.mp3").play();
        }
    });

    setInterval(function () {
        $("video").each(function () {
            $(this)
                .attr("src", vjos[Math.floor(Math.random() * vjos.length)])[0]
                .play();
        });
    }, 10000);
});
