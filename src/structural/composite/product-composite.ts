//component
export abstract class ProductComponent {
  abstract getPrice(): number;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  add(product: ProductComponent): void {}
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  remove(product: ProductComponent): void {}
}

//Leaf
export class ProductLeaf extends ProductComponent {
  constructor(public name: string, public price: number) {
    super();
  }
  getPrice(): number {
    return this.price;
  }
}

//Composite
export class ProductComposite extends ProductComponent {
  private children: ProductComponent[] = [];

  add(...products: ProductComponent[]): void {
    products.forEach((product) => this.children.push(product));
  }
  remove(product: ProductComponent): void {
    const productIndex = this.children.indexOf(product);
    if (productIndex !== -1) this.children.splice(productIndex, 1);
  }

  getPrice(): number {
    return this.children.reduce((sum, child) => sum + child.getPrice(), 0);
  }
}

//Client

const camisa = new ProductLeaf('camisa', 40);
const bike = new ProductLeaf('bike', 40);
const mouse = new ProductLeaf('mouse', 40);

const productBox = new ProductComposite();

productBox.add(camisa, bike, mouse);

const tablet = new ProductLeaf('tatble', 40);
const notebook = new ProductLeaf('notebook', 40);
const pen = new ProductLeaf('pen', 40);

const anotherBox = new ProductComposite();
anotherBox.add(tablet, notebook, pen);
productBox.add(anotherBox);

console.log(productBox);
console.log(productBox.getPrice());
