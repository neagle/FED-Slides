(function() {

var animate,
    mouseX = 0, mouseY = 0,
    fillHue = 0;

function init() {

    var $body = $( 'body' );

    // Don't initialize till our articles actually have height/width
    // This is a hacky way of creating an onready event for the slides
    if ( ! $( 'article' ).first().width() ) {

        setTimeout( init, 100 );

    } else {

        var $canvas = $( '<canvas />' ).appendTo( '.biglogo' ),
            canvas = $canvas[0],
            $parent = $canvas.parent(),
            ctx = canvas.getContext( '2d' );


        ctx.canvas.width = $parent.width();
        ctx.canvas.height = $parent.height();

        console.log( $parent, $parent.width() );

        // Add the mouse move listener
        document.addEventListener( 'mousemove', onMouseMove, false );

        // The most important step! Draw the FED logo
        draw( ctx );

        // Use a setInterval if you want to animate the logo
        setInterval( (function() { draw( ctx ) }), 1000/30 );

        // Go nuts with other effects if you prefer
        // var fedParticles = particleize( ctx );

        // drawParticles( ctx, fedParticles );
        // setInterval( (function() { drawParticles( ctx, fedParticles ) }), 1000/30 );
        
    }
}

function draw( ctx ) {

    // Set the width of the FED Logo
    var desiredWidth = ( ctx.canvas.width - 100 ),
        scale = desiredWidth / fedLogo.width;

    // Erase the canvas
    ctx.clearRect( 0, 0, ctx.canvas.width, ctx.canvas.height );

    ctx.save();

    // Set the fill color
    ctx.fillStyle = 'hsla( ' + fillHue + ', 50%, 50%, 1 )';

    // Center the FED Logo
    fedLogo.x = ( ctx.canvas.width / 2 ) - ( ( fedLogo.width * scale ) / 2 );
    fedLogo.y = ( ctx.canvas.height / 2 ) - ( ( fedLogo.height * scale ) / 2 );
    ctx.translate( fedLogo.x, fedLogo.y ); 

    // Resize the FED Logo
    ctx.scale( scale, scale );

    // Draw the FED Logo
    fedLogo.render( ctx );

    ctx.fill();
    ctx.restore();

    updateColor();

}

var fedLogo = {
    height: 68,
    width: 289,
    x: 0,
    y: 0,
    render: function( ctx ) {

        // Created with Ai->Canvas Export Plug-In Version 1.0 (Mac)
        // By Mike Swanson (http://blogs.msdn.com/mswanson/)
        // and MIX Online  (http://visitmix.com/)

        // Overall dimensions are 289 x 68

        ctx.beginPath();

        ctx.moveTo(260.9, 0.0);
        ctx.lineTo(195.0, 0.0);
        ctx.lineTo(195.0, 39.6);
        ctx.lineTo(207.0, 39.6);
        ctx.lineTo(207.0, 12.0);
        ctx.lineTo(260.9, 12.0);
        ctx.bezierCurveTo(269.3, 12.0, 276.1, 18.8, 276.1, 27.2);
        ctx.lineTo(276.1, 40.5);
        ctx.bezierCurveTo(276.1, 48.9, 269.3, 55.7, 260.9, 55.7);
        ctx.lineTo(201.0, 55.7);
        ctx.lineTo(201.0, 55.7);
        ctx.lineTo(120.8, 55.7);
        ctx.bezierCurveTo(112.4, 55.7, 105.6, 48.9, 105.6, 40.5);
        ctx.lineTo(105.6, 39.6);
        ctx.lineTo(186.6, 39.6);
        ctx.lineTo(186.7, 32.5);
        ctx.lineTo(186.7, 27.2);
        ctx.bezierCurveTo(186.7, 12.2, 174.5, 0.0, 159.5, 0.0);
        ctx.lineTo(120.8, 0.0);
        ctx.bezierCurveTo(105.8, 0.0, 93.6, 12.2, 93.6, 27.2);
        ctx.lineTo(93.6, 27.6);
        ctx.lineTo(12.0, 27.6);
        ctx.lineTo(12.0, 27.2);
        ctx.bezierCurveTo(12.0, 20.2, 16.8, 14.2, 23.4, 12.5);
        ctx.bezierCurveTo(24.6, 12.2, 25.9, 12.0, 27.2, 12.0);
        ctx.lineTo(87.1, 12.0);
        ctx.lineTo(87.1, 0.0);
        ctx.lineTo(27.2, 0.0);
        ctx.bezierCurveTo(15.0, 0.0, 4.7, 8.0, 1.2, 19.1);
        ctx.bezierCurveTo(0.4, 21.7, 0.0, 24.4, 0.0, 27.2);
        ctx.lineTo(0.0, 53.9);
        ctx.lineTo(0.0, 67.9);
        ctx.lineTo(12.0, 67.9);
        ctx.lineTo(12.0, 39.6);
        ctx.lineTo(30.6, 39.6);
        ctx.lineTo(30.6, 39.6);
        ctx.lineTo(93.6, 39.6);
        ctx.lineTo(93.6, 40.5);
        ctx.bezierCurveTo(93.6, 55.6, 105.8, 67.7, 120.8, 67.7);
        ctx.lineTo(260.9, 67.7);
        ctx.bezierCurveTo(275.9, 67.7, 288.1, 55.6, 288.1, 40.5);
        ctx.lineTo(288.1, 27.2);
        ctx.bezierCurveTo(288.1, 12.2, 275.9, 0.0, 260.9, 0.0);
        ctx.closePath();

        // layer1/Compound Path/Path
        ctx.moveTo(105.6, 27.2);
        ctx.bezierCurveTo(105.6, 18.8, 112.4, 12.0, 120.8, 12.0);
        ctx.lineTo(159.5, 12.0);
        ctx.bezierCurveTo(167.9, 12.0, 174.7, 18.8, 174.7, 27.2);
        ctx.lineTo(174.7, 27.6);
        ctx.lineTo(105.6, 27.6);
        ctx.lineTo(105.6, 27.2);
        ctx.closePath();

    }
}

function drawParticles( ctx, particles ) {

    // Erase the canvas
    ctx.clearRect( 0, 0, window.innerWidth, window.innerHeight );

    ctx.save();
    ctx.fillStyle = 'hsla( ' + fillHue + ', 50%, 50%, 1 )';

    for ( var i = 0, length = particles.length; i < length; i += 1 ) {
        var x = particles[i][0],
            y = particles[i][1];
            // distance = Math.sqrt( Math.pow( mouseX - x, 2 ) + Math.pow( mouseY - y, 2 ) );
            // distance = Math.sqrt( Math.pow( ( window.innerWidth / 2 ) - x, 2 ) + Math.pow( ( window.innerHeight / 2 ) - y, 2 ) );
        

        ctx.beginPath();
        ctx.arc( x, y, 2, 0, Math.PI * 2, true );
        ctx.fill();
    }

    ctx.restore();

    updateColor();
    
}

function updateColor() {
    fillHue += 1;

    if ( fillHue > 360 ) {
        fillHue = 0;
    }
}

function onMouseMove( event ) {
    // store the mouseX and mouseY position
    mouseX = event.clientX;
    mouseY = event.clientY;
}

function particleize( ctx, space ) {
    var points = [],
        space = space || 5;

    for ( var i = 0, width = ctx.canvas.width; i <= width; i += space ) {
        for ( var j = 0, height = ctx.canvas.height; j <= height; j += space ) {
        
            var data = ctx.getImageData( i, j, 1, 1 ).data;

            if ( data[0] !== 0 || data[1] !== 0 || data[2] !== 0 ) { 
                points.push([ i, j ]);
            }

        }
    }

    // console.log( ctx.getImageData( 200, 200, 1, 1 ) );

    // console.log( 'Points:', points );
    return points;
}

$( document ).ready(function() {
    init();
});

})();
