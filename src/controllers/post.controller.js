import * as PostModel from '../models/post.model';
import { HttpException, HttpStatus } from '../errors/httpException.error';

export const getById = async (req, res) => {
  const { id } = req.params;

  const post = await PostModel.getById(Number(id));
  if (!post)
    throw new HttpException('Unauthorized', HttpStatus.NOT_FOUND);
  else
    res.status(200).json({ post });
}

export const getAllPosts = async (_req, res) => {
  const posts = await PostModel.getPosts()

  res.status(200).json({ posts });
}

export const createOne = async (req, res) => {
  const { message } = req.body;
  const authorId = req.user.id

  if (message == undefined || message == '')
    throw new HttpException('NO CONTENT', HttpStatus.NOT_FOUND);
  else {
    const post = await PostModel.createOne({ message: message, authorId: authorId });
    res.status(201).json({ post });
  }

}

export const updateOneById = async (req, res) => {
  const { id } = req.params;
  const { message } = req.body;

  if (message == undefined || message == '')
    throw new HttpException('NO CONTENT', HttpStatus.NOT_FOUND);

  const post = await PostModel.updateOneById({ id: Number(id), message });

  if(!post)
    throw new HttpException('Unauthorized', HttpStatus.NOT_FOUND);

  res.status(200).json({ post });
}

export const deleteById = async (req, res) => {
  const id = req.params.id;

  const post = await PostModel.deleteById(Number(id));

  if (!post) 
    throw new HttpException('Unauthorized', HttpStatus.NOT_FOUND);
  
    res.status(200).json({ post });
}
