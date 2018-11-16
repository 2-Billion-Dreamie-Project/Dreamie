process.env.NODE_ENV = 'test';

import AuthController from './';
import UserModel from '../../models/UserModel';
import chai from 'chai';

import chaiHttp from 'chai-http';

const AuthCtlrIns = new AuthController(new UserModel);

const should = chai.should;
const assert = chai.assert;
chai.use(chaiHttp);

describe('AuthController', function() {
  it('register() should return test', function() {
    assert.equal(AuthCtlrIns.test(), 'test');
  });
});
