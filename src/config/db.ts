import {connect} from 'mongoose'

const createDBConnection = async () => {
    try {
        const conn = await connect(process.env.DEV_DB_URI!, {
            
        })
        console.log('🖥️  Database connected : ',conn.connection.host)
    } catch (error) {
        console.log('❌  Database Errored : ',error)
    }
}

export default createDBConnection