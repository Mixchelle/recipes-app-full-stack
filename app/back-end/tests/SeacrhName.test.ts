import chaiHttp from 'chai-http';
import sinon from 'sinon';
import chai from 'chai';
import app from '../src/app';
import NameService from '../src/services/searchServices';

chai.use(chaiHttp);

const { expect } = chai;

describe.skip('SearchName API', () => {
  afterEach(function () {
    sinon.restore();
  });

  it('should return all recipes when no query parameter is provided', async () => {
    sinon.stub(NameService, 'getAllRecipes').resolves([{ id: 1, name: 'Recipe 1', ingredients: 'Ingredients 1', category: 'Category 1' }]);
    const responseHttp = await chai.request(app).get('/drinks/name');

    expect(responseHttp.status).to.be.equal(200);
    expect(responseHttp.body).to.deep.equal([{ id: 1, name: 'Recipe 1', ingredients: 'Ingredients 1', category: 'Category 1' }]);
  });

  it('should return recipes matching the provided name', async () => {
    sinon.stub(NameService, 'getRecipeByName').resolves([{ id: 1, name: 'Juice', ingredients: 'Juice Ingredients', category: 'Juice Category' }]);
    const responseHttp = await chai.request(app).get('/drinks/name?q=Juice');

    expect(responseHttp.status).to.be.equal(200);
    expect(responseHttp.body).to.deep.equal([{ id: 1, name: 'Juice', ingredients: 'Juice Ingredients', category: 'Juice Category' }]);
  });

  it('should return an error for invalid input', async () => {
    sinon.stub(NameService, 'getRecipesByFirstLetter').throws(new Error('Invalid input'));
    const responseHttp = await chai.request(app).get('/drinks/name?q=invalid');

    expect(responseHttp.status).to.be.equal(400);
    expect(responseHttp.body).to.deep.equal({ error: 'Invalid input' });
  });

  it('should return an error for internal server error', async () => {
    sinon.stub(NameService, 'getRecipesByFirstLetter').throws(new Error('Internal server error'));
    const responseHttp = await chai.request(app).get('/drinks/name?q=a');

    expect(responseHttp.status).to.be.equal(500);
    expect(responseHttp.body).to.deep.equal({ error: 'Internal server error' });
  });
});
