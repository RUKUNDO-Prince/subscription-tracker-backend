const errorMiddleware = (err, req, res, next) => {
    try {
        let error = { ...err };
        error.message = err.message;
        console.log(err);

        // MONGOOSE BAD OBJECTID ERROR
        if (err.name === 'CastError') {
            const message = `Resource not found. Invalid: ${err.path}`;
            error = new Error(message, 404);
        }

        // MONGOOSE DUPLICATE KEY ERROR
        if (err.code === 11000) {
            const message = `Duplicate field value entered: ${err.keyValue.name}`;
            error = new Error(message, 400);
        }

        // MONGOOSE VALIDATION ERROR
        if (err.name === 'ValidationError') {
            const message = Object.values(err.errors).map((val) => val.message);
            error = new Error(message.join(', '), 400);
        }

        res.status(error.statusCode || 500).json({
            success: false,
            error: error.message || 'Server Error',
        });
    } catch (error) {
        next(error);
    }
}

export default errorMiddleware;