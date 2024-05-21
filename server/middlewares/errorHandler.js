const errorHandler = (e, req, res, next) => {
    res.status(e.status || 500).json({
        message: e.message,
        error: e,
        moreStuff: "Well, what do you know!"
    });
}

export default errorHandler;