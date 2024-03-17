function uuidv4() {
    return "123123";
}

/**
 * Template Name: NiceAdmin
 * Updated: Jan 29 2024 with Bootstrap v5.3.2
 * Template URL: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */

export class Tracker {
    private user_id: string;
    static HOST = "http://localhost/";

    public trackPageLoad():void {
        const data = {
            path: window.location.pathname
        };
        this.track('log/page-visited', data)
    }

    trackEvent(name: string, attributes = {}) {
        const data = {
            name,
            attributes
        };
        this.track('log/event', data)
    }

    private track(url: string, data: object):void {
        const user_id = this.getUserId();
        fetch(Tracker.HOST + url, {
            method: "POST",
            body: JSON.stringify({user_id, data}),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        });
    }

    setUserId(user_id: string) {
        this.user_id = user_id;
        localStorage.setItem('user_id', user_id);

    }

    getUserId() {
        if (!this.user_id) {
            this.setUserId(localStorage.getItem('user_id'));
        }
        if (!this.user_id) {
            this.setUserId(uuidv4());
        }
        return this.user_id;

    }
}