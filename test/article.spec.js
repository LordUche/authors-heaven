import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/app';

chai.use(chaiHttp);

describe('Articles', () => {
  it('should create an article', (done) => {
    chai
      .request(app)
      .post('/users/new')
      .send({ username: 'lorduche', password: '12345' })
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body.id).to.be.a('number');
        done(err);
      });
  });
});
