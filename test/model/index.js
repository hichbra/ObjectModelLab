import expect from 'expect';
import {
  Data,
  TimeSeries,
  Datum,
  Sensor,
} from '../../src/model';
// import { ??? } from '../../src/model';

import { data } from './sensors_data' ;

console.log('Taille donnees : ', data.length);

describe('Sensor model tests', () => {
  describe('TimeSeries', () => {
    const timeS = new TimeSeries();
    it('values doit etre superieur a 1', () => {
      timeS.values = [1];
      expect(timeS.values).toBe(0);
    });

    it('values doit etre un tableau', () => {
      timeS.values = 1;
      expect(timeS.values).toBe(0);
    });

    it('values doit etre des chiffres', () => {
      timeS.values = ['a', 'b'];
      expect(timeS.values).toBe(0);
    });

    it('labels doit etre superieur a 1', () => {
      timeS.labels = [1];
      expect(timeS.values).toBe(0);
    });

    it('labels doit etre des dates', () => {
      timeS.labels = [958, 5];
      expect(timeS.labels).toBe(0);
    });

    it('labels doit etre un tableau', () => {
      timeS.labels = 1;
      expect(timeS.values).toBe(0);
    });

    it('il doit avoir le meme nombre de values et de labels', () => {
      timeS.labels = data[0].data.labels; // 9
      timeS.values = [23, 23, 22, 21, 23, 23, 23, 25]; // 8

      expect(timeS.values).toBe(0);
    });
  });
  describe('Datum', () => {
    it('datum doit avoir en donnees une valeur numerique', () => {
      const datum = new Datum('A');
      expect(datum.value).toBe(0);
    });
  });
  describe('Sensor', () => {
    it('id doit etre une valeur numerique', () => {
      const sens = new Sensor('a', 'Nom');
      expect(sens.id).toBe(0);
    });

    it('type doit faire parti de SensorType', () => {
      const sens = new Sensor(1, 'Nom');
      sens.type = 'PasSensorType';
      expect(sens.type).toBe(0);
    });

    it('data doit etre de type Data', () => {
      const sens = new Sensor(1, 'Nom');
      sens.data = 'PasData';
      expect(sens.data).toBe(0);
    });

    it('import des donnees', () => {
      const timeS = new TimeSeries();
      timeS.labels = data[0].data.labels;
      timeS.values = data[0].data.values;

      const sens = new Sensor(data[0].id, data[0].name);
      sens.type = data[0].type;
      sens.data = timeS;
      expect(sens.id).toNotBe(0);
      expect(sens.name).toNotBe(0);
      expect(sens.type).toNotBe(0);
      expect(sens.data).toNotBe(0);
    });
  });
});
