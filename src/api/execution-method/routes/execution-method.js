'use strict';

/**
 * execution-method router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::execution-method.execution-method');
