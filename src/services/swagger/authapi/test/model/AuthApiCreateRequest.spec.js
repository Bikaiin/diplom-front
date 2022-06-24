/*
 * service/service.proto
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: version not set
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.28-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Serviceserviceproto);
  }
}(this, function(expect, Serviceserviceproto) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('AuthApiCreateRequest', function() {
      beforeEach(function() {
        instance = new Serviceserviceproto.AuthApiCreateRequest();
      });

      it('should create an instance of AuthApiCreateRequest', function() {
        // TODO: update the code to test AuthApiCreateRequest
        expect(instance).to.be.a(Serviceserviceproto.AuthApiCreateRequest);
      });

      it('should have the property login (base name: "login")', function() {
        // TODO: update the code to test the property login
        expect(instance).to.have.property('login');
        // expect(instance.login).to.be(expectedValueLiteral);
      });

      it('should have the property password (base name: "password")', function() {
        // TODO: update the code to test the property password
        expect(instance).to.have.property('password');
        // expect(instance.password).to.be(expectedValueLiteral);
      });

      it('should have the property roleIds (base name: "roleIds")', function() {
        // TODO: update the code to test the property roleIds
        expect(instance).to.have.property('roleIds');
        // expect(instance.roleIds).to.be(expectedValueLiteral);
      });

    });
  });

}));