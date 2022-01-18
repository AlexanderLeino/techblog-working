const { blogPost } = require('../models')

const blogPostData = [
    {  
        post_creator: 1,
        title: 'This Should Work',
        body: 'If this works I will be very happy.'
    },
    {   
        post_creator: 2,
        title: 'Everyday Gets Easier Coding',
        body: 'Just little by little makes the biggest difference.'
    },
    {
        post_creator: 1,
        title: 'This post was made by creator 1',
        body: 'Just more seeding'
    },
    {
        post_creator: 1,
        title: 'This post was made by creator 1 again.',
        body: 'if you are seeing this it is not too late'
    }
]

const seedBlogPosts = () => blogPost.bulkCreate(blogPostData);


module.exports = seedBlogPosts