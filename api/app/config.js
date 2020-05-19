const config = {
    databaseUrl: 'mongodb+srv://patryk:1234@cluster0-yd0qa.mongodb.net/test?retryWrites=true&w=majority\n',
    JwtSecret: process.env.JWT_SERCRET || 'secret',
    port: 3000

};

export default config
