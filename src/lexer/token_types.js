
jSQLLexer.token_types = [
	
	// STRINGs
	{pattern: /"(?:[^"\\]|\\.)*"/g,
		type: 'STRING',
		name: "DQ STRING"},
	{pattern: /'(?:[^'\\]|\\.)*'/g,
		type: 'STRING',
		name: "SQ STRING"},

	// COMMENTs
	{pattern: /--.*[\n\r$]/g,
		type: 'COMMENT',
		name: "SINGLE LINE COMMENT"},
	{pattern: /\/\*([\s\S]*?)\*\//g,
		type: 'COMMENT',
		name: "MULTI LINE COMMENT"},

	// WHITESPACE
	{pattern: /\r?\n|\r/g,
		type: 'WHITESPACE',
		name: "LINEBREAK"},
	{pattern: /[ \t]/g,
		type: 'WHITESPACE',
		name: "WHITESPACE"},

	// NUMBERs
	{pattern: /[?-]?\d+.\.\d+/g,
		type: 'NUMBER',
		name: 'FLOAT'},
	{pattern: /[?-]?\d+/g,
		type: 'NUMBER',
		name: 'INTEGER'},

	// QUALIFIERs
	{pattern: /if not exists/gi,
		type: 'QUALIFIER',
		name: "IF NOT EXISTS"},

	// SYMBOLs
	{pattern: /!=/gi,
		type: 'SYMBOL',
		name: "NOT EQUAL"},
	{pattern: /<>/gi,
		type: 'SYMBOL',
		name: "NOT EQUAL"},
	{pattern: /\(/gi,
		type: 'SYMBOL',
		name: "LEFT PEREN"},
	{pattern: /\)/gi,
		type: 'SYMBOL',
		name: "RIGHT PEREN"},
	{pattern: /,/gi,
		type: 'SYMBOL',
		name: "COMMA"},
	{pattern: /\?/gi,
		type: 'SYMBOL',
		name: "QUESTION MARK"},
	{pattern: /,/gi,
		type: 'SYMBOL',
		name: "COMMA"},
	{pattern: /\*/gi,
		type: 'SYMBOL',
		name: "ASTERISK"},
	{pattern: /;/gi,
		type: 'SYMBOL',
		name: "SEMICOLON"},
	{pattern: /=/gi,
		type: 'SYMBOL',
		name: "EQUALS"},
	{pattern: />/gi,
		type: 'SYMBOL',
		name: "GREATER THAN"},
	{pattern: /</gi,
		type: 'SYMBOL',
		name: "LESS THAN"},

	// KEYWORDs
	{pattern: /primary key/gi,
		type: 'KEYWORD',
		name: "PRIMARY KEY"},
	{pattern: /unique key/gi,
		type: 'KEYWORD',
		name: "UNIQUE KEY"},
	{pattern: /values(?=[\s(`,]|$)/gi,
		type: 'KEYWORD',
		name: "VALUES"},
	{pattern: /temporary(?=[\s(`,]|$)/gi,
		type: 'KEYWORD',
		name: "TEMPORARY"},
	{pattern: /from(?=[\s(`,]|$)/gi,
		type: 'KEYWORD',
		name: "FROM"},
	{pattern: /auto_increment(?=[\s(`,]|$)/gi,
		type: 'KEYWORD',
		name: "AUTO_INCREMENT"},
	{pattern: /ignore(?=[\s(`,]|$)/gi,
		type: 'KEYWORD',
		name: "IGNORE"},
	{pattern: /into(?=[\s(`,]|$)/gi,
		type: 'KEYWORD',
		name: "INTO"},
	{pattern: /all(?=[\s(`,]|$)/gi,
		type: 'KEYWORD',
		name: "ALL"},
	{pattern: /distinct(?=[\s(`,]|$)/gi,
		type: 'KEYWORD',
		name: "DISTINCT"},
	{pattern: /distinctrow(?=[\s(`,]|$)/gi,
		type: 'KEYWORD',
		name: "DISTINCTROW"},
	{pattern: /where(?=[\s(`,]|$)/gi,
		type: 'KEYWORD',
		name: "WHERE"},
	{pattern: /and(?=[\s(`,]|$)/gi,
		type: 'KEYWORD',
		name: "AND"},
	{pattern: /like(?=[\s(`,]|$)/gi,
		type: 'KEYWORD',
		name: "LIKE"},
	{pattern: /order by/gi,
		type: 'KEYWORD',
		name: "ORDER BY"},
	{pattern: /or(?=[\s(`,]|$)/gi,
		type: 'KEYWORD',
		name: "OR"},
	{pattern: /limit(?=[\s(`,]|$)/gi,
		type: 'KEYWORD',
		name: "LIMIT"},
	{pattern: /offset(?=[\s(`,]|$)/gi,
		type: 'KEYWORD',
		name: "OFFSET"},
	{pattern: /asc(?=[\s(`,]|$)/gi,
		type: 'KEYWORD',
		name: "ASC"},
	{pattern: /desc(?=[\s(`,]|$)/gi,
		type: 'KEYWORD',
		name: "DESC"},
	{pattern: /set(?=[\s(`,]|$)/gi,
		type: 'KEYWORD',
		name: "SET"},
	{pattern: /not null/gi,
		type: 'KEYWORD',
		name: "NOT NULL"},
	{pattern: /null(?=[\s(`,]|$)/gi,
		type: 'KEYWORD',
		name: "NULL"},
	{pattern: /default(?=[\s(`,]|$)/gi,
		type: 'KEYWORD',
		name: "DEFAULT"},
	{pattern: /table(?=[\s(`,]|$)/gi,
		type: 'KEYWORD',
		name: "TABLE"},
	

	// DIRECTIVEs
	{pattern: /create(?=[\s(`,]|$)/gi,
		type: 'DIRECTIVE',
		name: "CREATE"},
	{pattern: /insert(?=[\s(`,]|$)/gi,
		type: 'DIRECTIVE',
		name: "INSERT"},
	{pattern: /delete from/gi,
		type: 'DIRECTIVE',
		name: "DELETE FROM"},
	{pattern: /drop table/gi,
		type: 'DIRECTIVE',
		name: "DROP TABLE"},
	{pattern: /update(?=[\s(`,]|$)/gi,
		type: 'DIRECTIVE',
		name: "UPDATE"},
	{pattern: /select(?=[\s(`,]|$)/gi,
		type: 'DIRECTIVE',
		name: "SELECT"},

	// IDENTIFIERs are developer specified so should be checked last
	{pattern: /`[0-9a-zA-Z$_]*[0-9a-zA-Z$_]`/gi,
		type: 'IDENTIFIER',
		name: "QTD IDENTIFIER"},
	{pattern: /[0-9a-zA-Z$_]*[0-9a-zA-Z$_]/gi,
		type: 'IDENTIFIER',
		name: "UNQTD IDENTIFIER"}
];
