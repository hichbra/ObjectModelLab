
/* TODO : Créer le modèle objet ici */
export class Data {

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

    for (let i = 0; i < values.length; i++) {
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

    for (let i = 0; i < labels.length; i++) {
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
