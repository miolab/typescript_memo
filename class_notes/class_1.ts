class Person {
  name: string;
  constructor(initName: string) {
    this.name = initName;
  }
}

const im = new Person('im');

console.log('Person result :', im)