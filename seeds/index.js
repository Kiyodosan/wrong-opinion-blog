const sequelize = require('../config/connection');
const { User, BlogPost } = require('../models');

const userData = require('./user-seeds.json');
const blogPostData = require('./blogPost-seeds.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const blogPost of blogPostData) {
    await BlogPost.create({
      ...blogPost,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

/*   await BlogPost.bulkCreate(blogPostData, {
    individualHooks: true,
    returning: true,
  }); */

  process.exit(0);
};

seedDatabase();