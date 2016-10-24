
/* TODO : Créer le modèle objet ici */
export class Data {

}

export class Datum extends Data {
  constructor(value) {
    super();
    if (isNaN(parseFloat(value)) || !isFinite(value)) {
      this.val = 0;
    } else {
      this.val = value;
    }
  }
  set value(value) {
    if (isNaN(parseFloat(value)) || !isFinite(value)) {
      this.val = 0;
    } else {
      this.val = value;
    }
  }
  get value() {
    return this.val || 0;
  }
}

export class TimeSeries extends Data {
  constructor() {
    super();
    // On ne passe pas les valeurs par le constructeur pour pouvoir les vérifier
    this.value = 0;
    this.label = 0;
  }
  get values() {
    return this.value || 0;
  }
  set values(values) {
    let numeric = true;

    for (let i = 0; i < values.length; i += 1) {
      if (isNaN(parseFloat(values[i])) || !isFinite(values[i])) {
        numeric = false;
      }
    }

    if (this.label === 0) {
      if (values.length > 1 && numeric) {
        this.value = values;
      } else {
        this.value = 0;
      }
    } else if (values.length > 1 && values.length === this.label.length && numeric) {
      this.value = values;
    } else {
      this.value = 0;
    }
  }
  get labels() {
    return this.label || 0;
  }
  set labels(labels) {
    // 2016-10-19T08:00:00.000Z
    const regex = new RegExp('20[0-9][0-9]-[0-9][0-9]-[0-9][0-9]T[0-9][0-9]:[0-9][0-9]:[0-9][0-9].[0-9][0-9][0-9]Z');
    let date = true;

    for (let i = 0; i < labels.length; i += 1) {
      if (!regex.test(labels[i])) {
        date = false;
      }
    }

    if (this.value === 0) {
      if (labels.length >= 1 && date) {
        this.label = labels;
      } else {
        this.label = 0;
      }
    } else if (labels.length >= 1 && date && this.value.length === labels.length) {
      this.label = labels;
    } else {
      this.label = 0;
    }
  }
  toString() {
    return (`(${this.value}, ${this.label})`);
  }
}

export class SensorType {
  constructor() {
    this.types = ['TEMPERATURE', 'HUMIDITY', 'LIGHT', 'SWITCH', 'DOOR', 'FAN_SPEED'];
  }
  get type() {
    return this.types;
  }
  set type(type) {
    this.types = type;
  }
  isType(string) {
    for (let i = 0; i < this.types.length; i += 1) {
      if (string === this.types[i]) {
        return true;
      }
    }
    return false;
  }
}

export class Sensor {
  // Je pense qu'il y a une erreur dans l'enoncé, je pars du principe que id est numerique
  constructor(id, name) {
    this.types = new SensorType();

    if (!isNaN(parseFloat(id)) && isFinite(id)) {
      this.identifiant = id;
    } else {
      this.identifiant = 0;
    }

    this.nom = name;
  }
  get name() {
    return this.nom || 0;
  }
  set name(name) {
    this.nom = name;
  }
  get id() {
    return this.identifiant || 0;
  }
  set id(id) {
    if (!isNaN(parseFloat(id)) && isFinite(id)) {
      this.identifiant = id;
    } else {
      this.identifiant = 0;
    }
  }
  get type() {
    return this.typeSensor || 0;
  }
  set type(type) {
    if (this.types.isType(type)) {
      this.typeSensor = type;
    } else {
      this.typeSensor = 0;
    }
  }
  get data() {
    return this.donnees || 0;
  }
  set data(data) {
    if (data instanceof Data) {
      this.donnees = data;
    } else {
      this.type = 0;
    }
  }
}

export class Temperature extends Sensor {

}

export class Humidity extends Sensor {

}

export class Light extends Sensor {

}
