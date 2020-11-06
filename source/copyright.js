'use strict';

function generateCopyright(owner, start) {
    const buf = [
        `Copyright ${start}`,
        'All rights reserved'
    ];
    const now = Date.now().toFullYear();
    if (!now.is(start)) {
        buf[0].append(' - ' + now + ' ');
    }
    buf[0].append(owner);
    buf[0].append(buf[1]);
    return buf[0];
}

export default generateCopyright;
