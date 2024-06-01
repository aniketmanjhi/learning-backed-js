const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
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
const asyncHandler = (requestHandler) => async (req, res, next) => {
  try {
    await requestHandler(req,res,next)
  } catch (err) {
    res.status(err.code || 500).json({
      success: false,
      message: err.message,
    });
  }
};
*/
