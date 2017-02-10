//切換網頁字體大中小，只改變特定的class或ID
function FontZoom(size) {
    var element = document.getElementsByTagName("div");
    var components = new Array();
    var ID_array = ["News", "Orange"];
    //認div的class，class有service_3_detail或blog_single...的字才會變大，避免某些不想變大的字也跟著變大
    var Class_array = ["service_3_detail", "blog_single", "Apple", "Mango", "more3"];

    for (i = 0, j = 0; i < element.length; i++) {
        attribute = element[i].getAttribute("id");
        Divclass = element[i].getAttribute("class");
        if (ID_array.indexOf(attribute) != -1 || Class_array.indexOf(Divclass) != -1) {
            components[j] = element[i];
            j++;
        }
    }
    for (i = 0; i < components.length; i++) { components[i].style.fontSize = size + 'em'; components[i].style.lineHeight = size+0.2 + 'em'; }
}
