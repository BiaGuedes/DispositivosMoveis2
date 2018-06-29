var latitude;
var longitude;

var onSuccess = function(position) {
    alert("Latitude: ");
};

// onError Callback receives a PositionError object
function onError(error) {
    alert('code: ' + error.code + '\n' +
        'message: ' + error.message + '\n');
};