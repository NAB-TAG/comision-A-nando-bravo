const { PostModel } = require('../models/posts.js');



export const createPost = async (req, res) => {
    try {
        // const newPost = await PostModel.create(req.body)
        const newPost = await PostModel.create({
            title: "adsfasdf",
            content: "link",
            link: "link"
        })
        return res.status(201).json(newPost)
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: 'Error Server'
        })
    }
}
