import {Request, Response, NextFunction} from "express";
import { IndexController } from "../controllers/TestController";



export class Routes { 
    
    public IndexController: IndexController = new IndexController() 
    
    public routes(app): void {   
        
        app.route('/').get(this.IndexController.Test)
        .post(this.IndexController.Test2)
        

    }
}