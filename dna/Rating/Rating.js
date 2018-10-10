function genesis () {
  return true;
}

// ratee is the hash of the ratee.
function computeACR(ratee){
    var entry = get(ratee, { GetMask: HC.GetMask.EntryType })
    if(entry.EntryType == "Status"){
        return entry.Entry.ACR
    }
}

/// @parms{ratee, category}
// I don't really understand what he was thinking on this matter.
function computeAIR(args){
}

// Accepts a Ratee Key & a Category for whom all ratings in that category are aggregated and returned (CAR is returned).
/// @parms{ratee, category}
function inspect(arg){
   var ratee = API.Agent.hash
   var rating = get(arg) // Should return an entry of containing rating according to the category.
   return rating
}

/*
    If we are commiting an Entry, why not have all categories be committed with it?
*/
// Accepts a Ratee's key, and a Category, and commits that rating entry to the Rater's source chain.
/// @parms{Ratee, Category}
function publishRating(arg){
    var ratee = arg.Ratee // arg.Ratee should return ratee's key.
    var category = arg.Category // Should return the category of ratee is rating on.
    var Rating = {
        "Reliability": /* Fetch value from the front end*/,
        "Accuracys": /* Fetch value from the front end*/,
        "Quality": /* Fetch value from the front end*/,
        "AIR": ,
        "Ratee": ratee.toString
    }
    commit("Rating", Rating)
}
