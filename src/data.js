import faker from "faker";
const users = [];
const companies = [];
const products = [];

while (companies.length < 30) {
  companies.push({
    name: faker.company.companyName(),
    id: companies.length + 1,
    state: faker.address.state(),
  });
}

while (products.length < 30) {
  const name = faker.commerce.productName();
  const material = faker.commerce.productMaterial();
  const adjective = faker.commerce.productAdjective();
  products.push({
    id: products.length + 1,
    name,
    material,
    adjective,
    companyId: faker.random.arrayElement(companies).id,
    department: faker.commerce.department(),
    description: `${name} is made of ${material} and it is ${adjective}.`,
  });
}

while (users.length < 30) {
  users.push({
    name: faker.name.firstName(),
    id: users.length + 1,
    state: faker.address.state(),
    companyId: faker.random.arrayElement(companies).id,
  });
}

const data = {
  users,
  companies,
  products,
};

export default data;
