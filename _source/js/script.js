function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function backgroundCanvasInit(_audio) {
    var canvas = document.getElementById('background_canvas');
    var context = canvas.getContext('2d');
    var _width = document.documentElement.scrollWidth;
    var _height = document.documentElement.scrollHeight;

    canvas.width = _width;
    canvas.height = _height;

    var _pixel = {
        posX: 600,
        posY: _height / 2,
        minposY: 0,
        maxposY: _height - 3,
        speed: 10,
        width: 3,
        height: 3,
        color: '#cccccc'
    };

    setInterval(function () {
        context.clearRect(0, 0, canvas.width, canvas.height);

        if (
            _pixel.posY + _pixel.speed > _pixel.maxposY ||
            _pixel.posY + _pixel.speed < _pixel.minposY
        ) {
            _pixel.speed = _pixel.speed * -1;
        }
        _pixel.posY += _pixel.speed;

        context.beginPath();
        context.fillStyle = _pixel.color;
        context.fillRect(_pixel.posX, _pixel.posY, _pixel.width, _pixel.height);
        context.closePath();
        context.fill();
    }, 30);
}

function backgroundGridInit() {
    var calc_h = document.documentElement.scrollHeight;
    var calc_v = document.documentElement.scrollWidth;

    var _hitems = Math.floor(calc_h / 400);
    var _vitems = Math.floor(calc_v / 400);

    var _hstatr_pos = (calc_h - (_hitems * 400)) / 2;
    var _vstatr_pos = (calc_v - (_vitems * 400)) / 2;

    $('.js-background-grid').html('');

    for (var i = 0; i <= _hitems; i++) {
        var _hdelay = getRandom(0, 4000);
        var _hspeed = getRandom(6000, 12000);
        var _hline = '<div class="background__grid_hline" style="top: ' + (_hstatr_pos + (400 * i)) + 'px; animation-delay: ' + _hdelay + 'ms; animation-duration: ' + _hspeed + 'ms;"></div>';
        $('.js-background-grid').append(_hline);
    }
    for (var i = 0; i <= _vitems; i++) {
        var _vdelay = getRandom(0, 4000);
        var _vspeed = getRandom(6000, 12000);
        var _vline = '<div class="background__grid_vline" style="left: ' + (_vstatr_pos + (400 * i)) + 'px; animation-delay: ' + _vdelay + 'ms; animation-duration: ' + _vspeed + 'ms;"></div>';
        $('.js-background-grid').append(_vline);
    }
}

$(document).ready(function () {

    var wellcome_modal = new Vue({
        el: '#wellcome_modal',
        data: {
            wellcome_complete: false,
            ip: 'не определен',
            city: 'не определен',
        },
        methods: {
            SubmitWellcomeModal: function (data) {
                var _t = this;

                var _message = 'Резюме просматривает <b><u>' + data.name + '</u></b>';
                if (data.company.length > 0) {
                    _message += '\nиз компании <b><u>' + data.company + '</u></b>';
                }
                _message += '\nгород: <b><u>' + _t.city + '</u></b>';
                _message += '\nIP: <b><u>' + _t.ip + '</u></b>';

                var _data = {
                    exec: 'send_to_tg',
                    text: _message,
                };

                $.ajax({
                    type: 'POST',
                    url: '/api/',
                    data: _data
                });

                _t.wellcome_complete = true;
                hello_world.wellcome_complete = true;
                var _audio = document.getElementById('audio');
                _audio.play();
            },
            grabCityIp: function () {
                $.ajax({
                    type: 'GET',
                    url: 'https://ipapi.co/json/',
                    success: function (data) {
                        if (data.city) {
                            wellcome_modal.city = data.city;
                        }
                        if (data.ip) {
                            wellcome_modal.ip = data.ip;
                        }
                    },
                });
            }
        },
        mounted: function () {
            this.grabCityIp();
        }
    });

    var hello_world = new Vue({
        el: '#hello_world',
        data: {
            wellcome_complete: false,
            test: 'yo',
        }
    });

    backgroundGridInit();
    backgroundCanvasInit();

    $(window).on('resize', function () {
        backgroundGridInit();
        backgroundCanvasInit();
    });

});