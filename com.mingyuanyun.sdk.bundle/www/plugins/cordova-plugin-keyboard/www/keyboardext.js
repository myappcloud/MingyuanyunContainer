cordova.define("cordova-plugin-keyboard.keyboardext", function(require, exports, module) {
/*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

var argscheck = require('cordova/argscheck'),
    utils = require('cordova/utils'),
    exec = require('cordova/exec');
   
var KeyboardExt = function() {
};

KeyboardExt.shrinkView = function(shrink, success) {
    if (shrink !== null && shrink !== undefined) {
        exec(success, null, "KeyboardExt", "shrinkView", [shrink]);
    } else {
        exec(success, null, "KeyboardExt", "shrinkView", []);
    }
};

KeyboardExt.hideFormAccessoryBar = function(hide, success) {
    if (hide !== null && hide !== undefined){
        exec(success, null, "KeyboardExt", "hideFormAccessoryBar", [hide]);
    } else {
        exec(success, null, "KeyboardExt", "hideFormAccessoryBar", []);
    }
};

KeyboardExt.disableScrollingInShrinkView = function(disable, success) {
    if (disable !== null && disable !== undefined) {
        exec(success, null, "KeyboardExt", "disableScrollingInShrinkView", [disable]);
    } else {
        exec(success, null, "KeyboardExt", "disableScrollingInShrinkView", []);
    }
};

KeyboardExt.fireOnShow = function() {
    KeyboardExt.isVisible = true;
    cordova.fireWindowEvent('keyboardDidShow');

    if(KeyboardExt.onshow) {
	KeyboardExt.onshow();
    }
};

KeyboardExt.fireOnHide = function() {
    KeyboardExt.isVisible = false;
    cordova.fireWindowEvent('keyboardDidHide');

    if(KeyboardExt.onhide) {
	KeyboardExt.onhide();
    }
};

KeyboardExt.fireOnHiding = function() {
    // Automatic scroll to the top of the page
    // to prevent quirks when using position:fixed elements
    // inside WebKit browsers (iOS specifically).
    // See CB-6444 for context.
    if (KeyboardExt.automaticScrollToTopOnHiding) {
        document.body.scrollLeft = 0;
    }

    cordova.fireWindowEvent('keyboardWillHide');

    if(KeyboardExt.onhiding) {
	KeyboardExt.onhiding();
    }
};

KeyboardExt.fireOnShowing = function() {
    cordova.fireWindowEvent('keyboardWillShow');

    if(KeyboardExt.onshowing) {
	KeyboardExt.onshowing();
    }
};

KeyboardExt.show = function() {
    exec(null, null, "KeyboardExt", "show", []);
};

KeyboardExt.hide = function() {
    exec(null, null, "KeyboardExt", "hide", []);
};

KeyboardExt.isVisible = false;
KeyboardExt.automaticScrollToTopOnHiding = false;

module.exports = KeyboardExt;

});
