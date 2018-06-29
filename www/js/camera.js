document.addEventListener("deviceready", function() {

    var botao = document.getElementById("botaoCamera");

    botao.addEventListener("click", function() {

        navigator.camera.getPicture(onSuccess, onFail, {
            quality: 50,
            destinationType: Camera.DestinationType.DATA_URL
        });

        function onSuccess(imageData) {
            var image = document.getElementById('imgCamera');
            image.src = "data:image/jpeg;base64," + imageData;
        }

        function onFail(message) {
            alert('Ocorreu um erro: ' + message);
        }

    });

});