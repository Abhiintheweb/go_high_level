
export class WalletError extends Error {
    constructor(public msg: string,public status_code:number) {
        super(msg);
        // Set the prototype explicitly.
        WalletError.prototype.status_code=status_code || 500
        Object.setPrototypeOf(this, WalletError.prototype);
    }

}

