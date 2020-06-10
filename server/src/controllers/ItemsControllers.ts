import {Request, Response} from 'express'
import knex from '../database/connection'

class ItemsControllers{
    async index(req: Request, res: Response){
        const items = await knex('items').select('*');//Select todos os items dentro da tabela Items

    
    //serialização de informação.
    const serializedItems = items.map( items => {
        return {
            id: items.id,
            title: items.title,
            image_url: `http://localhost:3333/tmp/${items.image}`}
        }
        )
        res.json(serializedItems)
        
    }
}
    
export default ItemsControllers