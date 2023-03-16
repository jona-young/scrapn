var assert = require('assert')
var chai = require('chai')
var chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('Backend API CRUD Testing: Court Bookings', function() {
    path = 'http://localhost:4000'
    testID = ""

    it('should create a court booking', function(done) {
        chai.request(path)
            .post('/api/court-booking')
            .send({
                court: 1,
                date: "2023-03-14",
                time: "10:00 PM",
                players: [
                    'Jonathan Young',
                    'Miguel Dos Santos',
                    'Maria Dos Santos',
                    'Duane Duhwaneh'
                ],
                author: "Jonathan Young",
            })
            .end((err, res) => {
                assert.equal(res.status, 200);
                done();
            })
        })


    it('should return court bookings on dateParam', function(done) {
        dateParam = "2023-03-14" // requires assigning date
        chai.request(path) // the top level web address
            .get('/api/court-bookings/' + dateParam) // api path with date
            .end((err, res) => { // when the request returns
                testID = res.body[res.body.length - 1]._id
                assert.equal(res.status, 200);
                done();
            })
    })

    it('should set testID', function (done) {
        this.timeout(3000);
        setTimeout(done, 2000);
        console.log('Verify testID: ', testID);
    });


    it('should return individual data off testID', function(done) {
        chai.request(path)
            .get('/api/court-booking/' + testID)
            .end((err, res) => {
                assert.equal(res.body.court, 1);
                done();
            })
        })

    it('should update individual data off testID', function(done) {
        chai.request(path)
            .put('/api/court-booking/' + testID)
            .send({
                _id: testID,
                court: 4,
                date: "2023-03-16",
                time: "4:00 PM",
                players: [
                    'Jonathania Young',
                    'Miguel Dos Santos',
                    'Maria Dos Santos',
                    'Duane Duhwaneh'
                ],
                author: "Jonathania Young",
            })
            .end((err, res) => {
                assert.equal(res.status, 200)
                done();
            })
    })


    it('should delete testID entry', function(done) {
        chai.request(path)
            .delete('/api/court-booking/' + testID)
            .end((err, res) => {
                assert.equal(res.status, 200)
                done();
            })
    })

})

describe('Backend API CRUD Testing: User Authentication', function() {
    path = 'http://localhost:4000'
    var testToken

    it('should signup for a new account', function(done) {
        chai.request(path)
            .post('/api/signup')
            .send({
                name: 'test testerson',
                email: "test@testerson.com",
                password: "testerson",
                privilige: 1337,
                bookings: [""],
            })
            .end((err, res) => {
                assert.equal(res.status, 200);
                done();
            })
    })


    
    it('should login the user and assign testToken', function(done) {
        chai.request(path)
            .post('/api/login')
            .send({
                email: "test@testerson.com",
                password: "testerson",
            })
            .end((err, res) => {
                testToken = res.body.token
                assert.equal(res.status, 200);
                done();
            })
    })

    it('should set testToken', function (done) {
        this.timeout(3000);
        setTimeout(done, 2000);
        console.log('Verify testToken: ', testToken);
    });

    it('should validate jwt', function(done) {
    chai.request(path)
        .get('/api/validate')
        .set('Cookie', `jwt=${testToken}`)
        .end((err, res) => {
            assert.equal(res.status, 200);
            done();
        })
    })

    it('should logout and reset the jwt', function(done) {
        chai.request(path)
            .get('/api/logout/')
            .set('Cookie', `jwt=${testToken}`)
            .end((err, res) => {
                assert.equal(res.status, 200);
                done();
            })
    })

})