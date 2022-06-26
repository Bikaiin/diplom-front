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

  beforeEach(function() {
    instance = new Serviceserviceproto.AuthServiceApi();
  });

  describe('(package)', function() {
    describe('AuthServiceApi', function() {
      describe('authServiceAuth', function() {
        it('should call authServiceAuth successfully', function(done) {
          // TODO: uncomment, update parameter values for authServiceAuth call and complete the assertions
          /*
          var body = new Serviceserviceproto.AuthApiAuthRequest();
          body.login = "";
          body.password = "";

          instance.authServiceAuth(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Serviceserviceproto.AuthApiAuthResponce);
            expect(data.token).to.be.a('string');
            expect(data.token).to.be("");
            expect(data.refreshToken).to.be.a('string');
            expect(data.refreshToken).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('authServiceCheck', function() {
        it('should call authServiceCheck successfully', function(done) {
          // TODO: uncomment, update parameter values for authServiceCheck call and complete the assertions
          /*
          var opts = {};
          opts.token = "token_example";

          instance.authServiceCheck(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Serviceserviceproto.AuthApiCheckResponce);
            expect(data.userId).to.be.a('string');
            expect(data.userId).to.be("");
            {
              let dataCtr = data.userRolesIds;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                expect(data).to.be("");
              }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('authServiceCreate', function() {
        it('should call authServiceCreate successfully', function(done) {
          // TODO: uncomment, update parameter values for authServiceCreate call and complete the assertions
          /*
          var body = new Serviceserviceproto.AuthApiCreateRequest();
          body.login = "";
          body.password = "";
          body.roleIds = [""];

          instance.authServiceCreate(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Serviceserviceproto.AuthApiCreateResponce);
            expect(data.userId).to.be.a('number');
            expect(data.userId).to.be(0);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('authServiceGetRoles', function() {
        it('should call authServiceGetRoles successfully', function(done) {
          // TODO: uncomment authServiceGetRoles call and complete the assertions
          /*

          instance.authServiceGetRoles(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Serviceserviceproto.AuthApiGetRolesResponce);
            {
              let dataCtr = data.roles;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(Serviceserviceproto.GetRolesResponceRole);
                expect(data.roleId).to.be.a('number');
                expect(data.roleId).to.be(0);
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("");

                      }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('authServiceGetUsers', function() {
        it('should call authServiceGetUsers successfully', function(done) {
          // TODO: uncomment authServiceGetUsers call and complete the assertions
          /*

          instance.authServiceGetUsers(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Serviceserviceproto.AuthApiGetUsersResponce);
            {
              let dataCtr = data.users;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(Serviceserviceproto.GetUsersResponceUser);
                expect(data.id).to.be.a('string');
                expect(data.id).to.be("");
                expect(data.login).to.be.a('string');
                expect(data.login).to.be("");
                expect(data.password).to.be.a('string');
                expect(data.password).to.be("");
                {
                  let dataCtr = data.roleIds;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a('string');
                    expect(data).to.be("");
                  }
                }

                      }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('authServiceRefresh', function() {
        it('should call authServiceRefresh successfully', function(done) {
          // TODO: uncomment, update parameter values for authServiceRefresh call and complete the assertions
          /*
          var body = new Serviceserviceproto.AuthApiRefreshRequest();
          body.refreshToken = "";

          instance.authServiceRefresh(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Serviceserviceproto.AuthApiAuthResponce);
            expect(data.token).to.be.a('string');
            expect(data.token).to.be("");
            expect(data.refreshToken).to.be.a('string');
            expect(data.refreshToken).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('authServiceUpdateUser', function() {
        it('should call authServiceUpdateUser successfully', function(done) {
          // TODO: uncomment, update parameter values for authServiceUpdateUser call and complete the assertions
          /*
          var body = new Serviceserviceproto.AuthApiUpdateUserRequest();
          body.id = "";
          body.login = "";
          body.password = "";
          body.roleIds = [""];

          instance.authServiceUpdateUser(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Serviceserviceproto.AuthApiUpdateUserResponce);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));