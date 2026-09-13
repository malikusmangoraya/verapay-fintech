import Joi from 'joi';

const budgetBaseSchema = Joi.object({
  name: Joi.string().trim().min(3).max(100),
  amount: Joi.number().positive().precision(2),
  currency: Joi.string().length(3).uppercase().default('USD'),
  period: Joi.string().valid('daily', 'weekly', 'monthly', 'annually').default('monthly'),
  category: Joi.string().trim().min(3).max(50).optional(),
  startDate: Joi.date().iso(),
  endDate: Joi.date().iso().greater(Joi.ref('startDate')).optional(),
  description: Joi.string().max(500).optional().allow(''),
});

export const createBudgetSchema = budgetBaseSchema.keys({
  name: Joi.string().trim().min(3).max(100).required(),
  amount: Joi.number().positive().precision(2).required(),
  startDate: Joi.date().iso().required(),
});

export const updateBudgetSchema = budgetBaseSchema.keys({
  name: Joi.string().trim().min(3).max(100).optional(),
  amount: Joi.number().positive().precision(2).optional(),
  currency: Joi.string().length(3).uppercase().optional(),
  period: Joi.string().valid('daily', 'weekly', 'monthly', 'annually').optional(),
  category: Joi.string().trim().min(3).max(50).optional(),
  startDate: Joi.date().iso().optional(),
  endDate: Joi.date().iso().greater(Joi.ref('startDate')).optional(),
  description: Joi.string().max(500).optional().allow(''),
});

new file mode 100644