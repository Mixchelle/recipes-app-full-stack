import chaiHttp from 'chai-http';
import sinon from 'sinon';
import chai from 'chai';
import app from '../src/app';
import * as RandomModel from '../src/controllers/random.controller';
import { bananaDrinksMock, bananaMealsMock } from './mocks/ingredients.mock.test';

chai.use(chaiHttp);

const { expect } = chai;
const { drinks } = bananaDrinksMock;
const { meals } = bananaMealsMock;

describe('Test random endpoint', () => {
  afterEach(function () {
    sinon.restore();
  });

  it('Returns a random drink', async () => {
    sinon.stub(RandomModel, 'getRandom').resolves(drinks[1]);
    const responseHttp = await chai.request(app).get('/drinks/random');

    expect(responseHttp.status).to.be.equal(200);
    expect(responseHttp.body).to.deep.equal(drinks[1]);
  });
  
  it('Returns a random meal', async () => {
    sinon.stub(RandomModel, 'getRandom').resolves(meals[0]);
    const responseHttp = await chai.request(app).get('/meal/random');

    expect(responseHttp.status).to.be.equal(200);
    expect(responseHttp.body).to.deep.equal(meals[0]);
  });
});
