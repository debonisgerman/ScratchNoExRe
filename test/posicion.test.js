var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
const should = chai.should();
var app = require('../server');

describe("/POST palabra", () => {
    it("Prueba de test en matriz dada una palabra",done => {
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
    it("Prueba de test en matriz dada una palabra",done => {
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
    it("Prueba de test en matriz dada una palabra",done => {
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
    it("Prueba de test en matriz dada una palabra",done => {
        let palabra = "Node";
        chai.request(app)
            .post(`/api/posicion/${palabra}`)
            .end((err, res) => {
                res.should.have.status(200);
                done();
            })
    });
});

describe("/POST palabra", () => {
    it("Prueba de test en matriz dada una palabra",done => {
        let palabra = "TELEFEVIACOMJAVA";
        chai.request(app)
            .post(`/api/posicion/${palabra}`)
            .end((err, res) => {
                res.should.have.status(200);
                done();
            })
    });
});

describe("/POST palabra", () => {
    it("Prueba de test en matriz dada una palabra",done => {
        let palabra = "";
        chai.request(app)
            .post(`/api/posicion/${palabra}`)
            .end((err, res) => {
                res.should.have.status(200);
                done();
            })
    });
});

describe("/POST palabra", () => {
    it("Prueba de test en matriz dada una palabra",done => {
        let palabra = "TeLEfE";
        chai.request(app)
            .post(`/api/posicion/${palabra}`)
            .end((err, res) => {
                res.should.have.status(200);
                done();
            })
    });
});

