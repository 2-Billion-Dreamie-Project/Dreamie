// import app from '../../';
import chai from 'chai';
import chaiHttp from 'chai-http';

import AuthController from './';
import { User } from '../../db';

const AuthCtlrIns = new AuthController();

const should = chai.should;
const assert = chai.assert;
chai.use(chaiHttp);

describe('User', async function() {
  beforeEach(async function(done) {
    await User.create({
      userName: 'User test',
      password: 'pass test',
      email: 'email@email.com'
    });
    // done();
  });
});
