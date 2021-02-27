'use strict';

const redis = require('..');

describe('redis', () => {
    test('needs tests', async() => {
      redis.getConnection();
      expect(redis.connected).toEqual(true);
      expect(redis.client).not.toEqual(null)
    });
    it('Should insert a entry', async() => {
      const entry = await redis.getConnection().set('test', 'OK');
      expect(entry).toEqual('OK');
    });

    it('Should get a entry', async() => {
      const entry = await redis.getConnection().get('test');
      expect(entry).toEqual('OK');
    });

    it('Should flush all', async() => {
      const a = await redis.getConnection().flushall();
      expect(a).toEqual('OK');
    });
});
