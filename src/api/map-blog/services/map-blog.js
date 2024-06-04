'use strict';

/**
 * map-blog service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::map-blog.map-blog');
