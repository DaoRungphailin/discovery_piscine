function changeColor(){
    console.log(get_random_color())
    document.body.style.backgroundColor= get_random_color();
}
function get_random_color() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}