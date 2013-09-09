var game = {
    start: function(){
        Crafty.init(480, 320);
        Crafty.background('green');
        
        Crafty.e('Player');
        Crafty.e('Solid')
            .attr({
                x: 10,
                y: 200,
                w: 50,
                h: 10
            });
    }
}