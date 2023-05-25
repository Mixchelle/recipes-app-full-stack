import chaiHttp from 'chai-http';
import sinon from 'sinon';
import chai from 'chai';
import app from '../src/app';
import categoryModel from '../src/models/category.model';
import { categoriesMock, categoriesFilteredMock } from './mocks/categories.mock.test';

chai.use(chaiHttp);

const { expect } = chai;

describe('Test categories endpoint', () => {
    afterEach(function () {
        sinon.restore();
    });

 it('Returns all categories from drinks', async () => {
  sinon.stub(categoryModel, 'getAllCategories').resolves(categoriesMock as any)
  const responseHttp = await chai.request(app).get('/drinks/categories');

  expect(responseHttp.status).to.be.equal(200);
  expect(responseHttp.body).to.deep.equal(categoriesMock);
});

 it('Returns all filtered categories', async () => {
    sinon.stub(categoryModel, 'getByCategory').resolves(categoriesFilteredMock as any);
    const responseHttp = await chai.request(app).get('drinks/category?=Cocoa');
    
    expect(responseHttp.status).to.be.equal(200);
    expect(responseHttp.body).to.deep.equal(categoriesFilteredMock);
});
});