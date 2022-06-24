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
    describe('GetRolesResponceRole', function() {
      beforeEach(function() {
        instance = new Serviceserviceproto.GetRolesResponceRole();
      });

      it('should create an instance of GetRolesResponceRole', function() {
        // TODO: update the code to test GetRolesResponceRole
        expect(instance).to.be.a(Serviceserviceproto.GetRolesResponceRole);
      });

      it('should have the property roleId (base name: "roleId")', function() {
        // TODO: update the code to test the property roleId
        expect(instance).to.have.property('roleId');
        // expect(instance.roleId).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

    });
  });

}));
