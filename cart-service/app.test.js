const request = require('supertest');
const app = require('./app');


describe('Get Request /', () => { 
    test('should send cart data if cart ID is valid', () => {

    });

    test('should send 404 if cart ID is invalid', () => {

    });

    test('should send 401 if user is not valid for cart ID', () => {

    });

    test('should send 500, internal server error if server error occurs', () => {

    });

    test('should send 400 error is cart is already submitted or completed', () => {

    });
});

describe('Create Cart Method POST /', () => {
    test('should create new cart, if not exist', () => {

    });

    test('should return existing cart, ir already created', () => {

    });

    test('should return anonymous cart, if user not logged-in', () => {

    });

    test('should return 400, if payload is not valid', () => {

    });
});

describe('Update cart, /:cartId', () => {
    test('should add product in the cart, if product is valid', () => {

    });

    test('should return 400, if product does not exists', () => {

    });

    test('should return 404, if cart does not exists', () => {

    });

    test('should return 401, if user and cart does not match', () => {

    });

    test('should add coupon, if coupon is valid', () => {

    });

    test('should return error, if invalid coupon code', () => {

    });

    test('should return 400, if shipping address is out of delivery network', () => { 

    });
});
