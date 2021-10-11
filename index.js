const vjos = [
    "dwayne.mp4",
    "pussy.mp4",
    "cum.mp4",
    "gilbert.mp4",
    "cumlord.mp4",
    "deniro.mp4",
    "doug.mp4",
    "matthew.mp4",
    "waffle.mp4",
    "fax.mp4",
    "crab.mp4",
    "speen.mp4",
    "worm.mp4",
    "idonesia.mp4",
    "keem.mp4",
    "wifi.mp4",
    "ayo.mp4",
    "letroll.mp4",
];

const sounds = [
    "amongus.mp3",
    "fart.mp3",
    "bruh.mp3",
    "rtusa.mp3",
    "bass.mp3",
    "burp.mp3",
    "borger.mp3",
    "crazyrun.mp3",
    "crazyrunloud.mp3",
    "horny.mp3",
    "pacertest.mp3",
    "taco.mp3",
    "yeey.mp3",
    "dj.mp3",
    "swiss.mp3",
];

$(document).ready(function () {
    const width_ = $(window).width();
    const height_ = $(window).height();

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
        const imgWidth = Math.random() * 425 + 100;
        const imgHeight = Math.random() * 425 + 100;
        $(this).append(
            $("<img />")
                .attr({
                    id: "boomcircle",
                    src: "redcirlce.png",
                    style: `position: absolute; left: ${
                        e.pageX - imgWidth / 2
                    }px; top: ${
                        e.pageY - imgHeight / 2
                    }px; width: ${imgWidth}px; height: ${imgHeight}px;`,
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
