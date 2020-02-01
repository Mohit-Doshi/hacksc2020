import config from "./config"
var upload = function (input_path, playback_policy, username, password) {

    var asset_id = "00401k8pUJIopNaUyT5024tPhw8mEstyv5A"
    fetch("https://api.mux.com/video/v1/assets/"+ asset_id, {
        headers: {
            Authorization: config.muxWrapper,
            "Content-Type": "application/json"
        },
        method: "GET"
    }).then((response) => { return response.json() })
}

var muxWrapper = {
    upload: upload
};

export default muxWrapper;