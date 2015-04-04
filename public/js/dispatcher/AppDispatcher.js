define(["exports", "components/flux/dist/Flux"], function (exports, _componentsFluxDistFlux) {
  "use strict";

  var Dispatcher = _componentsFluxDistFlux.Dispatcher;
  var AppDispatcher = exports.AppDispatcher = new Dispatcher();
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
});