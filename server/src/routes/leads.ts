const express = require('express');
import { Application, Request, Response, Router } from 'express';
import Lead from '../models/lead';

const leadsRouter = Router();

// @route GET /leads
// @desc retrieve leads from the database
leadsRouter.get('/', async (req: Request, res: Response) => {
  try {
    const leads = await Lead.find();
    res.status(200).json({ msg: leads });
  } catch(error) {
    res.status(500).json({ msg: error });
  }
});

// @route POST /leads
// @desc add a lead to the database
leadsRouter.post('/', async (req: Request, res: Response) => {
  try {
    const newLead = new Lead({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      need: req.body.need,
      source: req.body.source
    });
    const lead = await newLead.save();
    res.status(201).json({ msg: lead });
  } catch(error) {
    res.status(500).json({ msg: error });
  }
});

export default leadsRouter;