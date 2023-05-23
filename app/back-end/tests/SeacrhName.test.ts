import { expect } from 'chai';
import sinon from 'sinon';
import { Request, Response } from 'express';
import NameController from '../src/controllers/searchController';
import NameService from '../src/services/searchServices';
import Model from '../src/models/searchModel';

describe('Search API', () => {
  describe('GET /name', () => {
    afterEach(() => {
      sinon.restore();
    });

    it('should return all recipes when no query parameter is provided', async () => {
      const req = {} as Request;
      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub()
      } as unknown as Response;

      sinon.stub(NameService, 'getAllRecipes').resolves([{ id: 1, name: 'Recipe 1', ingredientes: 'Ingredients 1', categoria: 'Category 1' }]);

      await NameController.getAllRecipes(req, res);

      expect(res.status.calledWith(200)).to.be.true;
      expect(res.json.calledWith([{ id: 1, name: 'Recipe 1', ingredientes: 'Ingredients 1', categoria: 'Category 1' }])).to.be.true;
    });

    it('should return recipes matching the provided name', async () => {
      const req = { query: { q: 'Pizza' } } as unknown as Request;
      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub()
      } as unknown as Response;

      sinon.stub(NameService, 'getRecipeByName').resolves([{ id: 1, name: 'Pizza Recipe', ingredientes: 'Pizza Ingredients', categoria: 'Pizza Category' }]);

      await NameController.getAllRecipes(req, res);

      expect(res.status.calledWith(200)).to.be.true;
      expect(res.json.calledWith([{ id: 1, name: 'Pizza Recipe', ingredientes: 'Pizza Ingredients', categoria: 'Pizza Category' }])).to.be.true;
    });

    it('should return an error for invalid input', async () => {
      const req = { query: { q: 'invalid' } } as unknown as Request;
      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub()
      } as unknown as Response;

      await NameController.getRecipesByFirstLetter(req, res);

      expect(res.status.calledWith(400)).to.be.true;
      expect(res.json.calledWith({ error: 'Invalid input' })).to.be.true;
    });

    it('should return an error for internal server error', async () => {
      const req = { query: { q: 'a' } } as unknown as Request;
      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub()
      } as unknown as Response;

      sinon.stub(NameService, 'getRecipesByFirstLetter').throws(new Error('Internal server error'));

      await NameController.getRecipesByFirstLetter(req, res);

      expect(res.status.calledWith(500)).to.be.true;
      expect(res.json.calledWith({ error: 'Internal server error' })).to.be.true;
    });
  });
});
