# Oct 8 Standup notes

## Holochain Glossary

### When the agent goes offline

#### hcd
 - Source Chain retained by the DHT.

#### hcdev

 - Source Chain not retained.

### Identifying Agents by `@usertag`

 - Locate agent using `App.Agent.Hash`.
 - Determine agent `@usertag` from `App.Agent.string`

### Rating an Agent

 - Locate agent using `App.Agent.Hash`.
 - Link to this Agent the entry in your own Source Chain, that is the rating itself. 

## Parameter listings

### Initial parameters

 - Individual Categorical Rating [ICR] (published by Rater)
 - Aggregate  Individual Rating [AIR] (each Rater's rating aggregated over a selected Ratee)
 - Categorical Aggregate Rating [CAR] (each Ratee's ratings aggregated over a particular category)
 - Aggregate Community Rating [ACR] (every Rater's rating aggregated over a selected Ratee)

### Initial functionality

 - `lookup(Ratee) -> [ACR]`
     - Accepts an Agent's Key (which is the Ratee), and returns the ACR for that Agent.
 - `lookup(Ratee, Rater) -> [AIR]`
     - Accepts a Rater & Ratee's Keys, and returns the AIR for the value that Rater imparted to that Ratee.
 - `lookup(Ratee, Rater, Category) -> [ICR]`
     - Accepts a Rater & `Ratee`'s Keys, and returns the `ICR` for the value that Rater imparted to that `Ratee` for that respective category.
 - `inspect(Ratee, Category) -> [CAR]`
     - Accepts a `Ratee` Key & a `Category` for whom all ratings in that category are aggregated and returned (`CAR` is returned).
 - `publish(Ratee, Category)`
     - Accepts a `Ratee`'s key, and a `Category`, and commits that rating entry to the Rater's source chain.

### Key Categories

 - `Reputation` - defines a fixed value that is the reputation of the Agent.
 - {`Additional`}+ - defines a fixed value that is a rating for any additional categories.
