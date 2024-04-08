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
    set token(value: string) {
        this._token = value;
    }

    private user_id: string;
    private _token: string;
    static HOST = "http://localhost/";

    public trackPageLoad(): void {
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

    private track(url: string, data: object): void {
        const user_id = this.getUserId();
        const token = this._token;
        const user_data = JSON.parse(localStorage.getItem('user_data')) || {};
        const generic_attributes = JSON.parse(localStorage.getItem('generic_attributes')) || {};
        const browser_data = this.getBrowserData();
        fetch(Tracker.HOST + url, {
            method: "POST",
            body: JSON.stringify({user_id, data, user_data, browser_data, generic_attributes, token}),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        });
    }

    resetUserAttributes() {
        localStorage.removeItem('user_data');
    }

    resetAttributes() {
        localStorage.removeItem('generic_attributes');
    }

    addUserAttribute(key: string, value: string) {
        const userData = JSON.parse(localStorage.getItem('user_data')) || {};
        userData[key] = value;
        localStorage.setItem('user_data', JSON.stringify(userData));
    }

    addAttribute(key: string, value: string) {
        const attributes = JSON.parse(localStorage.getItem('generic_attributes')) || {};
        attributes[key] = value;
        localStorage.setItem('generic_attributes', JSON.stringify(attributes));
    }


    setUserId(user_id: string) {
        this.user_id = user_id;
        localStorage.setItem('user_id', user_id);
        this.resetUserAttributes();
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

    authenticate(token: string) {
        this.token = token;
    }

    private getBrowserData() {
        const nVer = navigator.appVersion;
        const nAgt = navigator.userAgent;
        let browserName = navigator.appName;
        let fullVersion = '' + parseFloat(navigator.appVersion);
        let majorVersion = parseInt(navigator.appVersion, 10);
        let nameOffset, verOffset, ix;

// In Opera, the true version is after "OPR" or after "Version"
        if ((verOffset = nAgt.indexOf("OPR")) != -1) {
            browserName = "Opera";
            fullVersion = nAgt.substring(verOffset + 4);
            if ((verOffset = nAgt.indexOf("Version")) != -1)
                fullVersion = nAgt.substring(verOffset + 8);
        }
// In MS Edge, the true version is after "Edg" in userAgent
        else if ((verOffset = nAgt.indexOf("Edg")) != -1) {
            browserName = "Microsoft Edge";
            fullVersion = nAgt.substring(verOffset + 4);
        }
// In MSIE, the true version is after "MSIE" in userAgent
        else if ((verOffset = nAgt.indexOf("MSIE")) != -1) {
            browserName = "Microsoft Internet Explorer";
            fullVersion = nAgt.substring(verOffset + 5);
        }
// In Chrome, the true version is after "Chrome"
        else if ((verOffset = nAgt.indexOf("Chrome")) != -1) {
            browserName = "Chrome";
            fullVersion = nAgt.substring(verOffset + 7);
        }
// In Safari, the true version is after "Safari" or after "Version"
        else if ((verOffset = nAgt.indexOf("Safari")) != -1) {
            browserName = "Safari";
            fullVersion = nAgt.substring(verOffset + 7);
            if ((verOffset = nAgt.indexOf("Version")) != -1)
                fullVersion = nAgt.substring(verOffset + 8);
        }
// In Firefox, the true version is after "Firefox"
        else if ((verOffset = nAgt.indexOf("Firefox")) != -1) {
            browserName = "Firefox";
            fullVersion = nAgt.substring(verOffset + 8);
        }
// In most other browsers, "name/version" is at the end of userAgent
        else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) <
            (verOffset = nAgt.lastIndexOf('/'))) {
            browserName = nAgt.substring(nameOffset, verOffset);
            fullVersion = nAgt.substring(verOffset + 1);
            if (browserName.toLowerCase() == browserName.toUpperCase()) {
                browserName = navigator.appName;
            }
        }
// trim the fullVersion string at semicolon/space if present
        if ((ix = fullVersion.indexOf(";")) != -1)
            fullVersion = fullVersion.substring(0, ix);
        if ((ix = fullVersion.indexOf(" ")) != -1)
            fullVersion = fullVersion.substring(0, ix);

        majorVersion = parseInt('' + fullVersion, 10);
        if (isNaN(majorVersion)) {
            fullVersion = '' + parseFloat(navigator.appVersion);
            majorVersion = parseInt(navigator.appVersion, 10);
        }
        return {
            'name': browserName,
            'fullversion': fullVersion,
            'majorversion': majorVersion,
            'appName': navigator.appName,
            'userAgent': navigator.userAgent
        };
    }
}
