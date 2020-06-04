import knex from '../database/connection';
import {Request, Response} from 'express'


class PointsController{
    async show (req: Request, res: Response){
        const { id } = req.params

        const point = await knex('points').where('id', id).first()

        //caso não encontre nenhum point específico passado no id:
        if(!point){
            return res.status(400).json({message: `Point not found`})
        }


        const items = await knex('items')
        .join('point_items', 'items.id', '=', 'point_items.item_id')
        .where('point_items.point_id', id)
        .select('items.title')




        return res.json({point, items})
    }
    async create (req: Request, res: Response){
        const {name,email,whatsapp,latitude,longitude,city,uf,items} = req.body
    
        const trx = await knex.transaction();
    
        const point = {
            image: 'fake-image',
            name,
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf
        }
        const insertedIds = await trx('points').insert(point);

        const point_id = insertedIds[0]
        
        const pointItems = items.map((item_id: number) => {
            return {item_id,point_id}
        })
    
        await trx('point_items').insert(pointItems)
        trx.commit()
        return res.json({id: point_id,...point})
    }
}

export default PointsController