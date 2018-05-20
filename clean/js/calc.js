function refresh() {

    var cleaner = 0;
    var time = 0;
    var range = document.getElementById('range').value;

    function cleanerNumb() {
        for (i = 0; i < range; i++) {
            if ((range > 1) && (range <= 100)) {
                cleaner = 1;
            } else if ((range > 100) && (range <= 200)) {
                cleaner = 2;
            } else {
                cleaner = 0;
            }
        }
    };

    function timeFor() {
        for (i = 0; i < range; i++) {
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
        }
    };


    var checkbox = document.getElementsByName('services');
    var checked = [];
    for (var i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked) {
            checked.push(checkbox[i].value);
        }
    };


    timeFor();
    cleanerNumb();
    document.getElementById('cleaner').innerHTML = cleaner;
    document.getElementById('time').innerHTML = time;

    var sum = 0;
    for (var i = 0; i < checked.length; i++) {
        sum = sum + parseInt(checked[i]);
    };

    var result = (range * 10.5) + sum;
    document.getElementById('result').innerHTML = result;

};

refresh(); 

/*document.getElementById('range').onchange = function refresh() {

        var cleaner = 0;
        var time = 0;
        var range = document.getElementById('range').value;

        //console.log(range);

        function cleanerNumb() {
            for (i = 0; i < range; i++) {
                if ((range > 1) && (range <= 100)) {
                    cleaner = 1;
                } else if ((range > 100) && (range <= 200)) {
                    cleaner = 2;
                } else {
                    cleaner = 0;
                }
            }
        };

        function timeFor() {
            for (i = 0; i < range; i++) {
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
            }
        };

        timeFor();
        cleanerNumb();
        document.getElementById('cleaner').innerHTML = cleaner;
        document.getElementById('time').innerHTML = time;

        var result = (range * 10.5);
       
        return result;
        document.getElementById('result').innerHTML = result;

        
    };


   function chkBox(){

        var resOf = document.getElementById('result').innerHTML;
    
        var checkbox = document.getElementsByName('services');
        var checked = [];
        for (var i = 0; i < checkbox.length; i++) {
            if (checkbox[i].checked) {
                checked.push(checkbox[i].value);
            }
        };

        var sum = 0;
        for (var i = 0; i < checked.length; i++) {
            sum = sum + parseInt(checked[i]);
        };

        console.log(sum);

        var res = parseInt(resOf) + sum;
        document.getElementById('result').innerHTML = res;

    };

chkBox();*/
