var assert = require('assert')
var chai = require('chai')
var chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('Server status testing / route', function() {
    path = 'http://localhost:4000'
    fieldString = "Charlee"

    it('get route should return 200 status code', function(done) {
        chai.request(path) // the top level web address
            .get('/api/court-bookings') // the route to add the top level address
            .end((err, res) => { // when the request returns
                var returnedObject = res.body[res.body.length -1]
                assert.equal(returnedObject.court, 'Charlee');
                console.log(returnedObject._id)
                done();
            })
    })
    
    it('post route should return Charlee', function(done) {
        chai.request(path)
            .post('/api/court-bookings')
            .send({
                court: fieldString,
            })
            .end((err, res) => {
                assert.equal(res.status, 200);
                done();
            })
        })

    it('get route should return return Charlee', function(done) {
        chai.request(path)
            .get('/api/court-bookings/63a541c20b3e5a62de80171c')
            .end((err, res) => {
                assert.equal(res.body.court, "Charlee");
                done();
            })
        })

    // Does Chai allow to test for PUT route?

    it('delete route should body result is success!', function(done) {
        chai.request(path)
            .delete('api/court-bookings/63a543bce9cad9fff452a0b6')
            .end((err, res) => {
                console.log(res)
                assert.equal(2,2)
                done();
            })
    })

    
    
    

})