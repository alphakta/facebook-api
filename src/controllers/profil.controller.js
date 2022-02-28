import * as ProfileModel from '../models/profil.model';

export const upsertProfile = async (req, res) => {
  const { firstName, lastName } = req.body;
  const { id } = req.params;

  // console.log(firstName, lastName, id)
  const profile = await ProfileModel.upsertProfile({
    firstName: firstName,
    lastName: lastName,
    userId: id
  });

  res.status(201).json(profile);
}

export const getById = async (req, res) => {
  const id = req.params.id;
  res.json({
    profile: await ProfileModel.getById(id)
  })
}

export const deleteById = async (req, res) => {
  const id = req.params.id;
  await ProfileModel.deleteProfileById(id)
  await ProfileModel.deleteProfilePostsById(id)

  const profile = await ProfileModel.deleteUserById(id)

  res.status(201).json({});
}

export const getPostsById = async (req, res) => {
  const id = req.params.id;
  res.json({
    posts: await ProfileModel.getPostsById(id)
  })
}