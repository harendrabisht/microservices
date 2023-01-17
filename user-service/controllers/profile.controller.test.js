const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);

const mongoose = require('mongoose');
const rewire = require('rewire');
const PersonalInfo = require('../model/personal-info');
const sandbox = sinon.createSandbox();

let profileController = rewire('./profile.controller');
// jest.setTimeout(30000);

describe('Profile Controller', () => {
    // this.timeout(15000);
    let mockPersonalInfo=null;
    let findOneStub;

    beforeEach(() => {
        mockPersonalInfo = {
            userId: '123XYZ',
            firstName: 'Harendra',
            lastName: 'Bisht',
            mobileNumber: '999999999',
            email: 'it@test.com',
            shippingAddress: [],
            billingAddress: [],
        };

        sinon.stub(PersonalInfo, 'findOne').returns({
            populate: sinon.stub().returns({
                populate: sinon.stub().returns({
                    exec: sinon.stub().resolves(mockPersonalInfo)
                }),
            }),
          });
    });

    afterEach(() => {
        profileController = rewire('./profile.controller');
        sinon.restore();
    });

    it('getUserById should be defined', () => {
        expect(typeof profileController.getUserById).to.equal('function')
    });

    it('should return error if userId is missing', async () => {
        try {
            await profileController.getUserById()
        } catch(error) {
            expect(error.message).to.equal('User Id is not defined');
        }
    });

    it('should return users personal info', () => {
        profileController.getUserById('123XYZ')
        .then((result) => {
            // expect(findOneStub).to.have.been.calledOnce;
            expect(result).to.equal(mockPersonalInfo);
        })
        .catch((error) => {
            // throw new Error('unexpected error occurs!');
        });
    });

    it('should return 404 status code, in no user found', async() => {
        sinon.restore();
        sinon.stub(PersonalInfo, 'findOne').returns({
            populate: sinon.stub().returns({
                populate: sinon.stub().returns({
                    exec: sinon.stub().resolves(null)
                }),
            }),
          });
        try {
            await profileController.getUserById('224234');

        } catch(error) {
            expect(error.statusCode).to.equal(404);
        }
    });
 });
