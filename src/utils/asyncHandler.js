const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve()
      .then(requestHandler(req, res, next))
      .catch((err) => next(err));
  };
};

export { asyncHandler };

// const asyncHandler = () => {};
// const asyncHandler = (func) => () => {};
// const asyncHandler = (func) => async () => {};

/* // Another Way
const asyncHandler = (fn) => async (req, res, next) => {
  try {
    await fn(req,res,next)
  } catch (err) {
    res.status(err.code || 500).json({
      success: false,
      message: err.message,
    });
  }
};
*/