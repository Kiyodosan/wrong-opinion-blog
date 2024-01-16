const router = require('express').Router();
const { BlogPost } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newBlogPost = await BlogPost.create({
      ...req.body,
      // req.body,
      user_id: req.session.user_id,
    });

    res.json(newBlogPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const blogPostdata = await BlogPost.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!blogPostdata) {
      res.status(404).json({ message: 'No blog post found with this id!' });
      return;
    }

    res.json(blogPostdata);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
