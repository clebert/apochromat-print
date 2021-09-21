// @ts-check

const {Lens} = require('apochromat');
const {print} = require('./lib/cjs');
const greeting = new Lens();
const salutation = new Lens();
const subject = new Lens();

print(greeting);
salutation.render`Hi`;
subject.render`everyone`;
greeting.render`${salutation}, ${subject}!`;
setTimeout(() => subject.render`world`, 1000);
setTimeout(() => salutation.render`Hello`, 2000);
