$(document).ready(function () {
    $("body").on("click", function (e) {
        $(this).append(
            $("<img />").attr({
                id: "boomcircle",
                src: "redcirlce.png",
                style: `position: absolute; left: ${e.pageX}px; top: ${e.pageY}px`,
            })
        );
    });
});
