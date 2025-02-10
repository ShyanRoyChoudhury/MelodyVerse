enum StatusType {
    Success = "Success",
    Fail = "Fail"
}

class ResponseClass {
    status: StatusType;
    message: string;
    data: {};

    constructor(data: {}, message: string, success: StatusType) {
        this.status = success;
        this.message = message;
        this.data = data;
    }
}

export {ResponseClass, StatusType}