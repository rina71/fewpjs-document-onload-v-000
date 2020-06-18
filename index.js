document.addEventListener("DOMContentLoaded", function() {
    replaceDOM()
});

function replaceDOM(){
    document.getElementbyId('text').innerHTML = "This is really cool!";
}
