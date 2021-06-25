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

});