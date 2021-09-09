import {Response} from "express";

class TestController {

    public teste( req: Request, res: Response ) {
        return res.send('Servidor Node BitMachine está no ar...');
    }
}

export default new TestController( );