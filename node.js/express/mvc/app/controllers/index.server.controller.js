exports.render = function(req,res)
{
		res.send('hello world');
};

app.get('/',function(req,res){
		res.send('This is a GET request');
});


