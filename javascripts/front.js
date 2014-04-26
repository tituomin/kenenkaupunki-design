
var neighborhoods = {}

function handlePoints(obj, status) {
    _.each(obj['objects'], function(o) {
        if (o.type === 'kaupunginosa') {
            neighborhoods[o.origin_id] = o;
        }}
    );
    var sorted = _.sortBy(_.values(neighborhoods), 'name');
    _.each(sorted, function(o) {$('#neighborhoods').append('<div class="neighborhood"><a href="/kaupunginosa#' + o.id  +'">' + o.name + '</a></div>')})
    
}

$.ajax('http://dev.hel.fi/geocoder/v1/district/?limit=300', {'success': handlePoints})
;
