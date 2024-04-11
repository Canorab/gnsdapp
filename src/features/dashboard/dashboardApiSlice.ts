/**
 * You can define and inject any api endpoints into the root apiSlice
 * in this case defined the followiing
 * getUsers - Query endpoint, url: /users
 * getDomains - Query endpoint, url: /domains
 * After all, this feature is meant to only fetch and render data and has no mutation responsibility
 */

/*
Should have the getAggregateDataQuery api endpoint which calls the mongodb aggregate data url endpoint; /aggregate
of our mongodb instance.
Therefore, the rtkquery action mentioned above should be responsble for fetching and synching data from our mongodb
aggregate uri endpoint and persisting to state.
*/
