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
    describe('AuthApiCheckResponce', function() {
      beforeEach(function() {
        instance = new Serviceserviceproto.AuthApiCheckResponce();
      });

      it('should create an instance of AuthApiCheckResponce', function() {
        // TODO: update the code to test AuthApiCheckResponce
        expect(instance).to.be.a(Serviceserviceproto.AuthApiCheckResponce);
      });

      it('should have the property userId (base name: "userId")', function() {
        // TODO: update the code to test the property userId
        expect(instance).to.have.property('userId');
        // expect(instance.userId).to.be(expectedValueLiteral);
      });

      it('should have the property userRolesIds (base name: "userRolesIds")', function() {
        // TODO: update the code to test the property userRolesIds
        expect(instance).to.have.property('userRolesIds');
        // expect(instance.userRolesIds).to.be(expectedValueLiteral);
      });

    });
  });

}));
