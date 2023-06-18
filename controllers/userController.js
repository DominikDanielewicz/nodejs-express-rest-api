const getCurrentUser = async (req, res, next) => {
  try {
    const currentUser = req.user;
    res.status(200).json({
      status: "success",
      code: 200,
      data: {
        user: {
          email: currentUser.email,
          subscription: currentUser.subscription,
        },
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getCurrentUser };
