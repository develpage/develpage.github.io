function refresh() {
    var cleaner = 0
    var range = document.getElementById('range').value;
    if ((range > 1) && (range <= 100)) {
        cleaner = 1;
    } else if ((range > 100) && (range <= 200)) {
        cleaner = 2;
    } else {
        cleaner = 0;
    }

    document.getElementById('cleaner').innerHTML = cleaner;

    var time = 0
    var range = document.getElementById('range').value;
    if ((range > 1) && (range <= 50)) {
        time = 1;
    } else if ((range > 50) && (range <= 100)) {
        time = 1.5;
    } else if ((range > 100) && (range <= 150)) {
        time = 2;
    } else if ((range > 150) && (range <= 200)) {
        time = 2.5;
    } else {
        time = 0;
    }
    document.getElementById('time').innerHTML = time;

    var checkbox = document.getElementsByName('services');
    var checked = [];
    for (var i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked) {
            checked.push(checkbox[i].value);
        }
    }
    var sum = 0;
    for (var i = 0; i < checked.length; i++) {
        sum = sum + parseInt(checked[i]);
    }
    var size = parseInt(document.getElementById('range').value);
    var result = (size * 10.5) + sum;
    document.getElementById('result').innerHTML = result;

};