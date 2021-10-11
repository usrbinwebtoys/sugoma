const vjos = [
    "dwayne.mp4",
    "pussy.mp4",
    "cum.mp4",
    "gilbert.mp4",
    "cumlord.mp4",
    "deniro.mp4",
    "doug.mp4",
];

const sounds = ["amongus.mp3", "fart.mp3", "bruh.mp3", "rtusa.mp3"];

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

        $("video").each(function () {
            $(this)[0].play();
        });

        new Audio("vineboom.mp3").play();
        if (Math.random() < 0.25) {
            new Audio(sounds[Math.floor(Math.random() * sounds.length)]).play();
        }
    });

    (function playTheFunny() {
        $("video").each(function () {
            $(this)
                .attr("src", vjos[Math.floor(Math.random() * vjos.length)])[0]
                .play();
        });
        setTimeout(playTheFunny, 5000);
    })();
});
