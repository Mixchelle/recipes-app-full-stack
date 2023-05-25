import chaiHttp from 'chai-http';
import sinon from 'sinon';
import chai from 'chai';
import app from '../src/app';
import areaModel from '../src/models/area.model';
import areaMockTest from './mocks/area.mock.test';

chai.use(chaiHttp);

const { expect } = chai;

describe('Test area and areas endpoints', () => {
  afterEach(function () {
    sinon.restore();
  });

  describe('get /areas', () => {
    it('Returns status 200 and all areas', async () => {
    sinon.stub(areaModel, 'getAll').resolves(areaMockTest.areaMock);
    const responseHttp = await chai.request(app)
    .get('/meals/areas');

    expect(responseHttp.status).to.be.equal(200);
    expect(responseHttp.body).to.deep.equal(areaMockTest.areaMock);
    })
  })

  describe('get /area', () => {
    afterEach(function () {
      sinon.restore();
    });
    it('Returns status 200 and all filtered areas from meals', async () => {
      sinon.stub(areaModel, 'getByArea').resolves(areaMockTest.americanAreaMock);
      const responseHttp = await chai.request(app)
      .get('/meals/area?q=American');
  
      expect(responseHttp.status).to.be.equal(200);
      expect(responseHttp.body).to.deep.equal(areaMockTest.americanAreaMock);
    });

    it('Returns status 200 and all areas', async () => {
      sinon.stub(areaModel, 'getAll').resolves(areaMockTest.areaMock);
      const responseHttp = await chai.request(app)
      .get('/meals/area');
  
      expect(responseHttp.status).to.be.equal(200);
      expect(responseHttp.body).to.deep.equal(areaMockTest.areaMock);
    });
  })

});
