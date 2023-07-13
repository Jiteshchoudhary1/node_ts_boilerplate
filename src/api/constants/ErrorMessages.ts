export class ErrorMessages {
    static codes() {
        return {
            INTERNAL_SERVER_ERROR: {
                code: 'INTERNAL_SERVER_ERROR',
                message: 'Something went wrong, pelase try again',
            },
            UNAUTHORIZED: {
                code: 'UNAUTHORIZED',
                message: 'Unauthorized access detected.',
            },
            BAD_REQUEST: {
                code: 'BAD_REQUEST',
                message: 'Missing parameters',
            },
        };
    }
}
