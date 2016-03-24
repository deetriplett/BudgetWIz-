//alert("Using Flickr Api");
$("button#go").click(function () {
var mytag = $("input#term").val();

$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?", {
    tags: mytag,
    tagmode: "any",
    format: "json"
},

function (data) {
    $.each(data.items, function (i, item) {
        $("<img/>").attr("src", item.media.m).appendTo("#content");
        if (i == 0) return false;
    });
});
});
