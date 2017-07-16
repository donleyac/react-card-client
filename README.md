Under Active development, NOT in playable state

__GOAL:__ Play singleplayer/multiplayer card games all you need to do is load a config file.

__RELEASE:__ Playable release will be versioned 1.0

__GETTING STARTED:__

```npm install```

```npm run start```

__REQUIREMENTS:__

Backend: [react-card-engine](https://github.com/donleyac/react-card-engine)

__PROCESS FLOW:__
* Client Connects to Port 8090 -> Emit Server Store to Client
* Client Emits Action -> Merge Action into Server Store
* Server Store Changes -> Emit Server Store to all Clients

__ACTION CREATORS:__
* modIndicator
* modCollection
* setState
* setCollectionPosition

__REDUX REDUCER ACTIONS:__
* SET_STATE: Merge state with new state
* COLLECTION_POS: Set size and position of collection
