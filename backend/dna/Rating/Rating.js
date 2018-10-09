function genesis () {
  return true;
}

// Accepts an Agent's Key (which is the Ratee), and returns the ACR for that Agent.
/// @parms{ratee}
/// @parms{ratee, category}
/// @parms{ratee, rater, category}
function lookUp(ratee){
   var status = get(ratee) // Returns the Status entry, containing ACR.
   return status.ACR
}

// Accepts a Ratee Key & a Category for whom all ratings in that category are aggregated and returned (CAR is returned).
/// @parms{ratee, category}
function inspect(arg){
   var ratee = API.Agent.hash
   var rating = get(arg) // Should return an entry of containing rating according to the category.
   return rating
}

// Accepts a Ratee's key, and a Category, and commits that rating entry to the Rater's source chain.
/// @parms{content,rating,timestamp}
function publish(arg){
   var publish_schema = {arg.content, arg.rating, arg.timestamp}
   commit("publish", publish_schema)
}
