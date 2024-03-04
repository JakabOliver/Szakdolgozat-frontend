/**
 * Template Name: NiceAdmin
 * Updated: Jan 29 2024 with Bootstrap v5.3.2
 * Template URL: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
(function () {
    "use strict";
    fetch("http://localhost/log/page-visited", {
        method: "POST",
        body: JSON.stringify({
            data:{
                path: window.location.pathname
            }
        }),
        headers: {
            "Content-type": "request->all()application/json; charset=UTF-8"
        }
    });
})();