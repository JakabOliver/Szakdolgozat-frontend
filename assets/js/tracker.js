/**
 * Template Name: NiceAdmin
 * Updated: Jan 29 2024 with Bootstrap v5.3.2
 * Template URL: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */

export class Tracker {
    user_id;
    static  HOST = "http://localhost/";

    trackPageLoad() {
        const data = {
            path: window.location.pathname
        };
        this.track('log/page-visited', data)
    }

    trackEvent(name, attributes = {}) {
        const data = {
            name,
            attributes
        };
        this.track('log/event', data)
    }

    track(url, data) {
        const user_id =this.user_id;
        fetch(Tracker.HOST + url, {
            method: "POST",
            body: JSON.stringify({user_id, data}),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        });
    }

    set user_id(user_id) {
        this.user_id = user_id;
        localStorage.setItem('user_id', user_id);
    }

    get user_id(){
        if(!this.user_id){
            this.user_id = localStorage.getItem('user_id');
        }
        return this.user_id;
    }
}


(function () {
    "use strict";
    /* fetch("http://localhost/log/page-visited", {
         method: "POST",
         body: JSON.stringify({
             data:{
                 path: window.location.pathname
             }
         }),
         headers: {
             "Content-type": "request->all()application/json; charset=UTF-8"
         }
     });*/
})();

