var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
const should = chai.should();
var app = require('../server');

describe("/POST palabra", () => {
    it("Prueba de test en matriz dada una palabra (TELEFE)", done => {
        let palabra = "TELEFE";
        chai.request(app)
            .post(`/api/posicion/${palabra}`)
            .end((err, res) => {
                res.should.have.status(200);
                done();
            })
    });
});

describe("/POST palabra", () => {
    it("Prueba de test en matriz dada una palabra (JAVA)", done => {
        let palabra = "JAVA";
        chai.request(app)
            .post(`/api/posicion/${palabra}`)
            .end((err, res) => {
                res.should.have.status(200);
                done();
            })
    });
});

describe("/POST palabra", () => {
    it("Prueba de test en matriz dada una palabra (VIACOM)", done => {
        let palabra = "VIACOM";
        chai.request(app)
            .post(`/api/posicion/${palabra}`)
            .end((err, res) => {
                res.should.have.status(200);
                done();
            })
    });
});

describe("/POST palabra", () => {
    it("Prueba de test en matriz dada una palabra (Node)", done => {
        let palabra = "Node";
        chai.request(app)
            .post(`/api/posicion/${palabra}`)
            .end((err, res) => {
                res.should.have.status(400);
                done();
            })
    });
});

describe("/POST palabra", () => {
    it("Prueba de test en matriz dada una palabra (TELEFEVIACOMJAVA)", done => {
        let palabra = "TELEFEVIACOMJAVA";
        chai.request(app)
            .post(`/api/posicion/${palabra}`)
            .end((err, res) => {
                res.should.have.status(400);
                done();
            })
    });
});

describe("/POST palabra", () => {
    it("Prueba de test en matriz dada una palabra ('')", done => {
        let palabra = null;
        chai.request(app)
            .post(`/api/posicion/${palabra}`)
            .end((err, res) => {
                res.should.have.status(400);
                done();
            })
    });
});

describe("/POST palabra", () => {
    it("Prueba de test en matriz dada una palabra (TeLEfE)", done => {
        let palabra = "TeLEfE";
        chai.request(app)
            .post(`/api/posicion/${palabra}`)
            .end((err, res) => {
                res.should.have.status(200);
                done();
            })
    });
});