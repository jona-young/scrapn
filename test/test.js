var assert = require('assert')
var chai = require('chai')
var chaiHttp = require('chai-http');

chai.use(chaiHttp);

var testToken
var testUserID

describe('Backend API CRUD Testing: User Authentication', function() {
    path = 'http://localhost:4000'

    it('should signup for a new account', function(done) {
        chai.request(path)
            .post('/api/signup')
            .send({
                name: 'test testerson',
                email: "test@testerson.com",
                password: "testerson",
                privilige: 1337,
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
                testUserID = res.body._id
                assert.equal(res.status, 200);
                done();
            })
    })

    it('should set testToken', function (done) {
        this.timeout(3000);
        setTimeout(done, 2000);
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

    // it('should logout and reset the jwt', function(done) {
    //     chai.request(path)
    //         .get('/api/logout/')
    //         .set('Cookie', `jwt=${testToken}`)
    //         .end((err, res) => {
    //             assert.equal(res.status, 200);
    //             done();
    //     })
    // })

    it('should get all users', function(done) {
        chai.request(path)
            .get('/api/users')
            .end((err, res) => {
                console.log(res.body)
                assert.equal(res.status, 200);
                done();
            })
    })

})

describe('Backend API CRUD Testing: Court Bookings', function() {
    path = 'http://localhost:4000'
    currentDate = "2023-03-20"

    testID1 = ""
    testID2 = ""
    testID3 = ""

    it('should create a court booking 1', function(done) {
        chai.request(path)
            .post('/api/court-booking')
            .send({
                court: 1,
                date: currentDate,
                time: "2:00 PM",
                type: "Singles",
                players: [
                    {nameID: "6415e2ec5dd83646c36a7b27", name: "test testerson"},
                    {nameID: "6415ef24ea78e29f4211b4df", name: "test testerson"},
                ],
                author: "Jonathan Young",
            })
            .end((err, res) => {
                assert.equal(res.status, 200);
                done();
            })
    })

    it('should create a court booking 2', function(done) {
        chai.request(path)
            .post('/api/court-booking')
            .send({
                court: 2,
                date: currentDate,
                time: "2:00 PM",
                type: "Singles",
                players: [
                    {nameID: "6415e2ec5dd83646c36a7b27", name: "test testerson"},
                    {nameID: "6415ef24ea78e29f4211b4df", name: "test testerson"},
                ],
                author: "Jonathan Young",
            })
            .end((err, res) => {
                assert.equal(res.status, 200);
                done();
            })
    })

    it('should create a court booking 3', function(done) {
        chai.request(path)
            .post('/api/court-booking')
            .send({
                court: 3,
                date: currentDate,
                time: "2:00 PM",
                type: "Singles",
                players: [
                    {nameID: "6415e2ec5dd83646c36a7b27", name: "test testerson"},
                    {nameID: "6415ef24ea78e29f4211b4df", name: "test testerson"},
                ],
                author: "Jonathan Young",
            })
            .end((err, res) => {
                assert.equal(res.status, 200);
                done();
            })
    })

    it('should try to create 4th court booking but be limited', function(done) {
        chai.request(path)
            .post('/api/court-booking')
            .send({
                court: 4,
                date: currentDate,
                time: "2:00 PM",
                type: "Doubles",
                players: [
                    {nameID: "6415e2ec5dd83646c36a7b27", name: "test testerson"},
                    {nameID: "6415ef24ea78e29f4211b4df", name: "test testerson"},
                ],
                author: "Jonathan Young",
            })
            .end((err, res) => {
                assert.equal(res.status, 444);
                done();
            })
    })

    it('should return court bookings on dateParam', function(done) {
        dateParam = currentDate // requires assigning date
        chai.request(path) // the top level web address
            .get('/api/court-bookings/' + dateParam) // api path with date
            .end((err, res) => { // when the request returns
                testID1 = res.body[res.body.length - 1]._id
                testID2 = res.body[res.body.length - 2]._id
                testID3 = res.body[res.body.length - 3]._id

                assert.equal(res.status, 200);
                done();
            })
    })

    it('should set testID', function (done) {
        this.timeout(3000);
        setTimeout(done, 2000);
    });


    it('should return individual data off testID3, the first of the 3 created courts', function(done) {
        chai.request(path)
            .get('/api/court-booking/' + testID3)
            .end((err, res) => {
                assert.equal(res.body.court, 1);
                done();
            })
    })

    it('should update individual data off testID', function(done) {
        chai.request(path)
            .put('/api/court-booking/' + testID1)
            .send({
                _id: testID1,
                court: 1,
                date: currentDate,
                time: "12:00 PM",
                type: "Singles",
                players: [
                    {nameID: "6415e2ec5dd83646c36a7b27", name: "test testerson"},
                    {nameID: "6415ef24ea78e29f4211b4df", name: "test testerson"},
                ],
                author: "Jonathania Young",
            })
            .end((err, res) => {
                assert.equal(res.status, 200)
                done();
            })
    })


    it('should delete testID1 entry', function(done) {
        chai.request(path)
            .delete('/api/court-booking/' + testID1)
            .set('Cookie', `jwt=${testToken}`)
            .end((err, res) => {
                assert.equal(res.status, 200)
                done();
            })
    })

    it('should delete testID2 entry', function(done) {
        chai.request(path)
            .delete('/api/court-booking/' + testID2)
            .set('Cookie', `jwt=${testToken}`)
            .end((err, res) => {
                assert.equal(res.status, 200)
                done();
            })
    })

    it('should delete testID3 entry', function(done) {
        chai.request(path)
            .delete('/api/court-booking/' + testID3)
            .set('Cookie', `jwt=${testToken}`)
            .end((err, res) => {
                assert.equal(res.status, 200)
                done();
            })
    })
})

describe('Backend API CRUD Testing: User DELETE', function() {
    path = 'http://localhost:4000'

    it('should delete test user', function(done) {
        chai.request(path)
        .delete('/api/delete/' + testUserID)
        .set('Cookie', `jwt=${testToken}`)
        .end((err, res) => {
            assert.equal(res.status, 200)
            done();
        })
    })

})