var APP = APP || {};

APP.DB = (function(){
	var db, cfg={
		name: 'Twitter.db',
		version: '1.0',
		description: 'Twitter database',
		size: 1*1024*1024
	};

	createTable = 'CREATE TABLE IF NOT EXISTS tweets (id TEXT CONSTRAINT pk_tweet PRIMARY KEY, text TEXT, author TEXT, timestamp INTEGER)';

	try{
		db=openDatabase(cfg.name, cfg.version, cfg.description, cfg.size);
	}
	catch(e){
		if(e.code === 11){
			db.changeVersion(cfg.version);
		}
		console.log(e);
	}
	console.log(db);

	if(db){
		var createSchema = function(tx){
			tx.executeSql(createTable, [], function(tx, results){
				console.log('Table tweet created!!');
				console.log(results);
			}, function(tx, error){
				console.log('DB error: ' + error);
			});
		};
		db.transaction(createSchema);
	}

	var insert = function(tweet){
		var sql = 'INSERT INTO tweets VALUES (?,?,?,?);';

		db.transaction(function(tx){
			tx.executeSql(sql, [tweet.id, tweet.text, tweet.author, tweet.timestamp], function(tx, results){
				console.log('Tweet inserted');
				console.log(results);
			}, function(tx,error){
				console.log('Error inserting');
				console.log(error);
			});
		});
	};

	var getAll = function(success){
		var sql = 'SELECT * FROM tweets;';

		db.transaction(function(tx){
			tx.executeSql(sql, [], function(tx, results){
				console.log('Tweet GOT');
				var arr=[];
				for(var i = results.rows.length - 1;i>=0;i--){
					arr.push(results.rows.item(i));
				}
				// 
				success(arr);

			}, function(tx,error){
				console.log('Error getting DB');
				console.log(error);
			});
		});
	};
	return{
		insert: insert,
		getAll: getAll
	};

})();