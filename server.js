const express = require('express');
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.json())


// =============
// Dependencies.
// =============
const { User, History } = require('./sequelize')


// =============
// API endpoints
// =============
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

// create a user
app.post('/api/users', (req, res) => {
    User.create(req.body)
        .then(user => res.json(user))
})

// get all users
app.get('/api/users', (req, res) => {
    User.findAll().then(users => res.json(users))
})

// // create a blog post
// app.post('/api/blogs', (req, res) => {
//     const body = req.body
//     // either find a tag with name or create a new one
//     const tags = body.tags.map(tag => Tag.findOrCreate({ where: { name: tag.name }, defaults: { name: tag.name }})
//                                          .spread((tag, created) => tag))
//     User.findById(body.userId)
//         .then(() => Blog.create(body))
//         .then(blog => Promise.all(tags).then(storedTags => blog.addTags(storedTags)).then(() => blog))
//         .then(blog => Blog.findOne({ where: {id: blog.id}, include: [User, Tag]}))
//         .then(blogWithAssociations => res.json(blogWithAssociations))
//         .catch(err => res.status(400).json({ err: `User with id = [${body.userId}] doesn\'t exist.`}))
// })

// // find blogs belonging to one user or all blogs
// app.get('/api/blogs/:userId?', (req, res) => {
//     let query;
//     if(req.params.userId) {
//         query = Blog.findAll({ include: [
//             { model: User, where: { id: req.params.userId } },
//             { model: Tag }
//         ]})
//     } else {
//         query = Blog.findAll({ include: [Tag, User]})
//     }
//     return query.then(blogs => res.json(blogs))
// })

// // find blogs by tag
// app.get('/api/blogs/:tag/tag', (req, res) => {
//     Blog.findAll({
//         include: [
//             { model: Tag, where: { name: req.params.tag } }
//         ]
//     })
//     .then(blogs => res.json(blogs))
// })


// ===============
// Fire up server.
// ===============
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
