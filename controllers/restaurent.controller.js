import Restaurant from "../models/restaurent.model.js";

export const addRestaurent = async(req, res) => {
    try {
        const {title, restaurentAddress} = req.body;
        if(!title || !restaurentAddress){
            return res.status(400).json({message:"You can't leave mandatory fields blank!"});
        }

        const newRestaurent = new Restaurant(req.body);
        await newRestaurent.save();

        return res.status(201).json(newRestaurent);

    } catch (error) {
        return res.status(500).json({error:error.message});
    }
}

export const getRestaurents = async(req, res) => {
    try {
        const restaurents = await Restaurant.find();
        if(!restaurents){
            return res.status(404).json({message:'You have no restaurents yet!'});
        }

        return res.status(200).json(restaurents);
        
    } catch (error) {
        return res.status(500).json({error:error.message});
    }
}