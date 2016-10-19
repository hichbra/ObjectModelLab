import expect from 'expect';
import {
  Data,
  TimeSeries,
} from '../../src/model';
// import { ??? } from '../../src/model';

import { data } from './sensors_data' ;

console.log('Taille donnees : ', data.length);

describe('Sensor model tests', () => {
  describe('TimeSeries', () => {
    const TimeS = new TimeSeries();
    it('values doit etre superieur a 1', () => {
      // data[0].data.values
      TimeS.values = [1];
      expect(TimeS.values).toBe(0);
    });

    it('values doit etre un tableau', () => {
      // data[0].data.values
      TimeS.values = 1;
      expect(TimeS.values).toBe(0);
    });

    it('values doit etre des chiffres', () => {
      // data[0].data.values
      TimeS.values = ['a', 'b'];
      expect(TimeS.values).toBe(0);
    });

    it('labels doit etre superieur a 1', () => {
      // data[0].data.labels
      TimeS.labels = [1];
      expect(TimeS.values).toBe(0);
    });

    it('labels doit etre des dates', () => {
      // data[0].data.labels
      TimeS.labels = [958, 5];
      expect(TimeS.labels).toBe(0);
    });

    it('labels doit etre un tableau', () => {
      // data[0].data.values
      TimeS.labels = 1;
      expect(TimeS.values).toBe(0);
    });

    it('il doit avoir le meme nombre de values et de labels', () => {
      TimeS.labels = data[0].data.labels; // 9
      TimeS.values = [23, 23, 22, 21, 23, 23, 23, 25]; // 8

      expect(TimeS.values).toBe(0);
    });
  });
});
