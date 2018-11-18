import "@babel/polyfill";

import app from '../../';
import chai from 'chai';
import chaiHttp from 'chai-http';

import AuthController from './';
import { User } from '../../db';

const AuthCtlrIns = new AuthController();

const should = chai.should();
const assert = chai.assert;
chai.use(chaiHttp);

describe('User', function() {
  // beforeEach(function(done) {
  //   User.remove({}, function() {
  //     done();
  //   });
  // });

  describe('/GET user', function() {
    it('It should GET all the users', function(done) {
      chai
        .request(app)
        .get('/auth/list-users')
        .end(function(err, res) {
          console.log(res.body);
          res.should.have.status(200);
          res.body.should.be.a('array');
          done();
        })
    });
  });
});
