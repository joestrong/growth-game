var game = {
    start: function(){
        Crafty.init(480, 320);
        Crafty.background('green');
        
        Crafty.e('Player')
            .attr({ x: 50, y: 50 });
        Crafty.e('Solid')
            .attr({
                x: 40,
                y: 200,
                w: 100,
                h: 10
            });
    }
}