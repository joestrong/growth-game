Crafty.c('Object', {
    init: function(){
        this.requires('2D, Canvas, Color')  
    }
});

Crafty.c('Player', {
    init: function(){
        this.requires('Object, Gravity, Collision, Twoway')
            .attr({
                w: 16,
                h: 32
            })
            .color('yellow')
            .twoway(4, 4)
            .gravity('Solid');
    }
});

Crafty.c('Solid', {
    init: function(){
        this.requires('Object')
            .color('black');
    }
});