let budgets = [];
let nextBudgetId = 1;

export const createBudget = async (req, res, next) => {
  try {
    const newBudget = {
      id: nextBudgetId++,
      userId: req.user ? req.user.id : 'anonymous', // Placeholder: assume userId from auth middleware
      ...req.body,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    budgets.push(newBudget);
    res.status(201).json({ success: true, data: newBudget });
  } catch (error) {
    next(error);
  }
};

export const getBudgets = async (req, res, next) => {
  try {
    // In a real application, filter by userId or apply pagination/filters
    res.status(200).json({ success: true, data: budgets });
  } catch (error) {
    next(error);
  }
};

export const getBudgetById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const budget = budgets.find(b => b.id === parseInt(id));

    if (!budget) {
      return res.status(404).json({ success: false, message: 'Budget not found' });
    }
    // In a real application, ensure budget belongs to the requesting user
    res.status(200).json({ success: true, data: budget });
  } catch (error) {
    next(error);
  }
};

export const updateBudget = async (req, res, next) => {
  try {
    const { id } = req.params;
    const budgetIndex = budgets.findIndex(b => b.id === parseInt(id));

    if (budgetIndex === -1) {
      return res.status(404).json({ success: false, message: 'Budget not found' });
    }

    // In a real application, ensure budget belongs to the requesting user
    budgets[budgetIndex] = {
      ...budgets[budgetIndex],
      ...req.body,
      updatedAt: new Date().toISOString(),
    };

    res.status(200).json({ success: true, data: budgets[budgetIndex] });
  } catch (error) {
    next(error);
  }
};

export const deleteBudget = async (req, res, next) => {
  try {
    const { id } = req.params;
    const initialLength = budgets.length;
    budgets = budgets.filter(b => b.id !== parseInt(id));

    if (budgets.length === initialLength) {
      return res.status(404).json({ success: false, message: 'Budget not found' });
    }
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

new file mode 100644