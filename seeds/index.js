const sequelize = require('../config/connection');
const BlogPost = require('../models/BlogPost');
const blogPostData = require('./blogPost-seeds.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await BlogPost.bulkCreate(blogPostData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();