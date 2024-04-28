/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/Tracker.ts":
/*!******************************!*\
  !*** ./assets/js/Tracker.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tracker: () => (/* binding */ Tracker)
/* harmony export */ });
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
class Tracker {
    set token(value) {
        this._token = value;
    }
    trackPageLoad() {
        const data = {
            path: window.location.pathname
        };
        this.track('log/page-visited', data);
    }
    trackEvent(name, attributes = {}) {
        const data = {
            name,
            attributes
        };
        this.track('log/event', data);
    }
    track(url, data) {
        const user_id = this.getUserId();
        const token = this._token;
        const user_data = JSON.parse(localStorage.getItem('user_data')) || {};
        const generic_attributes = JSON.parse(localStorage.getItem('generic_attributes')) || {};
        const browser_data = this.getBrowserData();
        fetch(Tracker.HOST + url, {
            method: "POST",
            body: JSON.stringify({ user_id, data, user_data, browser_data, generic_attributes, token }),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        });
    }
    resetUserAttributes() {
        localStorage.removeItem('user_data');
    }
    resetAttributes() {
        localStorage.removeItem('generic_attributes');
    }
    addUserAttribute(key, value) {
        const userData = JSON.parse(localStorage.getItem('user_data')) || {};
        userData[key] = value;
        localStorage.setItem('user_data', JSON.stringify(userData));
    }
    addAttribute(key, value) {
        const attributes = JSON.parse(localStorage.getItem('generic_attributes')) || {};
        attributes[key] = value;
        localStorage.setItem('generic_attributes', JSON.stringify(attributes));
    }
    setUserId(user_id) {
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
    authenticate(token) {
        this.token = token;
    }
    getBrowserData() {
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
Tracker.HOST = "http://localhost/";


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./assets/js/index.ts ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tracker */ "./assets/js/Tracker.ts");

const tracker = new _Tracker__WEBPACK_IMPORTED_MODULE_0__.Tracker();
// must cast as any to set property on window
const _global = (window /* browser */ || __webpack_require__.g /* node */);
_global.pageLoad = tracker.trackPageLoad.bind(tracker); // bind `this` context
_global.trackEvent = tracker.trackEvent.bind(tracker); // bind `this` context
_global.setUserId = tracker.setUserId.bind(tracker); // bind `this` context
_global.addUserAttribute = tracker.addUserAttribute.bind(tracker); // bind `this` context
_global.addAttribute = tracker.addAttribute.bind(tracker); // bind `this` context
_global.authenticate = tracker.authenticate.bind(tracker); // bind `this` context

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUksNkNBQU8sRUFBRSxDQUFDO0FBQzlCLDZDQUE2QztBQUM3QyxNQUFNLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxhQUFhLElBQUkscUJBQU0sQ0FBQyxVQUFVLENBQVE7QUFDbEUsT0FBTyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLHNCQUFzQjtBQUM5RSxPQUFPLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsc0JBQXNCO0FBQzdFLE9BQU8sQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxzQkFBc0I7QUFDM0UsT0FBTyxDQUFDLGdCQUFnQixHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxzQkFBc0I7QUFDekYsT0FBTyxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLHNCQUFzQjtBQUNqRixPQUFPLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsc0JBQXNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9hc3NldHMvanMvVHJhY2tlci50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mcm9udGVuZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9mcm9udGVuZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9hc3NldHMvanMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gdXVpZHY0KCkge1xyXG4gICAgcmV0dXJuIFwiMTIzMTIzXCI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUZW1wbGF0ZSBOYW1lOiBOaWNlQWRtaW5cclxuICogVXBkYXRlZDogSmFuIDI5IDIwMjQgd2l0aCBCb290c3RyYXAgdjUuMy4yXHJcbiAqIFRlbXBsYXRlIFVSTDogaHR0cHM6Ly9ib290c3RyYXBtYWRlLmNvbS9uaWNlLWFkbWluLWJvb3RzdHJhcC1hZG1pbi1odG1sLXRlbXBsYXRlL1xyXG4gKiBBdXRob3I6IEJvb3RzdHJhcE1hZGUuY29tXHJcbiAqIExpY2Vuc2U6IGh0dHBzOi8vYm9vdHN0cmFwbWFkZS5jb20vbGljZW5zZS9cclxuICovXHJcblxyXG5leHBvcnQgY2xhc3MgVHJhY2tlciB7XHJcbiAgICBzZXQgdG9rZW4odmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3Rva2VuID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1c2VyX2lkOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIF90b2tlbjogc3RyaW5nO1xyXG4gICAgc3RhdGljIEhPU1QgPSBcImh0dHA6Ly9sb2NhbGhvc3QvXCI7XHJcblxyXG4gICAgcHVibGljIHRyYWNrUGFnZUxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICAgICAgcGF0aDogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnRyYWNrKCdsb2cvcGFnZS12aXNpdGVkJywgZGF0YSlcclxuICAgIH1cclxuXHJcbiAgICB0cmFja0V2ZW50KG5hbWU6IHN0cmluZywgYXR0cmlidXRlcyA9IHt9KSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgYXR0cmlidXRlc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy50cmFjaygnbG9nL2V2ZW50JywgZGF0YSlcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHRyYWNrKHVybDogc3RyaW5nLCBkYXRhOiBvYmplY3QpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCB1c2VyX2lkID0gdGhpcy5nZXRVc2VySWQoKTtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IHRoaXMuX3Rva2VuO1xyXG4gICAgICAgIGNvbnN0IHVzZXJfZGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJfZGF0YScpKSB8fCB7fTtcclxuICAgICAgICBjb25zdCBnZW5lcmljX2F0dHJpYnV0ZXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdnZW5lcmljX2F0dHJpYnV0ZXMnKSkgfHwge307XHJcbiAgICAgICAgY29uc3QgYnJvd3Nlcl9kYXRhID0gdGhpcy5nZXRCcm93c2VyRGF0YSgpO1xyXG4gICAgICAgIGZldGNoKFRyYWNrZXIuSE9TVCArIHVybCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7dXNlcl9pZCwgZGF0YSwgdXNlcl9kYXRhLCBicm93c2VyX2RhdGEsIGdlbmVyaWNfYXR0cmlidXRlcywgdG9rZW59KSxcclxuICAgICAgICAgICAgaGVhZGVyczoge1wiQ29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOFwifVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0VXNlckF0dHJpYnV0ZXMoKSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXJfZGF0YScpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0QXR0cmlidXRlcygpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnZ2VuZXJpY19hdHRyaWJ1dGVzJyk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkVXNlckF0dHJpYnV0ZShrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IHVzZXJEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcl9kYXRhJykpIHx8IHt9O1xyXG4gICAgICAgIHVzZXJEYXRhW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcl9kYXRhJywgSlNPTi5zdHJpbmdpZnkodXNlckRhdGEpKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRBdHRyaWJ1dGUoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCBhdHRyaWJ1dGVzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ2VuZXJpY19hdHRyaWJ1dGVzJykpIHx8IHt9O1xyXG4gICAgICAgIGF0dHJpYnV0ZXNba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdnZW5lcmljX2F0dHJpYnV0ZXMnLCBKU09OLnN0cmluZ2lmeShhdHRyaWJ1dGVzKSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHNldFVzZXJJZCh1c2VyX2lkOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnVzZXJfaWQgPSB1c2VyX2lkO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyX2lkJywgdXNlcl9pZCk7XHJcbiAgICAgICAgdGhpcy5yZXNldFVzZXJBdHRyaWJ1dGVzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VXNlcklkKCkge1xyXG4gICAgICAgIGlmICghdGhpcy51c2VyX2lkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VXNlcklkKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyX2lkJykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMudXNlcl9pZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFVzZXJJZCh1dWlkdjQoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLnVzZXJfaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgYXV0aGVudGljYXRlKHRva2VuOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnRva2VuID0gdG9rZW47XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRCcm93c2VyRGF0YSgpIHtcclxuICAgICAgICBjb25zdCBuVmVyID0gbmF2aWdhdG9yLmFwcFZlcnNpb247XHJcbiAgICAgICAgY29uc3QgbkFndCA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XHJcbiAgICAgICAgbGV0IGJyb3dzZXJOYW1lID0gbmF2aWdhdG9yLmFwcE5hbWU7XHJcbiAgICAgICAgbGV0IGZ1bGxWZXJzaW9uID0gJycgKyBwYXJzZUZsb2F0KG5hdmlnYXRvci5hcHBWZXJzaW9uKTtcclxuICAgICAgICBsZXQgbWFqb3JWZXJzaW9uID0gcGFyc2VJbnQobmF2aWdhdG9yLmFwcFZlcnNpb24sIDEwKTtcclxuICAgICAgICBsZXQgbmFtZU9mZnNldCwgdmVyT2Zmc2V0LCBpeDtcclxuXHJcbi8vIEluIE9wZXJhLCB0aGUgdHJ1ZSB2ZXJzaW9uIGlzIGFmdGVyIFwiT1BSXCIgb3IgYWZ0ZXIgXCJWZXJzaW9uXCJcclxuICAgICAgICBpZiAoKHZlck9mZnNldCA9IG5BZ3QuaW5kZXhPZihcIk9QUlwiKSkgIT0gLTEpIHtcclxuICAgICAgICAgICAgYnJvd3Nlck5hbWUgPSBcIk9wZXJhXCI7XHJcbiAgICAgICAgICAgIGZ1bGxWZXJzaW9uID0gbkFndC5zdWJzdHJpbmcodmVyT2Zmc2V0ICsgNCk7XHJcbiAgICAgICAgICAgIGlmICgodmVyT2Zmc2V0ID0gbkFndC5pbmRleE9mKFwiVmVyc2lvblwiKSkgIT0gLTEpXHJcbiAgICAgICAgICAgICAgICBmdWxsVmVyc2lvbiA9IG5BZ3Quc3Vic3RyaW5nKHZlck9mZnNldCArIDgpO1xyXG4gICAgICAgIH1cclxuLy8gSW4gTVMgRWRnZSwgdGhlIHRydWUgdmVyc2lvbiBpcyBhZnRlciBcIkVkZ1wiIGluIHVzZXJBZ2VudFxyXG4gICAgICAgIGVsc2UgaWYgKCh2ZXJPZmZzZXQgPSBuQWd0LmluZGV4T2YoXCJFZGdcIikpICE9IC0xKSB7XHJcbiAgICAgICAgICAgIGJyb3dzZXJOYW1lID0gXCJNaWNyb3NvZnQgRWRnZVwiO1xyXG4gICAgICAgICAgICBmdWxsVmVyc2lvbiA9IG5BZ3Quc3Vic3RyaW5nKHZlck9mZnNldCArIDQpO1xyXG4gICAgICAgIH1cclxuLy8gSW4gTVNJRSwgdGhlIHRydWUgdmVyc2lvbiBpcyBhZnRlciBcIk1TSUVcIiBpbiB1c2VyQWdlbnRcclxuICAgICAgICBlbHNlIGlmICgodmVyT2Zmc2V0ID0gbkFndC5pbmRleE9mKFwiTVNJRVwiKSkgIT0gLTEpIHtcclxuICAgICAgICAgICAgYnJvd3Nlck5hbWUgPSBcIk1pY3Jvc29mdCBJbnRlcm5ldCBFeHBsb3JlclwiO1xyXG4gICAgICAgICAgICBmdWxsVmVyc2lvbiA9IG5BZ3Quc3Vic3RyaW5nKHZlck9mZnNldCArIDUpO1xyXG4gICAgICAgIH1cclxuLy8gSW4gQ2hyb21lLCB0aGUgdHJ1ZSB2ZXJzaW9uIGlzIGFmdGVyIFwiQ2hyb21lXCJcclxuICAgICAgICBlbHNlIGlmICgodmVyT2Zmc2V0ID0gbkFndC5pbmRleE9mKFwiQ2hyb21lXCIpKSAhPSAtMSkge1xyXG4gICAgICAgICAgICBicm93c2VyTmFtZSA9IFwiQ2hyb21lXCI7XHJcbiAgICAgICAgICAgIGZ1bGxWZXJzaW9uID0gbkFndC5zdWJzdHJpbmcodmVyT2Zmc2V0ICsgNyk7XHJcbiAgICAgICAgfVxyXG4vLyBJbiBTYWZhcmksIHRoZSB0cnVlIHZlcnNpb24gaXMgYWZ0ZXIgXCJTYWZhcmlcIiBvciBhZnRlciBcIlZlcnNpb25cIlxyXG4gICAgICAgIGVsc2UgaWYgKCh2ZXJPZmZzZXQgPSBuQWd0LmluZGV4T2YoXCJTYWZhcmlcIikpICE9IC0xKSB7XHJcbiAgICAgICAgICAgIGJyb3dzZXJOYW1lID0gXCJTYWZhcmlcIjtcclxuICAgICAgICAgICAgZnVsbFZlcnNpb24gPSBuQWd0LnN1YnN0cmluZyh2ZXJPZmZzZXQgKyA3KTtcclxuICAgICAgICAgICAgaWYgKCh2ZXJPZmZzZXQgPSBuQWd0LmluZGV4T2YoXCJWZXJzaW9uXCIpKSAhPSAtMSlcclxuICAgICAgICAgICAgICAgIGZ1bGxWZXJzaW9uID0gbkFndC5zdWJzdHJpbmcodmVyT2Zmc2V0ICsgOCk7XHJcbiAgICAgICAgfVxyXG4vLyBJbiBGaXJlZm94LCB0aGUgdHJ1ZSB2ZXJzaW9uIGlzIGFmdGVyIFwiRmlyZWZveFwiXHJcbiAgICAgICAgZWxzZSBpZiAoKHZlck9mZnNldCA9IG5BZ3QuaW5kZXhPZihcIkZpcmVmb3hcIikpICE9IC0xKSB7XHJcbiAgICAgICAgICAgIGJyb3dzZXJOYW1lID0gXCJGaXJlZm94XCI7XHJcbiAgICAgICAgICAgIGZ1bGxWZXJzaW9uID0gbkFndC5zdWJzdHJpbmcodmVyT2Zmc2V0ICsgOCk7XHJcbiAgICAgICAgfVxyXG4vLyBJbiBtb3N0IG90aGVyIGJyb3dzZXJzLCBcIm5hbWUvdmVyc2lvblwiIGlzIGF0IHRoZSBlbmQgb2YgdXNlckFnZW50XHJcbiAgICAgICAgZWxzZSBpZiAoKG5hbWVPZmZzZXQgPSBuQWd0Lmxhc3RJbmRleE9mKCcgJykgKyAxKSA8XHJcbiAgICAgICAgICAgICh2ZXJPZmZzZXQgPSBuQWd0Lmxhc3RJbmRleE9mKCcvJykpKSB7XHJcbiAgICAgICAgICAgIGJyb3dzZXJOYW1lID0gbkFndC5zdWJzdHJpbmcobmFtZU9mZnNldCwgdmVyT2Zmc2V0KTtcclxuICAgICAgICAgICAgZnVsbFZlcnNpb24gPSBuQWd0LnN1YnN0cmluZyh2ZXJPZmZzZXQgKyAxKTtcclxuICAgICAgICAgICAgaWYgKGJyb3dzZXJOYW1lLnRvTG93ZXJDYXNlKCkgPT0gYnJvd3Nlck5hbWUudG9VcHBlckNhc2UoKSkge1xyXG4gICAgICAgICAgICAgICAgYnJvd3Nlck5hbWUgPSBuYXZpZ2F0b3IuYXBwTmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuLy8gdHJpbSB0aGUgZnVsbFZlcnNpb24gc3RyaW5nIGF0IHNlbWljb2xvbi9zcGFjZSBpZiBwcmVzZW50XHJcbiAgICAgICAgaWYgKChpeCA9IGZ1bGxWZXJzaW9uLmluZGV4T2YoXCI7XCIpKSAhPSAtMSlcclxuICAgICAgICAgICAgZnVsbFZlcnNpb24gPSBmdWxsVmVyc2lvbi5zdWJzdHJpbmcoMCwgaXgpO1xyXG4gICAgICAgIGlmICgoaXggPSBmdWxsVmVyc2lvbi5pbmRleE9mKFwiIFwiKSkgIT0gLTEpXHJcbiAgICAgICAgICAgIGZ1bGxWZXJzaW9uID0gZnVsbFZlcnNpb24uc3Vic3RyaW5nKDAsIGl4KTtcclxuXHJcbiAgICAgICAgbWFqb3JWZXJzaW9uID0gcGFyc2VJbnQoJycgKyBmdWxsVmVyc2lvbiwgMTApO1xyXG4gICAgICAgIGlmIChpc05hTihtYWpvclZlcnNpb24pKSB7XHJcbiAgICAgICAgICAgIGZ1bGxWZXJzaW9uID0gJycgKyBwYXJzZUZsb2F0KG5hdmlnYXRvci5hcHBWZXJzaW9uKTtcclxuICAgICAgICAgICAgbWFqb3JWZXJzaW9uID0gcGFyc2VJbnQobmF2aWdhdG9yLmFwcFZlcnNpb24sIDEwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgJ25hbWUnOiBicm93c2VyTmFtZSxcclxuICAgICAgICAgICAgJ2Z1bGx2ZXJzaW9uJzogZnVsbFZlcnNpb24sXHJcbiAgICAgICAgICAgICdtYWpvcnZlcnNpb24nOiBtYWpvclZlcnNpb24sXHJcbiAgICAgICAgICAgICdhcHBOYW1lJzogbmF2aWdhdG9yLmFwcE5hbWUsXHJcbiAgICAgICAgICAgICd1c2VyQWdlbnQnOiBuYXZpZ2F0b3IudXNlckFnZW50XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtUcmFja2VyfSBmcm9tIFwiLi9UcmFja2VyXCI7XHJcbmNvbnN0IHRyYWNrZXIgPSBuZXcgVHJhY2tlcigpO1xyXG4vLyBtdXN0IGNhc3QgYXMgYW55IHRvIHNldCBwcm9wZXJ0eSBvbiB3aW5kb3dcclxuY29uc3QgX2dsb2JhbCA9ICh3aW5kb3cgLyogYnJvd3NlciAqLyB8fCBnbG9iYWwgLyogbm9kZSAqLykgYXMgYW55XHJcbl9nbG9iYWwucGFnZUxvYWQgPSB0cmFja2VyLnRyYWNrUGFnZUxvYWQuYmluZCh0cmFja2VyKTsgLy8gYmluZCBgdGhpc2AgY29udGV4dFxyXG5fZ2xvYmFsLnRyYWNrRXZlbnQgPSB0cmFja2VyLnRyYWNrRXZlbnQuYmluZCh0cmFja2VyKTsgLy8gYmluZCBgdGhpc2AgY29udGV4dFxyXG5fZ2xvYmFsLnNldFVzZXJJZCA9IHRyYWNrZXIuc2V0VXNlcklkLmJpbmQodHJhY2tlcik7IC8vIGJpbmQgYHRoaXNgIGNvbnRleHRcclxuX2dsb2JhbC5hZGRVc2VyQXR0cmlidXRlID0gdHJhY2tlci5hZGRVc2VyQXR0cmlidXRlLmJpbmQodHJhY2tlcik7IC8vIGJpbmQgYHRoaXNgIGNvbnRleHRcclxuX2dsb2JhbC5hZGRBdHRyaWJ1dGUgPSB0cmFja2VyLmFkZEF0dHJpYnV0ZS5iaW5kKHRyYWNrZXIpOyAvLyBiaW5kIGB0aGlzYCBjb250ZXh0XHJcbl9nbG9iYWwuYXV0aGVudGljYXRlID0gdHJhY2tlci5hdXRoZW50aWNhdGUuYmluZCh0cmFja2VyKTsgLy8gYmluZCBgdGhpc2AgY29udGV4dFxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9