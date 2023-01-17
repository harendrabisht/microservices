const request = require('supertest');
const chai = require("chai");
const expect = chai.expect;
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

const rewire = require('rewire');
const healthController = require('../controllers/health.controller');

let app = rewire('../app');

describe('Health Routes', () => {
    beforeEach(() => {
        sinon.stub(healthController, 'checkHealth').returns('OK');
    });
    afterEach(() => {
        app = rewire('../app');
        sinon.restore();
    });

    it('GET /health, should succeed', (done) => {
        request(app).get('/health')
        .expect(200)
        .end((err, result)=>{
            expect(result.body).to.equal('OK');
            done(err);
        });
    });
});