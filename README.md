# React-Flux forms app (js/non-js forms and Store)


Server + Client side rendering via ISO - DONE
Stores and actions via ALT - DONE
Make /edit use action + update store- DONE
Transient + Persistent - TODO

## MAYBE
Make ajax to /api route and update store on response..Flux - TODO
- not really needed as action can easily be sync/async

##  ISSUES:
1) without listener on parent updates to store dont cause re-render
SOLVED SO parent needs listener to store.

2) got to not update until POST form
BUT input wont change unless property changes..
SO dont have input value as data value
BUT then on page load wont show..
SOLVED move store to state on load, state updated on change, store updated on submit.

3) non-js, post edit, show error + previous post data in form..
ALT doesnt work non-js.
BUT dont seem to be able to update store on server.
WHY doesnt getState() get seedData
SOLVED need seedData to be same name as store so DataStore.data
