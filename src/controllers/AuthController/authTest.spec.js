import "@babel/polyfill";

import app from '../../';
import chai from 'chai';
import chaiHttp from 'chai-http';

import AuthController from './';
import { db } from '../../db';
import { User } from '../../db';

const AuthCtlrIns = new AuthController();

const should = chai.should();
const assert = chai.assert;
chai.use(chaiHttp);

describe('User', function() {
  beforeEach(function(done) {
    User.remove({}, function() {
      done();
    });
  });

  describe('/POST user', function() {
    it('It should POST an user that return an object users', function(done) {
      let user = {
        userName: 'Thái dối',
        email: 'thaidoi@gmail.com',
        password: '123456',
      }

      chai
        .request(app)
        .post('/auth/register')
      .send(user)
        .end(function(err, res) {
          if (err) return done(err);

          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('userName');
          res.body.should.have.property('email');
          res.body.should.have.property('password');
          done();
        });
    });
  });

  describe('/GET user', function() {
    it('It should GET all the users', function(done) {
      chai
        .request(app)
        .get('/auth/list-users')
      .end(function(err, res) {
        if (err) return done(err);

        // console.log(res.body);
        res.should.have.status(200);
        res.body.should.be.a('array');
        done();
      })
    });
  });
});
