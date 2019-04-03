var water;
function preload() {
	Names = loadTable('Popular_Baby_Names.csv', 'csv', 'header');
}
function setup() {
	createCanvas(640, 360);
	background(51);
	textAlign(CENTER, CENTER);

	let x = 50;
	let y = 25;
	for (let i = 0; i < Names.getRowCount(); i++) {
		let Rank = Popular_Baby_Names.getNum(i, 'Rank');
		let Count = Popular_Baby_Names.getNum(i, 'Count') / 4;

		fill('lightblue');
		ellipse(x, y, Count);

		fill('white');
		noStroke();
		text(Year of Birth, x, y);

		x += 100;
		if (x > width) {
			x = 50;
			y += 50;
		}
	}
}