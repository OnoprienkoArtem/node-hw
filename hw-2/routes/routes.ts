import express from 'express';

import { getAutoSuggestUsers, getUserById, createUser, updateUserById, removeUserById } from '../utils/functions';
import { schema } from '../validation/validationSchema';
import { validateSchema } from '../validation/validator';

const router = express.Router();

router.get('/', (req, res) => {
  try {
    res.send(getAutoSuggestUsers(req.query.login as string, Number(req.query.limit)));
  } catch (error) {
    res.status(404).send(error);
  }  
});

router.get('/:id', (req, res) => {
  try {
    res.json(getUserById(req.params.id));
  } catch (error) {
    res.status(404).send(error);
  }
});

router.post('/', validateSchema(schema), (req, res) => {
  try {
    res.send(createUser(req.query));
  } catch (error) {
    res.status(404).send(error);
  }
});

router.put('/:id', validateSchema(schema), (req, res) => {
  try {
    res.json(updateUserById(req.params.id, req.query));
  } catch (error) {
    res.status(404).send(error);
  }
});

router.delete('/:id', (req, res) => {
  try {  
    res.send(removeUserById(req.params.id));
  } catch (error) {
    res.status(404).send(error);
  }
});

export default router;