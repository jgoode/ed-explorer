"use strict";

/**
 * Blueprint API Configuration
 * (sails.config.blueprints)
 *
 * These settings are for the global configuration of blueprint routes and
 * request options (which impact the behavior of blueprint actions).
 *
 * You may also override any of these settings on a per-controller basis
 * by defining a '_config' key in your controller definition, and assigning it
 * a configuration object with overrides for the settings in this file.
 * A lot of the configuration options below affect so-called "CRUD methods",
 * or your controllers' `find`, `create`, `update`, and `destroy` actions.
 *
 * It's important to realize that, even if you haven't defined these yourself, as long as
 * a model exists with the same name as the controller, Sails will respond with built-in CRUD
 * logic in the form of a JSON API, including support for sort, pagination, and filtering.
 *
 * For more information on the blueprint API, check out:
 * http://sailsjs.org/#!/documentation/reference/blueprint-api
 *
 * For more information on the settings in this file, see:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.blueprints.html
 *
 */

module.exports.blueprints = {

  /***************************************************************************
  *                                                                          *
  * Action routes speed up the backend development workflow by               *
  * eliminating the need to manually bind routes. When enabled, GET, POST,   *
  * PUT, and DELETE routes will be generated for every one of a controller's *
  * actions.                                                                 *
  *                                                                          *
  * If an `index` action exists, additional naked routes will be created for *
  * it. Finally, all `actions` blueprints support an optional path           *
  * parameter, `id`, for convenience.                                        *
  *                                                                          *
  * `actions` are enabled by default, and can be OK for production--         *
  * however, if you'd like to continue to use controller/action autorouting  *
  * in a production deployment, you must take great care not to              *
  * inadvertently expose unsafe/unintentional controller logic to GET        *
  * requests.                                                                *
  *                                                                          *
  ***************************************************************************/

  actions: true,

  /***************************************************************************
  *                                                                          *
  * RESTful routes (`sails.config.blueprints.rest`)                          *
  *                                                                          *
  * REST blueprints are the automatically generated routes Sails uses to     *
  * expose a conventional REST API on top of a controller's `find`,          *
  * `create`, `update`, and `destroy` actions.                               *
  *                                                                          *
  * For example, a BoatController with `rest` enabled generates the          *
  * following routes:                                                        *
  * :::::::::::::::::::::::::::::::::::::::::::::::::::::::                  *
  *  GET /boat -> BoatController.find                                        *
  *  GET /boat/:id -> BoatController.findOne                                 *
  *  POST /boat -> BoatController.create                                     *
  *  PUT /boat/:id -> BoatController.update                                  *
  *  DELETE /boat/:id -> BoatController.destroy                              *
  *                                                                          *
  * `rest` blueprint routes are enabled by default, and are suitable for use *
  * in a production scenario, as long you take standard security precautions *
  * (combine w/ policies, etc.)                                              *
  *                                                                          *
  ***************************************************************************/

  rest: true

};
//# sourceMappingURL=blueprints.js.map