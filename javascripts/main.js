

var hash = window.location.hash.substring(1);
selectNeighborhood(hash);

function handleNeighborhood(obj, status) {
    console.log(obj);
    $('h1').text(obj.name + ' 2050');
}


function selectNeighborhood(nid) {
    $.ajax('http://dev.hel.fi/geocoder/v1/district/' + nid, {'success': handleNeighborhood})
}

function getRespondents(nid) {
    return respondents[nid];
}

function meanRespondentValue(attribute, nid) {
    var respondents = respondents[nid];
    var sum = _.reduce(respondents, function(sum, val) {
        return sum + val[attribute];
    }, 0);
    var count = _.size(respondents);
    return sum / count;
}

function sortRespondentValues(attribute, nid) {
    var respondents = respondents[nid];
    var counts = {}
    _.each(respondents, function(resp) {
        var val = resp[attribute];
        if (!_.has(counts, val)) {
            counts[val] = {'count': 0, 'value': val}
        }
        counts[val].count = counts[val].count + 1;
    });
    var vals = counts.values();
    var sorted = _.sortBy(vals, 'count');
    return sorted;
}

;
