var names;
function preload() {
	names = loadTable('Popular_Baby_Names.csv', 'csv', 'header');
}
function setup() {
	createCanvas(640, 360);
	background(51);
	textAlign(CENTER, CENTER);
    noStroke();


	for (let i = 0; i < names.getRowCount(); i++) {
		let rank = names.getNum(i, 'Rank');
		let count = names.getNum(i, 'Count');
        let year = names.getNum(i, 'Year of Birth');
        let h = map(count, 0, 387, 0, height );
        var w = 2;
        var x = i * w;

		fill('lightblue');
		rect(x, height - count, w, count );

		fill('white');
		noStroke();
//		text(rank, x, y);


	}
}