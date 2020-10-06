$(document).ready(function () {
    var clientId = "" //Client ID of the AOuth Application
    var redirect_uri = "http://localhost/OAuthAssignment/home.html"
    var scope = "https://www.googleapis.com/auth/drive"
    var url = ""

    $("#loginDrive").click(function () {
        url = "https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=" + redirect_uri
        + "&prompt=consent&response_type=code&client_id=" + clientId + "&scope=" + scope
        + "&access_type=offline";
        window.location = url;
    })

});