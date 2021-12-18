function calculate() {
    var resolution = "";
    let radios = document.getElementsByName("resolution");
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            resolution = radios[i].value;
            break;
        }
    }
    if (resolution == "") {
        alert("Please select a resolution.");
        return;
    }

    let width = document.getElementById("width").value;
    if (width == "") {
        alert("Please set a width.");
        return;
    }
    if (width < 1) {
        alert("Width must be at least 1.")
        return;
    }

    let height = document.getElementById("height").value;
    if (height == "") {
        alert("Please set a height.");
        return;
    }
    if (height < 1) {
        alert("Height must be at least 1.")
        return;
    }

    let upscale_times = 128 / resolution;
    let upscale_percent = upscale_times * 100;
    let image_width = width * resolution;
    let image_height = height * resolution;

    document.getElementById("result").innerHTML = "\
    \
    <em>Image resolution: </em><strong>{0}x{1}</strong>\
    <br>\
    <em>Upscale by: </em><strong>{2}x</strong> or <strong>{3}%</strong>\
    <br>\
    <br>\
    1. Create an image with a resolution of <strong>{0}x{1}</strong>.\
    <br>\
    2. Use a palette such as\
    <a href=\"https://gist.githubusercontent.com/ItsTehBrian/84f1791f5b1f2fb879de36b0c0d2f056/raw/f033ddaae6d5314596810704c60a835f7843dcb4/1-16-minecraft-map-palette.gpl\">this one</a>\
    to make sure the colors don't get changed.\
    <br>\
    3. When exporting your image, upscale by <strong>{2}x</strong> or <strong>{3}%</strong>.\
    <br>\
    4. Upload your creation to an image-hosting site, such as\
    <a href=\"https://imgur.com\">Imgur</a>.\
    <br>\
    5. Import your image into Minecraft with a plugin, such as\
    <a href=\"https://www.spigotmc.org/resources/imageonmap.26585/\">ImageOnMap</a>.\
    \
    ".format(image_width, image_height, upscale_times, upscale_percent);
}

// Stolen straight from stack overflow. https://stackoverflow.com/a/4673436/
if (!String.prototype.format) {
    String.prototype.format = function () {
        var args = arguments;
        return this.replace(/{(\d+)}/g, function (match, number) {
            return typeof args[number] != 'undefined'
                ? args[number]
                : match
                ;
        });
    };
}
