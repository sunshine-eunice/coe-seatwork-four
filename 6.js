var reverse = function(str) {
    var arr = [];

    for (var i = 0, len = str.length; i <= len; i++) {
        arr.push(str.charAt(len - i));
    }

    return arr.join('');
}

reverse('Bahay Kubo');
