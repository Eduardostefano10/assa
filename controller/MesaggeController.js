import { getConnection } from "../public/database";


const getMessage = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT sms FROM message");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};


const addMessage = async (req, res) => {
    try {
        const { sms } = req.body;

        if (sms === undefined ) {
            res.status(400).json({ message: "Mala Respuesta. Please fill all field." });
        }

        const language = { sms };
        const connection = await getConnection();
        await connection.query("INSERT INTO message SET ?", language);
        res.json({ message: "Language added" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};


export const methods = {
    getMessage,
    addMessage,
    
};