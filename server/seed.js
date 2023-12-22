const fs = require('fs');
const path = require('path');
const faker = require('faker');
const md5 = require('md5');

function createBadges(limit = 5) {
  const result = [];

  for (let i = 0; i < limit; i++) {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const email = faker.internet.email();

    result.push({
      
      id: faker.datatype.uuid(),
      firstName,
      lastName,
      email,
      jobTitle: faker.name.jobTitle(),
      twitter: `${firstName}${lastName}${faker.address.zipCode()}`,
      avatarUrl: `https://www.gravatar.com/avatar/${md5(email)}?d=identicon`,
    });
  }

  return result;
}
/*
function main() {
  const data = {
    badges: createBadges(),
  };
/*
  fs.writeFileSync(
    path.resolve(__dirname,'public','db.json'),
    JSON.stringify(data, null, 4)
  );
  fs.writeFileSync(
    path.resolve('./public/db.json'),
    JSON.stringify(data, null, 4)
  );
}*/
/*
if (!fs.existsSync(path.resolve(__dirname, 'public','db.json'))) {
  main();
}*/
function main() {
  console.log('Seeding process started...');

  const data = {
    badges: createBadges(),
  };

  try {
    const filePath = path.resolve('./public/db.json');
    fs.writeFileSync(filePath, JSON.stringify(data, null, 4));
    console.log('Data successfully written to db.json at:', filePath);
  } catch (error) {
    console.error('Error writing to db.json:', error);
  }

  console.log('Seeding process completed.');
}

  main();
