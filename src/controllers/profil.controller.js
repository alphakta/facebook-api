import * as ProfileModel from '../models/profil.model';
import { HttpException, HttpStatus } from '../errors/httpException.error';

export const upsertProfile = async (req, res) => {
  const { firstName, lastName } = req.body;
  const { id } = req.params;

  // console.log(firstName, lastName, id)
  const profile = await ProfileModel.upsertProfile({ firstName: firstName, lastName: lastName, userId: id });

  if (!profile) 
    throw new HttpException('Unauthorized', HttpStatus.NOT_FOUND);

  res.status(200).json(profile);
}

export const getById = async (req, res) => {
  const id = req.params.id;
  const profile = await ProfileModel.getById(id)

  if (!profile) 
    throw new HttpException('Unauthorized', HttpStatus.NOT_FOUND);
  
  res.status(200).json({ profile });
}

export const deleteById = async (req, res) => {
  const id = req.params.id;
  await ProfileModel.deleteProfileById(id)
  await ProfileModel.deleteProfilePostsById(id)

  const profile = await ProfileModel.deleteUserById(id)

  if (!profile) 
    throw new HttpException('Unauthorized', HttpStatus.NOT_FOUND);
  else
    res.status(200).json({ profile });
}

export const getPostsById = async (req, res, next) => {
  const id = req.params.id;
  const posts = await ProfileModel.getPostsById(id)

  if (!posts) 
    throw new HttpException('Unauthorized', HttpStatus.NOT_FOUND);
  
  res.status(200).json({ posts });
}