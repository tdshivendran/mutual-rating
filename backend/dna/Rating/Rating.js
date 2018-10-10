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
   var status = get(ratee)
   return status.ACR
}

/* Accepts a Rater & Ratee's Keys, and returns the AIR for the value
 * that Rater imparted to that Ratee.
 * @param arg is JSON{ratee, category}
 */
function computeAIR(arg)
{

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

   return;
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
 * @param arg is JSON{Ratee, Category}
 */
function publishRating(arg)
{

    return;
}


/* Accepts a Ratee's key, and a Category, and commits that rating
 * entry to the Rater's source chain.
 * @param arg is String(entryHash)
 */
function publishStatus(arg)
{

   return;
}
