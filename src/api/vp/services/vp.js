'use strict';

/**
 * vp service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::vp.vp');
