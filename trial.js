class Parent {
  constructor() {
    this.name = "hello";
  }
}

class Child extends Parent {
  constructor() {
    super();
  }
}

const obj = new Child();

console.log(obj);
