# React-Flux forms app (js/non-js forms and Store)

- Server + Client side rendering via ISO - DONE
- Stores and actions via ALT - DONE
- Make /edit use action + update store- DONE
- Transient + Persistent - TODO

## Maybe
- Make ajax to /api route and update store on response..Flux - TODO
 - not really needed as action can easily be sync/async


##  Issues:
1) without listener on parent updates to store dont cause re-render
- SOLVED SO parent needs listener to store.

2) got to not update until POST form
BUT input wont change unless property changes..
SO dont have input value as data value
BUT then on page load wont show..
- SOLVED move store to state on load, state updated on change, store updated on submit.

3) non-js, post edit, show error + previous post data in form..
ALT doesnt work non-js.
BUT dont seem to be able to update store on server.
WHY doesnt getState() get seedData
- SOLVED need seedData to be same name as store so DataStore.data

4) js, edit form, submit and action returns error, need show error + post data, then navigate away n back and should refresh
- SOLVED async action, if error set state for email + error (in local state so loses if move away), if success (update store +) move page. Store is source of truth and state Transient.

5) js, edit form and have redirect on success, can component just use action in sync manner and have async in action (e.g. http://www.code-experience.com/async-requests-with-react-js-and-flux-revisited/)? Somehow use Store update to re-render and redirect. (why? testing requiring a fake promise for  async action and not using State/Store to re-render).
- SOLVED use componentWillReceiveProps to always check store/props and redirect/update locally based on it, dont use promise implementation anywhere, all unidirectional.

## Supposed issues:
1) js enabled, get error, move away and come back
- SOLU: data in state till can submit, when submit saved, till then errors + data lost when move away

2) js disabled, submit and have error, show post data and error.
- SOLU: having store seed data means on server POST can set seed data and re-render page.
- all page loads will get from db


## Solutions:
- 1 Store holding data + errors.
- Listener to Store on Parent/smart component.
- Each component loads data+errors into local State when loads.
- On submit (js), action updates Store.
 - then lifecycle componentWillReceiveProps checks loaded props (aka store)
 - redirects (success) or updates local state (error).
 - Ajax is only time store is updated.
 - NO ASYNC ACTIONS (promises)
- On submit (no-js), if validation errors update store seedData with transient data OR update and show db data
