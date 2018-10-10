/**
 * "Rating" Zome Implementation/API
 *
 * Key Parameters
 ************************************************************
 * Individual Categorical Rating [ICR] (published by Rater)
 * Aggregate Individual Rating [AIR] (each Rater's rating
 *    aggregated over the categories of a selected Ratee)
 * Categorical Aggregate Rating [CAR] (each Ratee's ratings
 *    aggregated over a particular category)
 * Aggregate Community Rating [ACR] (every Rater's rating
 *    aggregated over a selected Ratee)
 ************************************************************
 */

/* Genesis of the application
 */
function genesis()
{
  return true;
}

/* Accepts an Agent's Key (which is the Ratee), and returns the
 * ACR for that Agent.
 * @param arg is String(ratee)
 */
function computeACR(arg)
{
   var entry = get(ratee, { GetMask: HC.GetMask.EntryType })
   if(entry.EntryType == "Status"){
       return entry.Entry.ACR
   }
}

/* Accepts a Rater & Ratee's Keys, and returns the AIR for the value
 * that Rater imparted to that Ratee.
 * @param arg is JSON{ratee, category}
 */
function computeAIR(arg)
{
    // Like the computeACR, if the user's hash is suppose to get us Status entry,
    // there will be a linking between Status and Rating.
    var rateeHash = arg.ratee    // Assuming the ratee's hash returns Status entry.
    var raterHash = arg.category // Assuming the rater's hash returns Status entry.

    /*
        In the computeACR(), we are expecting the agent's hash to fetch us
        Status entries; if so, how are we expected to fetch AIR from
        Rating Entry? - Lee
    */
    return;
}

/* Accepts a Rater & Ratee's Keys, and returns the ICR for
 * the value that Rater imparted to that Ratee for that respective category.
 * @param arg is JSON{ratee, rater, category}
 */
function computeICR(arg)
{

   return;
}

/* Accepts a Ratee Key & a Category for whom all ratings in
 * that category are aggregated and returned (CAR is returned).
 * @param arg is JSON{ratee, category}
 */
function computeCAR(arg)
{
    var rateeStatus = get(arg.ratee) // Assuming get returns status Entry
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors
    return rateeStatus[arg.category.toString()] // Should return the category spcified in the bracket.
}

/* Awaits a notification from any Rater in the DHT
 * a trigger for publishStatus()
 * @param arg is JSON{ratee, category}
 */
function awaitRating(arg)
{

   return;
}

/* Accepts a Ratee's key, and a Category, and commits that rating
 * entry to the Rater's source chain.
 * @param arg is JSON{Ratee, Category[]}
 */
function publishRating(arg)
{
    var ratee = arg.Ratee // arg.Ratee should return ratee's key.
    var Rating = {
        "Reliability": arg.Category[0].toString(),
        "Accuracy": arg.Category[1].toString(),
        "Quality": arg.Category[2].toString(),
        "AIR": (arg.Category[0] + arg.Category[1] + arg.Category[2]).toString(),
        "Ratee": arg.Ratee
    }
    commit("Rating", Rating)
    return {"boolean": "true"}
}


/* Accepts a Ratee's key, and a Category, and commits that rating
 * entry to the Rater's source chain.
 * @param arg is String(entryHash)
 */
function publishStatus(arg)
{

    return;
}

/*
    In order for the commit() to execute, there needs to be a validateCommit().
*/
function validateCommit(){
    return true;
}
