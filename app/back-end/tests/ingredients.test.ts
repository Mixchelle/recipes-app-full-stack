import chaiHttp from 'chai-http';
import sinon from 'sinon';
import chai from 'chai';
import app from '../src/app';
import IngredientsModel from '../src/models/ingredient.model';
import { bananaDrinksMock, bananaMealsMock, drinksMock, mealsMock } from './mocks/ingredients.mock.test';

chai.use(chaiHttp);

const { expect } = chai;

describe('Test ingredients endpoint', () => {
  afterEach(function () {
    sinon.restore();
  });

  it('Returns all ingredients from drinks', async () => {
    sinon.stub(IngredientsModel, 'getAll').resolves(drinksMock);
    const responseHttp = await chai.request(app).get('/drinks/ingredients');

    expect(responseHttp.status).to.be.equal(200);
    expect(responseHttp.body).to.deep.equal(drinksMock);
  });

  it('Returns all ingredients from meals', async () => {
    sinon.stub(IngredientsModel, 'getAll').resolves(mealsMock);
    const responseHttp = await chai.request(app).get('/meals/ingredients');

    expect(responseHttp.status).to.be.equal(200);
    expect(responseHttp.body).to.deep.equal(mealsMock);
  });
  
  it('Returns all filtered ingredients from meals', async () => {
    sinon.stub(IngredientsModel, 'getByIngredient').resolves(bananaMealsMock);
    const responseHttp = await chai.request(app).get('/meals/ingredients?q=banana');

    expect(responseHttp.status).to.be.equal(200);
    expect(responseHttp.body).to.deep.equal(bananaMealsMock);
  });
  
  it('Returns all filtered ingredients from drinks', async () => {
    sinon.stub(IngredientsModel, 'getByIngredient').resolves(bananaDrinksMock);
    const responseHttp = await chai.request(app).get('/drinks/ingredients?q=banana');

    expect(responseHttp.status).to.be.equal(200);
    expect(responseHttp.body).to.deep.equal(bananaDrinksMock);
  });
});
