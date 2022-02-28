import * as PostModel from '../models/post.model';

export const getById = async (req, res) => {
  const { id } = req.params;

  const post = await PostModel.getById(Number(id));
  if (!post) {
    throw new HttpException('Unauthorized', HttpStatus.NOT_FOUND);
  }

  res.status(200).json({ post });
}

export const getPosts = async (_req, res) => {
  res.status(200).json({
    data: {
      posts: await PostModel.getPosts(),
    },
  });
}

export const createOne = async (req, res) => {
  const { message, authorId } = req.body;

  const post = await PostModel.createOne({ message: message, authorId: authorId });

  res.status(201).json({ post });
}

export const updateOneById = async (req, res) => {
  const { id } = req.params;
  const { message } = req.body;

  const post = await PostModel.updateOneById({
    id: Number(id),
    message
  });

  res.json({ post });
}

export const deleteById = async (req, res) => {
  const id = req.params.id;

  const post = await PostModel.deleteById(Number(id));

  // if (!post) {
  //   throw new HttpException('Unauthorized', HttpStatus.NOT_FOUND);
  // }
  res.status(204)
}
