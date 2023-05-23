import chaiHttp from 'chai-http';
import sinon from 'sinon';
import chai from 'chai';
import app from '../src/app';
import * as RandomModel from '../src/models/random.model';
import { randomRequestDrinkMock, randomRequestMealMock } from './mocks/random.mock.test';

chai.use(chaiHttp);

const { expect } = chai;

describe('Test random endpoint', () => {
  afterEach(function () {
    sinon.restore();
  });

  it('Returns a random drink', async () => {
    sinon.stub(RandomModel, 'getRandom').resolves(randomRequestDrinkMock);
    const responseHttp = await chai.request(app).get('/drinks/random');

    expect(responseHttp.status).to.be.equal(200);
    expect(responseHttp.body).to.deep.equal(randomRequestDrinkMock);
  });
  
  it('Returns a random meal', async () => {
    sinon.stub(RandomModel, 'getRandom').resolves(randomRequestMealMock);
    const responseHttp = await chai.request(app).get('/meals/random');

    expect(responseHttp.status).to.be.equal(200);
    expect(responseHttp.body).to.deep.equal(randomRequestMealMock);
  });
});
