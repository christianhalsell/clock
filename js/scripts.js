(function () {
    function checkTime(i) {
        return (i < 10) ? "0" + i : i;
    }

    function startTime() {
        var today = new Date(),
            h = today.getHours(),
            m = checkTime(today.getMinutes()),
            s = checkTime(today.getSeconds()),
            time = document.getElementById('time'),
            wrapper = document.getElementById('wrapper');

        if (h > 12) {
            h = h - 12;
        }

        // TEST
        // h = 7;
        // m = checkTime(15);

        time.innerHTML = h + ":" + m;
        // time.innerHTML = h + ":" + m + ":" + s;

        if (h === 7 && m >= 0 && m < 10) {
            wrapper.className = 'yellow';
            time.className = '';            
        } else if (h === 7 && m >= 10 && m < 15) {
            wrapper.className = 'orange';
            time.className = 'text-white';
        } else if (h === 7 && m >= 15 && m < 59) {
            wrapper.className = 'red';
            time.className = '';
        } else {
            wrapper.className = 'green';
            time.className = 'text-white';
        }

        setTimeout(function () {
            startTime();
        }, 1000);
    }

    startTime();
})();