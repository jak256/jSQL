var expect = require('chai').expect;
var jSQL = require("../jSQL.js");

jSQL.load(()=>{
	describe('Temp Table Test', function () {
		it('Testing temp table', function(){
			jSQL.createTable({myTable: [
				{ name: "ID", type: "INT", args: [], key: "primary", auto_increment: true }, 
				{ name: "Name", type: "VARCHAR", args: [30] }
			]}).temporary().execute();
			expect(!!jSQL.tables.myTable).to.be.true;
		});
		it('Testing temp table parser', function(){
			jSQL.query("create temporary table fartypoops (id int, name varchar)").execute();
			expect(jSQL.tables.fartypoops.isTemp).to.be.true;
		});
	});
});

	

