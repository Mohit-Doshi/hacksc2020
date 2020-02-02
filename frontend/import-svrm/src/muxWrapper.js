import config from "./config"
var getAccessInfo = function (asset_id) {

    return fetch("https://api.mux.com/video/v1/assets/"+ asset_id, {
        headers: {
            "Authorization": config.muxWrapper.auth_header,
            "Content-Type": "application/json"
        },
        method: "GET"
    }).then((response) => { return response.json() })
}

var getUploadLink = function () {
    return fetch("https://api.mux.com/video/v1/uploads", {
        body: "{\"cors_origin\": \"*\", \"new_asset_settings\": { \"playback_policy\": [\"public\"] } }",
        headers: {
            "Authorization": config.muxWrapper.auth_header,
            "Content-Type": "application/json"
        },
        method: "POST"
    }).then((response) => { return response.json() })
}

var getAccessfromUpload = function (upload_link) {
    return fetch("https://api.mux.com/video/v1/uploads/"+ upload_link, {
        headers: {
            "Authorization": config.muxWrapper.auth_header,
            "Content-Type": "application/json"
        },
        method: "GET"
    }).then((response) => { return response.json() })
}



var muxWrapper = {
    getAccessInfo: getAccessInfo,
    getUploadLink: getUploadLink,
    getAccessfromUpload: getAccessfromUpload,

};

export default muxWrapper;