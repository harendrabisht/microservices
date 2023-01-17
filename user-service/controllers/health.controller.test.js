const chai = require('chai');
const expect = chai.expect;
const { checkHealth } = require('./health.controller')

describe('check health', () => {
    it('healt check should be OK', () => {
        const result = checkHealth();
        expect(result).to.equal('OK')
    });
});