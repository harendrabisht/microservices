const request = require('supertest');
const chai = require("chai");

const expect = chai.expect;
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const profileMockData = require('../mock-data/profile.json');

chai.use(sinonChai);

const rewire = require('rewire');
const profileController = require('../controllers/profile.controller');
const sandbox = sinon.createSandbox();

let app = rewire('../app');

describe('Profile Routes', () => {
    beforeEach(() => {
        sinon.stub(profileController, 'getUserById').resolves(profileMockData);
    });
    afterEach(() => {
        app = rewire('../app');
        sinon.restore();
    });

    it('GET /personal-info/:userId, should succeed', (done) => {
        request(app).get('/profile/personal-info/214214')
        .expect(200)
        .end((err, result)=>{
            expect(result.body.toString()).to.equal(profileMockData.toString());
            expect(result.body).to.have.property('name').to.equal(profileMockData.name);
            done(err)
        })
    });
});