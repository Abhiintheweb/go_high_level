import {Request, Response, NextFunction} from "express";
import { IndexController } from "../controllers/TestController";
import { WalletController } from "../controllers/WalletController";



export class Routes { 
    
    public IndexController: IndexController = new IndexController() 
    public WalletController: WalletController = new WalletController()
    
    public routes(app): void {   
        
        app.route('/v1/').get(this.IndexController.Test)
        .post(this.IndexController.Test2)

        app.route('/v1/wallet').get(this.WalletController.Get)
        .post(this.WalletController.Post)


        app.route('/v1/wallet-setup')
        .post(this.WalletController.Post)
        

    }
}