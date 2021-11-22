import {Request, Response, NextFunction} from "express";
import { IndexController } from "../controllers/TestController";
import { WalletController } from "../controllers/WalletController";
import { WalletTransactionController } from "../controllers/WalletTransactionController";
import { UserController } from "../controllers/UserController";



export class Routes { 
    
    public IndexController: IndexController = new IndexController() 
    public WalletController: WalletController = new WalletController()
    public WalletTransactionController: WalletTransactionController = new WalletTransactionController()
    public UserController : UserController = new UserController()
    
    public routes(app): void {   
        
        app.route('/v1/').get(this.IndexController.Test)
        .post(this.IndexController.Test2)

        app.route('/v1/wallet')
        .get(this.WalletController.Get)
        .post(this.WalletController.Post)


        app.route('/v1/user')
        .get(this.UserController.Get)
        .post(this.UserController.Post)

        app.route('/v1/wallet-setup')
        .post(this.WalletController.Post)

        app.route('/v1/wallet-transaction')
        .post(this.WalletTransactionController.Post)

        app.route('/v1/wallet-transaction')
        .get(this.WalletTransactionController.Get)

    }
}


