import React from "react";

const Constants = () => {

    const domain = 'http://bcwp.hltv.test';

    return {
        domain: domain,
        restAPI : `${domain}/wp-json/wp/v2`,
        pluginAPI: `${domain}/wp-json/rsfr-rendpoint/v1`
    };



}

export default Constants;