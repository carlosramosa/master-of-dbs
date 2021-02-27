'use strict';

const { Connection }  = require('../lib/mongo')

describe('mongo', () => {
    it('needs tests', async() => {
      await Connection.connectToMongo()
      expect(typeof Connection).toEqual('function');
      expect(Connection.db).not.toEqual(null)
    });

    it('Insert document and', async() => {
      await Connection.connectToMongo()
      const doc = await Connection.db.db.collection('robots').insertOne({
        movements: 'as',
        lost: 'ds',
        totalSteps: 'movements.length',
      });
      expect(doc).toEqual('function');
    });
});
