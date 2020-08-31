const request = require('supertest');
const expect = require('expect')

const app = require('../server');

describe('docker-web-app', () => {

    describe('#GET /', () => {
        it('Should return Hello World response', (done) => {
            request(app)
                .get('/')
                .expect(200)    // Status
                .expect('Hello World')
                .end(done);
        })
    })
})
