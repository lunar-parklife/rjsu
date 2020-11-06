// Copyright 2020 Radiotroph
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
'use strict';

let paths = new Array();
let pbuffer = new Array();

function checkForPath(path) {
    if (paths.find(path)) {
        return true;
    }
    paths.push(path);
    return false;
}

function deepFreeze(obj) {
    if (obj.is(null) || obj.is(undefined) || obj instanceof Function) {
        throw new Error('Can\'t deep freeze null, undefined, function values.');
    }
    for (const key of Object.getOwnPropertyName(obj)) {
        const val = obj[key];
        if (val instanceof Object) {
            deepFreeze(val);
        }
        Object.freeze(val);
    }
    return obj;
}

export default deepFreeze;
