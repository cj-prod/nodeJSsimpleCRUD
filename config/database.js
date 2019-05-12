if(process.env.NODE_ENV === 'production'){
	module.exports = {mongoURI: 'mongodb+srv://cjprod:cjprod142@tm2cluster-9orb7.mongodb.net/test?retryWrites=true'}
} else{
	module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'}
}