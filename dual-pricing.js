var applause = applause || {};

applause.exchangeRate = function( selector ) {

    var obj = [];
    obj.selector = selector;
    obj.exchangeRate = 7.5345;
    obj.locale = 'hr-HR';

    obj.init = function() {

        jQuery( obj.selector ).each(function( k, v ) {

            obj.priceText = jQuery(v).text();

            obj.priceValue = obj.strToFloat( obj.priceText ) / obj.exchangeRate;

            // ADJUST CSS HERE

            jQuery(v).append( '<small style="font-size: 13px; opacity: 0.8; margin-top: 5px; display: block;">' + obj.floatToStr( obj.priceValue ) + '</small>' );
        });

    };

    obj.strToFloat = function( str ) {

        // 749,00 kn => 749.00
        // 749,00kn => 749.00
        // 1.749,00kn => 1749.00

        // ADJUST TO MATCH CURRENT FORMAT

        return str.replace('kn','').trim().replace('.', '').replace(',', '.');

    };

    obj.floatToStr = function( float ) {
        return float.toLocaleString(obj.locale, { style: 'currency', currency: 'EUR' });
    };

    obj.init();
}


jQuery(document).ready(function($) {

    // INSERT TARGET NAMES

    var target_names = [ '.price__regular .price-item', '.price__sale .price-item' ];

    for( var i=0; i<target_names.length; i++ ) {

        if( $( target_names[i] ).length ) {
            applause.exchangeRate( target_names[i] );
        }
    }
});