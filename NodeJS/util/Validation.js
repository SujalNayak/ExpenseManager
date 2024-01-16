const { z } = require('zod');

// Validation schema using Zod
const employeeSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  // Add more validation rules for your employee data here
});

const validateCreate = (req, res, next) => {
  const { error } = employeeSchema.safeParse(req.body);

  if (error) {
    return res.status(400).json({ message: error.message });
  }

  next();
};

const validateUpdate = (req, res, next) => {
  const { error } = employeeSchema.partial().safeParse(req.body);

  if (error) {
    return res.status(400).json({ message: error.message });
  }

  next();
};

module.exports = {
  validateCreate,
  validateUpdate,
};
